/* =========================================================================
   mathrender.js — Shared KaTeX rendering for dynamically-injected SPA content
   - M(tex[,block])   → placeholder span carrying LaTeX (rendered later)
   - render(root)     → renders span.m via katex.render AND runs
                        renderMathInElement() on raw $...$ (per user request).
                        Falls back to a lightweight formatter if KaTeX absent.
   Exposes: window.MR { M, render, fallbackTex }
   ========================================================================= */
(function () {
  "use strict";

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  // Placeholder span holding LaTeX in data-tex (rendered by render()).
  function M(tex, block){ return '<span class="m'+(block?" m-block":"")+'" data-tex="'+esc(tex)+'"></span>'; }

  // Lightweight fallback used only when KaTeX assets are not present yet.
  function fallbackTex(tex){
    let s = " " + tex + " ";
    s = s.replace(/\\sqrt\{([^}]*)\}/g, "√($1)")
         .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, "($1)/($2)")
         .replace(/\\cdot/g, "·").replace(/\\times/g, "×")
         .replace(/\\le\b/g, "≤").replace(/\\ge\b/g, "≥")
         .replace(/\\neq\b/g, "≠").replace(/\\equiv\b/g, "≡")
         .replace(/\\dots|\\ldots/g, "…").replace(/\\,/g, " ");
    s = s.replace(/\^\{([^}]*)\}/g, "<sup>$1</sup>").replace(/\^(-?\w)/g, "<sup>$1</sup>")
         .replace(/_\{([^}]*)\}/g, "<sub>$1</sub>").replace(/_(-?\w)/g, "<sub>$1</sub>");
    s = s.replace(/[{}]/g, "").replace(/\\[a-zA-Z]+/g, "");
    return '<span class="mfb">' + s.trim() + '</span>';
  }

  /* ------------------------------------------------------------------ *
   * Opsi KaTeX baku.
   *
   * trust:true  WAJIB. Konten memakai \htmlClass{...}{...} untuk menandai
   *             struktur rumus (hl-var, hl-coef, hl-pow, hl-const, hl-1..3).
   *             KaTeX memperlakukan \htmlClass sebagai perintah "tepercaya"
   *             dan MEMBUANGNYA diam-diam bila trust tidak dinyalakan — itulah
   *             sebabnya sebelum ini 51 penanda warna tidak pernah muncul.
   *             Aman di sini: seluruh LaTeX berasal dari berkas konten kita
   *             sendiri, tidak ada masukan pengguna yang dirender sebagai math.
   * strict:false  agar notasi lokal (mis. koma desimal 0{,}5) tidak memicu
   *             peringatan konsol.
   *
   * Jangkar visual: \htmlClass juga menjadi PEGANGAN DOM bagi js/visuals.js
   * untuk menggambar panah/garis penghubung di atas rumus yang sudah terender.
   * ------------------------------------------------------------------ */
  function KOPT(block){
    return {
      displayMode: !!block,
      throwOnError: false,
      trust: true,
      strict: false
    };
  }

  function render(root){
    if(!root) return;

    // 1) Render explicit placeholders (reliable for injected content)
    root.querySelectorAll("span.m").forEach(function(el){
      if(el.dataset.done) return;
      const tex = el.dataset.tex || "";
      if(window.katex && window.katex.render){
        try{
          window.katex.render(tex, el, KOPT(el.classList.contains("m-block")));
          el.dataset.done="1"; return;
        }catch(e){}
      }
      el.innerHTML = fallbackTex(tex); el.dataset.done="1";
    });

    // 2) Also auto-render any raw $...$ / $$...$$ delimiters in the subtree.
    //    REQUIRED for SPA: content is injected post-load, so this is called
    //    explicitly right after DOM injection (auto-render on load won't see it).
    if(window.renderMathInElement){
      try{
        window.renderMathInElement(root, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$",  right: "$",  display: false }
          ],
          ignoredClasses: ["m", "mfb"],   // don't reprocess placeholders
          throwOnError: false,
          trust: true,                    // lihat catatan pada KOPT()
          strict: false
        });
      }catch(e){}
    }
  }

  window.MR = { M, render, fallbackTex };
})();
