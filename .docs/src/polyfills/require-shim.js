(function attachRequireShim() {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.require === 'function') {
    return;
  }

  if (typeof __webpack_require__ !== 'function') {
    return;
  }

  const runtimeRequire = __webpack_require__;

  const shim = function shimRequire(moduleId) {
    return runtimeRequire(moduleId);
  };

  shim.resolve = runtimeRequire.resolve ?? ((id) => id);
  shim.resolveWeak = runtimeRequire.resolveWeak ?? ((id) => id);
  shim.cache = runtimeRequire.c ?? runtimeRequire.cache ?? {};

  window.require = shim;
})();
