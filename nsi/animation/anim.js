// Mesure la hauteur réelle des barres du haut et du bas et l'expose en variables CSS
// (--topbar-h, --toolbar-h) pour que les éléments placés entre les deux ne passent jamais dessous.
(function () {
  [['.topbar', '--topbar-h'], ['.toolbar', '--toolbar-h']].forEach(([sel, v]) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const update = () => document.documentElement.style.setProperty(v, el.getBoundingClientRect().height + 'px');
    new ResizeObserver(update).observe(el);
    update();
  });
})();
