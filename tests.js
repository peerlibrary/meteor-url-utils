Tinytest.add('url-utils', function (test) {
  var isDefined = false;
  try {
    UrlUtils;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "UrlUtils is not defined");
  test.isTrue(Package['peerlibrary:url-utils'].UrlUtils, "Package.peerlibrary:url-utils.UrlUtils is not defined");
  test.equal(UrlUtils.normalize('http://example.com/hello+world/?a=b+c#d+e'), 'http://example.com/hello%2Bworld/?a=b%20c#d+e');
});
