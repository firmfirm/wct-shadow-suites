WCT.loadShadowSuites = (suites) => {
  suites.slice().forEach((s) => {
    let insertAt = suites.indexOf(s) + 1;
    suites.splice(insertAt, 0, s+'?dom=shadow');
  });
  WCT.loadSuites(suites);
};

WCT.shadowSuite = (suite) => {
  if (window.location.href.indexOf('dom=shadow') >= 0) {
    if (document.head.createShadowRoot) {
      describe('?dom=shadow', () => suite());
    }
  } else suite();
};
