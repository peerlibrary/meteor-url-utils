Package.describe({
  summary: "URL normalization utils",
  version: '0.4.0_2',
  name: 'peerlibrary:url-utils',
  git: 'https://github.com/peerlibrary/meteor-url-utils.git'
});

Npm.depends({
  'node-url-utils': '0.4.0'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.3');

  api.export('UrlUtils');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:url-utils', 'tinytest', 'test-helpers'], 'server');

  api.add_files('tests.js', 'server');
});
