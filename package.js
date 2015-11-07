Package.describe({
  name: 'peerlibrary:url-utils',
  summary: "URL normalization utils",
  version: '0.4.0_3',
  git: 'https://github.com/peerlibrary/meteor-url-utils.git'
});

Npm.depends({
  'node-url-utils': '0.4.0'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.3.1');

  // 3rd party dependencies.
  api.use([
    'peerlibrary:punycode@1.3.2_1'
  ]);

  api.export('UrlUtils');

  api.add_files([
    'before.js',
    'node-url/util.js',
    'between.js',
    'node-url/url.js',
    'vendor/lib/url-utils.js',
    'after.js'
  ], 'client');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  // Core dependencies.
  api.use([
    'tinytest',
    'test-helpers'
  ]);

  // Internal dependencies.
  api.use([
    'peerlibrary:url-utils'
  ]);

  api.addFiles([
    'tests.js'
  ]);
});
