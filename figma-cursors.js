/**
 * figma-cursors.js
 * Simulates Figma-style multiplayer cursors roaming the page.
 */
(function () {
  if (window.innerWidth < 768) return; // skip on mobile

  var USERS = [
    { name: 'Alex M.',   color: '#7B61FF' },
    { name: 'Sarah K.',  color: '#F24E1E' },
    { name: 'Tom W.',    color: '#1BC47D' },
    { name: 'Priya S.',  color: '#0D99FF' },
  ];

  // ── Styles ──────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent =
    '.fc{position:fixed;top:0;left:0;pointer-events:none;z-index:99999;will-change:transform;}' +
    '.fc-label{position:absolute;top:20px;left:6px;padding:2px 8px;border-radius:4px;' +
    'font-family:"Inter",system-ui,sans-serif;font-size:11px;font-weight:600;' +
    'color:#fff;white-space:nowrap;line-height:1.6;box-shadow:0 1px 3px rgba(0,0,0,.2);}';
  document.head.appendChild(style);

  // ── Cursor SVG ───────────────────────────────────────────────────────────
  function makeCursorEl(user) {
    var el = document.createElement('div');
    el.className = 'fc';
    el.style.opacity = '0';
    el.style.transition = 'opacity .35s ease';
    el.innerHTML =
      '<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M2 2L2 18.5L6 14L9.5 21.5L12 20.5L8.5 13H15L2 2Z"' +
        ' fill="' + user.color + '" stroke="white" stroke-width="1.5"' +
        ' stroke-linejoin="round" stroke-linecap="round"/>' +
      '</svg>' +
      '<div class="fc-label" style="background:' + user.color + '">' + user.name + '</div>';
    document.body.appendChild(el);
    return el;
  }

  // ── Instances ────────────────────────────────────────────────────────────
  var instances = USERS.map(function (user, i) {
    return {
      el:        makeCursorEl(user),
      x: 0, y: 0,
      tx: 0, ty: 0,
      pausing:   false,
      pauseEnd:  0,
      visible:   false,
      showAfter: Date.now() + 800 + i * 1400 + Math.random() * 1200,
    };
  });

  // ── Helpers ──────────────────────────────────────────────────────────────
  function randomTarget() {
    return {
      x: 60 + Math.random() * (window.innerWidth  - 120),
      y: 60 + Math.random() * (window.innerHeight - 120),
    };
  }

  function teleport(inst) {
    var t = randomTarget();
    inst.x = t.x; inst.y = t.y;
    inst.tx = t.x; inst.ty = t.y;
  }

  function pickTarget(inst) {
    var t = randomTarget();
    inst.tx = t.x; inst.ty = t.y;
  }

  // ── Main loop (single rAF — never call it more than once per frame) ──────
  var lastTime = 0;

  function frame(now) {
    var dt = Math.min(now - lastTime, 50);
    lastTime = now;

    instances.forEach(function (inst) {
      // Appear
      if (!inst.visible) {
        if (now >= inst.showAfter) {
          inst.visible = true;
          teleport(inst);
          pickTarget(inst);
          inst.el.style.opacity = '1';
        }
        return; // just skip this cursor this frame — no rAF here
      }

      // Pausing
      if (inst.pausing) {
        if (now < inst.pauseEnd) return;
        inst.pausing = false;

        // Occasionally vanish and reappear elsewhere
        if (Math.random() < 0.18) {
          inst.visible = false;
          inst.el.style.opacity = '0';
          inst.showAfter = now + 2500 + Math.random() * 5000;
          return;
        }

        pickTarget(inst);
      }

      // Lerp towards target
      var speed = (0.028 + Math.random() * 0.004) * (dt / 16);
      inst.x += (inst.tx - inst.x) * speed;
      inst.y += (inst.ty - inst.y) * speed;
      inst.el.style.transform = 'translate(' + (inst.x | 0) + 'px,' + (inst.y | 0) + 'px)';

      // Reached target → pause
      if (Math.hypot(inst.tx - inst.x, inst.ty - inst.y) < 6) {
        inst.pausing  = true;
        inst.pauseEnd = now + 500 + Math.random() * 2500;
      }
    });

    requestAnimationFrame(frame); // called exactly once, at the end
  }

  requestAnimationFrame(function (t) {
    lastTime = t;
    requestAnimationFrame(frame);
  });
})();
