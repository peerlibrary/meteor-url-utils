Package.describe({
  summary: "URL normalization utils",
  version: '0.4.0-1',
  name: 'mrt:url-utils',
  git: 'https://github.com/peerlibrary/meteor-url-utils.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:url-utils@0.4.0-1');
});
