import Module from 'node:module';

const ensureResolveWeak = (req) => {
  if (!req || typeof req !== 'function') {
    return req;
  }

  if (typeof req.resolveWeak !== 'function') {
    req.resolveWeak = (specifier) => {
      try {
        return req.resolve(specifier);
      } catch (error) {
        return specifier;
      }
    };
  }

  return req;
};

const originalCreateRequire = Module.createRequire;

Module.createRequire = function patchedCreateRequire(...args) {
  const created = originalCreateRequire.apply(this, args);
  return ensureResolveWeak(created);
};

ensureResolveWeak(Module.Module?.prototype?.require);

const originalCompile = Module.Module?.prototype?._compile;

if (typeof originalCompile === 'function') {
  Module.Module.prototype._compile = function patchedCompile(content, filename) {
    ensureResolveWeak(this.require);
    return originalCompile.call(this, content, filename);
  };
}

export const prepareRequire = (moduleUrl) => {
  const req = ensureResolveWeak(Module.createRequire(moduleUrl));
  if (!globalThis.require) {
    globalThis.require = req;
  } else {
    ensureResolveWeak(globalThis.require);
  }

  if (!globalThis.__webpack_require__) {
    globalThis.__webpack_require__ = req;
  }

  ensureResolveWeak(globalThis.__webpack_require__);

  return req;
};
