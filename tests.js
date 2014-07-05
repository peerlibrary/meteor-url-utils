Tinytest.add('url-utils', function (test) {
  var isDefined = false;
  try {
    UrlUtils;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "UrlUtils is not defined");
  test.isTrue(Package['url-utils'].UrlUtils, "Package.url-utils.UrlUtils is not defined");
});
