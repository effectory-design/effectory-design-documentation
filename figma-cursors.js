/**
 * figma-cursors.js
 * Simulates Figma-style multiplayer cursors roaming the page.
 * Cursors are in document (page) coordinates so they behave like
 * real users exploring the content, not UI overlays.
 */
(function () {
  if (window.innerWidth < 768) return;

  var USERS = [
    { name: 'Jente',   color: '#7B61FF' },
    { name: 'Jamal',   color: '#F24E1E' },
    { name: 'Eray',    color: '#1BC47D' },
    { name: 'Jesse',   color: '#0D99FF' },
    { name: 'Maria',   color: '#FF6B6B' },
    { name: 'Khaled',  color: '#F4A200' },
    { name: 'Minh',    color: '#00C2A8' },
    { name: 'Thimo',   color: '#E040FB' },
  ];

  // ── Styles ───────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent =
    '.fc{position:absolute;top:0;left:0;pointer-events:none;z-index:99999;}' +
    '.fc-label{position:absolute;top:20px;left:6px;padding:2px 8px;border-radius:4px;' +
    'font-family:"Inter",system-ui,sans-serif;font-size:11px;font-weight:600;' +
    'color:#fff;white-space:nowrap;line-height:1.6;box-shadow:0 1px 3px rgba(0,0,0,.2);}';
  document.head.appendChild(style);

  // ── Cursor SVG ────────────────────────────────────────────────────────────
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

  // ── Helpers ───────────────────────────────────────────────────────────────
  // Pick a target within the currently visible viewport (in document coords)
  function randomTarget() {
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollX = window.scrollX || window.pageXOffset;
    return {
      x: scrollX + 60 + Math.random() * (window.innerWidth  - 120),
      y: scrollY + 80 + Math.random() * (window.innerHeight - 160),
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

  // ── Instances ─────────────────────────────────────────────────────────────
  var instances = USERS.map(function (user, i) {
    return {
      el:        makeCursorEl(user),
      x: 0, y: 0,
      tx: 0, ty: 0,
      pausing:   false,
      pauseEnd:  0,
      visible:   false,
      showAfter: performance.now() + 800 + i * 1400 + Math.random() * 1200,
    };
  });

  // ── Main loop ─────────────────────────────────────────────────────────────
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
        return;
      }

      // Pausing
      if (inst.pausing) {
        if (now < inst.pauseEnd) return;
        inst.pausing = false;

        // Occasionally vanish and reappear
        if (Math.random() < 0.18) {
          inst.visible = false;
          inst.el.style.opacity = '0';
          inst.showAfter = performance.now() + 2500 + Math.random() * 5000;
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

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(function (t) {
    lastTime = t;
    requestAnimationFrame(frame);
  });
})();
