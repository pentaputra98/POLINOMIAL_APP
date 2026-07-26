/* =========================================================================
   ui.js — Reusable Neo-Brutalism UI helpers
   - NBSelect(opts)                  → custom themed dropdown (no native <select>)
   - DragDrop.makeDraggable(el,opts) → touch + mouse drag with basket hit-test
   Exposes: window.NBSelect, window.DragDrop
   ========================================================================= */
(function () {
  "use strict";

  /* ---------------- Custom dropdown ---------------- */
  function NBSelect(opts){
    opts = opts || {};
    const wrap = document.createElement("div");
    wrap.className = "nbselect";
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "nbselect-btn";
    btn.innerHTML = '<span class="nbselect-label">'+(opts.placeholder||"— pilih —")+'</span><i class="fa-solid fa-chevron-down"></i>';
    const list = document.createElement("div");
    list.className = "nbselect-list";
    (opts.options||[]).forEach(function(o){
      const it = document.createElement("button");
      it.type = "button"; it.className = "nbselect-opt";
      it.textContent = o.label; it.dataset.value = o.value;
      list.appendChild(it);
    });
    wrap.appendChild(btn); wrap.appendChild(list);

    let value = null;
    function closeOthers(){ document.querySelectorAll(".nbselect.open").forEach(function(x){ if(x!==wrap) x.classList.remove("open"); }); }
    btn.addEventListener("click", function(e){ e.stopPropagation(); closeOthers(); wrap.classList.toggle("open"); });
    list.addEventListener("click", function(e){
      const it = e.target.closest(".nbselect-opt"); if(!it) return;
      value = it.dataset.value; wrap.dataset.value = value;
      btn.querySelector(".nbselect-label").textContent = it.textContent;
      wrap.classList.remove("open"); wrap.classList.add("chosen");
      if(window.SFX) window.SFX.play("pop");
      if(opts.onChange) opts.onChange(value);
    });

    wrap.getValue = function(){ return value; };
    return wrap;
  }
  document.addEventListener("click", function(){ document.querySelectorAll(".nbselect.open").forEach(function(x){ x.classList.remove("open"); }); });

  /* ---------------- Drag & drop (touch + mouse) ---------------- */
  function pointOf(e){
    if(e.touches && e.touches[0]) return e.touches[0];
    if(e.changedTouches && e.changedTouches[0]) return e.changedTouches[0];
    return e;
  }
  function basketAt(baskets, x, y){
    for(let i=0;i<baskets.length;i++){
      const r = baskets[i].getBoundingClientRect();
      if(x>=r.left && x<=r.right && y>=r.top && y<=r.bottom) return baskets[i];
    }
    return null;
  }

  // opts: { getBaskets:()=>[el], onDrop:(el,basket)=>bool, onGrab, onRelease, isLocked }
  // The token stays in flow but a live `transform: translate(dx,dy)` makes it
  // strictly follow the pointer/finger (works on touch AND mouse).
  function makeDraggable(el, opts){
    let dragging=false, sx=0, sy=0;
    const XF = (dx,dy)=> "translate("+dx+"px,"+dy+"px) scale(1.08) rotate(-2deg)";

    function start(e){
      if(opts.isLocked && opts.isLocked(el)) return;
      const p = pointOf(e);
      sx = p.clientX; sy = p.clientY;
      dragging = true;
      el.classList.add("is-dragging");
      el.style.transform = XF(0,0);
      document.addEventListener("mousemove", move, { passive:false });
      document.addEventListener("mouseup", end);
      document.addEventListener("touchmove", move, { passive:false });
      document.addEventListener("touchend", end);
      document.addEventListener("touchcancel", end);
      if(opts.onGrab) opts.onGrab(el);
      if(e.cancelable) e.preventDefault();
    }
    function move(e){
      if(!dragging) return;
      const p = pointOf(e);
      // follow the finger precisely
      el.style.transform = XF(p.clientX - sx, p.clientY - sy);
      const baskets = opts.getBaskets();
      const over = basketAt(baskets, p.clientX, p.clientY);
      baskets.forEach(function(b){ b.classList.toggle("hover", b===over); });
      if(e.cancelable) e.preventDefault();   // stop the card/page from scrolling mid-drag
    }
    function end(e){
      if(!dragging) return;
      dragging = false;
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", end);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", end);
      document.removeEventListener("touchcancel", end);
      const p = pointOf(e);
      const baskets = opts.getBaskets();
      baskets.forEach(function(b){ b.classList.remove("hover"); });
      const b = basketAt(baskets, p.clientX, p.clientY);
      el.classList.remove("is-dragging");
      el.style.transform = "";               // snap back into its slot (or onDrop relocates it)
      if(opts.onRelease) opts.onRelease(el);
      if(b && opts.onDrop) opts.onDrop(el, b);
    }

    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start, { passive:false });
  }

  /* ---------------- Mini-Slides (zero-scroll content pager) ---------------- */
  // cfg: { icon, title, slides:[htmlString], onShow(index, slideEl) }
  function mountSlides(cardEl, cfg){
    const N = cfg.slides.length;
    cardEl.innerHTML =
      '<div class="card-head-row"><h3 class="card-h"><i class="fa-solid '+cfg.icon+'"></i> '+cfg.title+'</h3>'+
        (N>1 ? '<span class="slide-count">1/'+N+'</span>' : '')+'</div>'+
      '<div class="slide-viewport"></div>'+
      (N>1 ?
        '<div class="slide-nav">'+
          '<button class="btn-slide slide-prev" aria-label="Slide sebelumnya"><i class="fa-solid fa-arrow-left"></i></button>'+
          '<span class="slide-dots"></span>'+
          '<button class="btn-slide slide-next" aria-label="Slide berikutnya"><i class="fa-solid fa-arrow-right"></i></button>'+
        '</div>' : '');
    const vp = cardEl.querySelector(".slide-viewport");
    cfg.slides.forEach(function(html,i){ const s=document.createElement("div"); s.className="slide"+(i===0?" active":""); s.innerHTML=html; vp.appendChild(s); });

    let idx=0;
    const countEl=cardEl.querySelector(".slide-count");
    const dotsEl=cardEl.querySelector(".slide-dots");
    const prevB=cardEl.querySelector(".slide-prev"), nextB=cardEl.querySelector(".slide-next");
    if(dotsEl){ for(let i=0;i<N;i++){ const d=document.createElement("span"); d.className="sdot"+(i===0?" on":""); dotsEl.appendChild(d); } }

    function show(i, user){
      idx=Math.max(0,Math.min(N-1,i));
      const slides=vp.querySelectorAll(".slide");
      slides.forEach(function(s,k){ s.classList.toggle("active",k===idx); });
      if(countEl) countEl.textContent=(idx+1)+"/"+N;
      if(dotsEl) dotsEl.querySelectorAll(".sdot").forEach(function(d,k){ d.classList.toggle("on",k===idx); });
      if(prevB) prevB.disabled=idx===0;
      if(nextB) nextB.disabled=idx===N-1;
      if(vp) vp.scrollTop=0;                       // reset scroll on slide change
      if(cfg.onShow) cfg.onShow(idx, slides[idx]);
      if(idx===N-1 && cfg.onLast) cfg.onLast();     // reached the final slide → step "read"
      if(window.__onSlideChange) window.__onSlideChange();
      if(user && window.SFX) window.SFX.play("swoosh");
    }
    if(prevB) prevB.addEventListener("click",()=>show(idx-1,true));
    if(nextB) nextB.addEventListener("click",()=>show(idx+1,true));
    show(0,false);
    const ctrl = {
      show:(i)=>show(i,false),
      next:()=>show(idx+1,true),
      prev:()=>show(idx-1,true),
      get index(){return idx;},
      count:N, viewport:vp, cardEl:cardEl
    };
    cardEl._slides = ctrl;   // let the host (app.js) drive slides via bottom-nav
    return ctrl;
  }

  window.NBSelect = NBSelect;
  window.DragDrop = { makeDraggable, basketAt };
  window.Slides = { mount: mountSlides };
})();
