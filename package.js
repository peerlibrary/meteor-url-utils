Package.describe({
  summary: "URL normalization utils"
});

Npm.depends({
  'node-url-utils': "0.4.0"
});

Package.on_use(function (api) {
  api.export('UrlUtils');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['url-utils', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
