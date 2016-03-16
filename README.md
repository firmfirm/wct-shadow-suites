# wct-shadow-suites

[web-component-tester](https://github.com/Polymer/web-component-tester) extension to load Polymer test suites with both shady and shadow dom.

## Example

`index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">

  <script src="../../webcomponentsjs/webcomponents-lite.js"></script>
  <script src="../../web-component-tester/browser.js"></script>
  <!-- note the additional script -->
  <script src="../../wct-shadow-suites/wct-shadow-suites.js"></script>
</head>
<body>
  <script>
    // note different function to load suites
    WCT.loadShadowSuites([
      'some-test.html'
    ]);
  </script>
</body>
</html>
```

`some-test.html`

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">

    <script src="../../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="../../web-component-tester/browser.js"></script>
    <!-- note the additional script -->
    <script src="../../wct-shadow-suites/wct-shadow-suites.js"></script>

    <link rel="import" href="../some-el.html">
  </head>
  <body>

  <test-fixture id="some-fixture">
    <!-- standard stuff -->
  </test-fixture>

  <script>
    'use strict'

    // note wrapping main "describe"
    WCT.shadowSuite(() => describe('<some-el>', () => {
      // standard stuff
      it('should test something');
    }));
  </script>
</body>
</html>
```
