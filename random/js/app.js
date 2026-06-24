/* =====================================================================
   ÉLOGE DU HASARD — logique applicative
   Grand nombre + compte à rebours + entropie souris + labo interactif
   Aucune dépendance. Fonctionne en file://.
   ===================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cryptoObj = window.crypto || window.msCrypto;

  /* ---------- Helpers aléatoires (vrai CSPRNG du navigateur) ---------- */
  function randBytes(n) {
    var a = new Uint8Array(n);
    cryptoObj.getRandomValues(a);
    return a;
  }
  function randInt(n) {                 // entier 0..n-1 sans biais (rejet)
    var max = Math.floor(0xFFFFFFFF / n) * n;
    var b = new Uint32Array(1);
    do { cryptoObj.getRandomValues(b); } while (b[0] >= max);
    return b[0] % n;
  }
  function toHex(u8) {
    var s = '';
    for (var i = 0; i < u8.length; i++) s += (u8[i] < 16 ? '0' : '') + u8[i].toString(16);
    return s;
  }

  /* =====================================================================
     1. NAV : état "collé" + révélations au scroll
     ===================================================================== */
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('is-stuck', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Cartes articles : déplier / replier ---------- */
  document.querySelectorAll('.card__toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.card');
      var open = card.classList.toggle('open');
      btn.firstChild.textContent = open ? 'Replier ' : 'Lire la suite ';
    });
  });

  /* =====================================================================
     2. ENTROPIE SOURIS — alimente le grand nombre
     ===================================================================== */
  var mousePool = 0x9e3779b9 >>> 0;
  var mouseBits = 0;
  var meChip = document.getElementById('mouse-entropy');
  var meB = meChip ? meChip.querySelector('b') : null;
  var meTimer;
  window.addEventListener('mousemove', function (e) {
    var dx = e.movementX || 0, dy = e.movementY || 0;
    mousePool = (mousePool ^ ((dx * 73856093) >>> 0) ^ ((dy * 19349663) >>> 0) ^ (((e.timeStamp | 0) * 83492791) >>> 0)) >>> 0;
    mousePool = ((mousePool << 13) | (mousePool >>> 19)) >>> 0;
    mouseBits += 2;
    if (meB) meB.textContent = mouseBits;
    meChip.classList.add('active');
    clearTimeout(meTimer);
    meTimer = setTimeout(function () { meChip.classList.remove('active'); }, 420);
  }, { passive: true });

  /* =====================================================================
     3. LE GRAND NOMBRE ALÉATOIRE + COMPTE À REBOURS
     ===================================================================== */
  var LEN = 21, PERIOD = 10;
  var disp = document.getElementById('bignum-display');
  var ring = document.getElementById('countdown-ring');
  var countNum = document.getElementById('countdown-num');
  var ringColors = ['#22d3ee', '#a855f7', '#ec4899', '#ff7a18', '#34e3b0'];
  var ringColor = 0;
  var C = 2 * Math.PI * 54;
  var remaining = PERIOD;

  if (ring) { ring.style.strokeDasharray = C.toFixed(3); }

  function makeBigNumber(len) {
    var bytes = randBytes(len);
    var mp = mousePool >>> 0;          // mélange l'entropie souris
    var s = '';
    for (var i = 0; i < len; i++) {
      var b = bytes[i] ^ ((mp >>> ((i % 4) * 8)) & 0xff);
      s += (b % 10);
    }
    if (s.charAt(0) === '0') s = (1 + (bytes[0] % 9)) + s.slice(1); // pas de zéro en tête
    return s;
  }

  function renderBigNumber(str, rolling) {
    if (!disp) return;
    disp.classList.toggle('is-rolling', !!rolling);
    var n = str.length, groups = [];
    for (var i = n; i > 0; i -= 3) groups.unshift(str.slice(Math.max(0, i - 3), i));
    disp.innerHTML = groups.map(function (g) {
      var inner = '';
      for (var j = 0; j < g.length; j++) inner += '<span class="digit">' + g.charAt(j) + '</span>';
      return '<span class="group">' + inner + '</span>';
    }).join('<span class="sep"> </span>');
  }

  function cycleAccent() {
    ringColor = (ringColor + 1) % ringColors.length;
    if (ring) ring.style.stroke = ringColors[ringColor];
  }

  function newNumber(animate) {
    var finalStr = makeBigNumber(LEN);
    cycleAccent();
    if (animate && !reduce) {
      disp.classList.remove('flash'); void disp.offsetWidth;
      var elapsed = 0;
      var iv = setInterval(function () {
        renderBigNumber(makeBigNumber(LEN), true);
        elapsed += 55;
        if (elapsed >= 520) {
          clearInterval(iv);
          renderBigNumber(finalStr, false);
          disp.classList.add('flash');
        }
      }, 55);
    } else {
      renderBigNumber(finalStr, false);
    }
  }

  function updateRing() {
    if (countNum) countNum.textContent = remaining;
    if (ring) {
      var frac = (PERIOD - remaining) / PERIOD;       // part écoulée
      ring.style.strokeDashoffset = (C * frac).toFixed(2);
    }
  }

  if (disp) {
    renderBigNumber(makeBigNumber(LEN), false);  // premier nombre immédiat
    updateRing();
    setInterval(function () {
      remaining--;
      if (remaining <= 0) { newNumber(true); remaining = PERIOD; }
      updateRing();
    }, 1000);

    var reroll = document.getElementById('reroll-btn');
    if (reroll) reroll.addEventListener('click', function () {
      newNumber(true); remaining = PERIOD; updateRing();
    });
  }

  /* =====================================================================
     4. LE MUR DE LAVE (metaballs) + capture de graine
     ===================================================================== */
  (function lava() {
    var cv = document.getElementById('lava-canvas');
    if (!cv) return;
    var x = cv.getContext('2d');
    var readout = document.getElementById('lava-readout');
    var W, H, DPR = Math.min(window.devicePixelRatio || 1, 2);
    var cols = [[255, 96, 24], [255, 45, 90], [255, 168, 46], [206, 38, 124], [255, 70, 40]];
    var blobs = [];

    function size() {
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = Math.floor(W * DPR); cv.height = Math.floor(H * DPR);
      x.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    function build() {
      blobs = [];
      for (var i = 0; i < 6; i++) {
        blobs.push({
          ax: 0.12 + Math.random() * 0.36, ay: 0.18 + Math.random() * 0.42,
          sx: 0.0003 + Math.random() * 0.0009, sy: 0.0004 + Math.random() * 0.0011,
          ph: Math.random() * 6.28, r: 38 + Math.random() * 46,
          c: cols[i % cols.length]
        });
      }
    }
    var T = 0;
    function frame() {
      T += 16;
      x.globalCompositeOperation = 'source-over';
      x.fillStyle = '#150406'; x.fillRect(0, 0, W, H);
      x.globalCompositeOperation = 'lighter';
      for (var i = 0; i < blobs.length; i++) {
        var b = blobs[i];
        var px = W * (0.5 + b.ax * Math.sin(T * b.sx + b.ph));
        var py = H * (0.5 + b.ay * Math.cos(T * b.sy + b.ph * 1.7));
        var rr = b.r * (0.85 + 0.15 * Math.sin(T * 0.002 + b.ph));
        var g = x.createRadialGradient(px, py, 0, px, py, rr);
        g.addColorStop(0, 'rgba(' + b.c[0] + ',' + b.c[1] + ',' + b.c[2] + ',0.95)');
        g.addColorStop(0.5, 'rgba(' + b.c[0] + ',' + b.c[1] + ',' + b.c[2] + ',0.35)');
        g.addColorStop(1, 'rgba(' + b.c[0] + ',' + b.c[1] + ',' + b.c[2] + ',0)');
        x.fillStyle = g;
        x.beginPath(); x.arc(px, py, rr, 0, 6.2832); x.fill();
      }
      if (!reduce) requestAnimationFrame(frame);
    }

    function capture() {
      var w = cv.width, h = cv.height;
      var data;
      try { data = x.getImageData(0, 0, w, h).data; }
      catch (err) { readout.innerHTML = '<span class="lava__hint">capture impossible ici</span>'; return; }
      // hachage FNV-1a sur le ballet de pixels — le chaos devient des bits
      var h1 = 0x811c9dc5 >>> 0, h2 = 0xcbf29ce4 >>> 0;
      for (var i = 0; i < data.length; i += 4) {
        h1 = Math.imul(h1 ^ data[i], 16777619) >>> 0;
        h1 = Math.imul(h1 ^ data[i + 1], 16777619) >>> 0;
        h2 = Math.imul(h2 ^ data[i + 2], 16777619) >>> 0;
        h2 = ((h2 << 7) | (h2 >>> 25)) >>> 0;
      }
      // on parfume avec l'horloge pour que deux captures rapprochées diffèrent
      h2 = (h2 ^ ((T | 0) * 2654435761)) >>> 0;
      var hex = ('00000000' + h1.toString(16)).slice(-8) + ('00000000' + h2.toString(16)).slice(-8);
      var num;
      try { num = BigInt('0x' + hex).toString(); }
      catch (e) { num = String(h1) + String(h2); }
      readout.classList.remove('flash'); void readout.offsetWidth;
      readout.innerHTML = 'graine&nbsp;: <b>0x' + hex + '</b><br>→ nombre&nbsp;: <b>' + num + '</b>';
      readout.classList.add('flash');
    }

    size(); build();
    if (reduce) { frame(); } else { requestAnimationFrame(frame); }
    window.addEventListener('resize', function () { size(); build(); });
    var btn = document.getElementById('lava-capture');
    if (btn) btn.addEventListener('click', capture);
  })();

  /* =====================================================================
     5. LE BRUIT DE LA SOURIS — récolte 256 bits
     ===================================================================== */
  (function mousepad() {
    var pad = document.getElementById('mousepad');
    if (!pad) return;
    var fill = document.getElementById('mousepad-fill');
    var label = document.getElementById('mousepad-label');
    var out = document.getElementById('mousepad-out');
    var pool = new Uint32Array(8), bits = 0, idx = 0, done = false;

    function harvest(e) {
      if (done) return;
      var r = pad.getBoundingClientRect();
      var px = (e.clientX - r.left) | 0, py = (e.clientY - r.top) | 0;
      var v = ((px * 73856093) ^ (py * 19349663) ^ (((e.timeStamp | 0)) * 83492791)) >>> 0;
      var k = idx % 8;
      pool[k] = (pool[k] ^ v ^ ((pool[k] << 5) | (pool[k] >>> 27))) >>> 0;
      idx++;
      bits = Math.min(256, bits + 4);
      fill.style.width = (bits / 256 * 100) + '%';
      label.textContent = bits + ' / 256 bits';
      if (bits >= 256 && !done) {
        done = true;
        var hex = '';
        for (var i = 0; i < 8; i++) hex += ('00000000' + pool[i].toString(16)).slice(-8);
        out.textContent = '🔑 ' + hex;
        out.style.color = 'var(--green)';
        label.textContent = '256 / 256 bits — clé prête !';
      }
    }
    pad.addEventListener('pointermove', harvest);
  })();

  /* =====================================================================
     6. PILE OU FACE
     ===================================================================== */
  (function coin() {
    var el = document.getElementById('coin');
    var face = document.getElementById('coin-face');
    var btn = document.getElementById('coin-flip');
    var hEl = document.getElementById('coin-h'), tEl = document.getElementById('coin-t');
    if (!el || !btn) return;
    var h = 0, t = 0;
    btn.addEventListener('click', function () {
      el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip');
      var bit = randInt(2);
      setTimeout(function () {
        if (bit) { h++; face.textContent = 'PILE'; hEl.textContent = h; }
        else { t++; face.textContent = 'FACE'; tEl.textContent = t; }
        face.style.fontSize = '1.05rem';
      }, 450);
    });
  })();

  /* =====================================================================
     7. LES DÉS
     ===================================================================== */
  (function dice() {
    var box = document.getElementById('dice');
    var btn = document.getElementById('dice-roll');
    var sumEl = document.getElementById('dice-sum');
    if (!box || !btn) return;
    var dies = box.querySelectorAll('.die');
    var PIPS = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
    function render(el, v) {
      el.innerHTML = '';
      var on = PIPS[v];
      for (var i = 0; i < 9; i++) {
        var d = document.createElement('i');
        if (on.indexOf(i) < 0) d.style.opacity = '0';
        el.appendChild(d);
      }
    }
    function roll() {
      var sum = 0;
      dies.forEach(function (el) {
        var v = 1 + randInt(6); sum += v;
        el.classList.remove('roll'); void el.offsetWidth; el.classList.add('roll');
        setTimeout(function () { render(el, v); }, 300);
      });
      setTimeout(function () { sumEl.textContent = sum; }, 300);
    }
    dies.forEach(function (el) { render(el, 1); });
    btn.addEventListener('click', roll);
  })();

  /* =====================================================================
     8. LE GRAIN CRYPTOGRAPHIQUE
     ===================================================================== */
  (function cryptoGen() {
    var btn = document.getElementById('crypto-gen');
    var out = document.getElementById('crypto-out');
    if (!btn || !out) return;
    btn.addEventListener('click', function () {
      var hex = toHex(randBytes(32));
      // groupé par octets, joliment
      var pretty = hex.replace(/(.{2})/g, '$1 ').trim();
      out.textContent = pretty;
    });
  })();

})();
