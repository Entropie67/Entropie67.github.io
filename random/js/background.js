/* =====================================================================
   FOND ANIMÉ — marches aléatoires + lemniscate (∞ / clin d'œil à Möbius)
   Canvas plein écran, technique de traînées par fondu.
   ===================================================================== */
(function () {
  'use strict';

  var canvas = document.getElementById('entropy-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d', { alpha: false });

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, H = 0, DPR = 1;
  var walkers = [];
  var t = 0;                 // temps global
  var palette = [
    [34, 211, 238],   // cyan
    [168, 85, 247],   // violet
    [236, 72, 153],   // pink
    [255, 122, 24],   // lava
    [52, 227, 176]    // green
  ];

  function rand(a, b) { return a + Math.random() * (b - a); }

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    // fond plein noir au démarrage
    ctx.fillStyle = '#05060c';
    ctx.fillRect(0, 0, W, H);
    seedWalkers();
  }

  function seedWalkers() {
    // densité adaptée à la surface, plafonnée pour la perf
    var count = Math.max(8, Math.min(20, Math.round((W * H) / 90000)));
    walkers = [];
    for (var i = 0; i < count; i++) {
      var c = palette[i % palette.length];
      walkers.push({
        x: rand(0, W), y: rand(0, H),
        vx: rand(-1, 1), vy: rand(-1, 1),
        c: c,
        life: rand(0, 1000)
      });
    }
  }

  // --- Lemniscate de Bernoulli : la grande boucle ∞ centrale ---
  function drawLemniscate(time) {
    var cx = W * 0.5, cy = H * 0.46;
    var a = Math.min(W, H) * 0.34;
    var rot = time * 0.0004;
    var wob = 0.55 + 0.45 * Math.sin(time * 0.0007); // pseudo-effet 3D (ruban qui se tord)

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);

    // le ruban, tracé faiblement
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (var i = 0; i <= 220; i++) {
      var th = (i / 220) * Math.PI * 2;
      var d = 1 + Math.sin(th) * Math.sin(th);
      var x = a * Math.cos(th) / d;
      var y = a * Math.sin(th) * Math.cos(th) / d * wob;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(140, 130, 230, 0.22)';
    ctx.stroke();

    // particules qui parcourent la boucle, avec un soubresaut aléatoire
    var n = 5;
    for (var p = 0; p < n; p++) {
      var th2 = (time * 0.0011 + (p / n) * Math.PI * 2);
      var jitter = Math.sin(time * 0.01 + p * 9) * 0.05;
      th2 += jitter;
      var d2 = 1 + Math.sin(th2) * Math.sin(th2);
      var px = a * Math.cos(th2) / d2;
      var py = a * Math.sin(th2) * Math.cos(th2) / d2 * wob;
      var col = palette[p % palette.length];
      var g = ctx.createRadialGradient(px, py, 0, px, py, 22);
      g.addColorStop(0, 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',0.9)');
      g.addColorStop(1, 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, 22, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function step() {
    t += 16;

    // fondu : crée les traînées
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(5, 6, 12, 0.060)';
    ctx.fillRect(0, 0, W, H);

    // marches aléatoires
    ctx.globalCompositeOperation = 'lighter';
    for (var i = 0; i < walkers.length; i++) {
      var w = walkers[i];
      var px = w.x, py = w.y;

      // le cœur de la marche aléatoire : on perturbe la vitesse au hasard
      w.vx += rand(-0.6, 0.6);
      w.vy += rand(-0.6, 0.6);
      // friction + limite de vitesse
      var sp = Math.hypot(w.vx, w.vy), max = 2.4;
      if (sp > max) { w.vx = w.vx / sp * max; w.vy = w.vy / sp * max; }
      w.vx *= 0.96; w.vy *= 0.96;
      w.x += w.vx; w.y += w.vy;

      // rebond doux sur les bords
      if (w.x < 0) { w.x = 0; w.vx = Math.abs(w.vx); }
      else if (w.x > W) { w.x = W; w.vx = -Math.abs(w.vx); }
      if (w.y < 0) { w.y = 0; w.vy = Math.abs(w.vy); }
      else if (w.y > H) { w.y = H; w.vy = -Math.abs(w.vy); }

      w.life += 1;
      var c = w.c;
      var alpha = 0.5 + 0.3 * Math.sin(w.life * 0.02);
      ctx.strokeStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(w.x, w.y);
      ctx.stroke();

      // tête lumineuse
      ctx.fillStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',0.9)';
      ctx.beginPath();
      ctx.arc(w.x, w.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    drawLemniscate(t);

    requestAnimationFrame(step);
  }

  function staticRender() {
    // version sobre pour prefers-reduced-motion : pas d'animation
    ctx.fillStyle = '#05060c';
    ctx.fillRect(0, 0, W, H);
    for (var k = 0; k < 26; k++) {
      drawLemniscate(k * 90);
    }
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      if (reduce) staticRender();
    }, 180);
  });

  resize();
  if (reduce) {
    staticRender();
  } else {
    requestAnimationFrame(step);
  }
})();
