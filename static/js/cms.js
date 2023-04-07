CMS.registerMediaLibrary({
  name: 'disabled',
  init: () => ({ show: () => undefined, enableStandalone: () => false }),
});
