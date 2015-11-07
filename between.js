var util = module.exports;

exports = {};
module = {};
require = function (moduleName) {
  if (moduleName === 'url') {
    return exports;
  }
  else if (moduleName === './util') {
    return util;
  }
  else if (moduleName === 'punycode') {
    return Punycode;
  }
  else if (moduleName === 'querystring') {
    // querystring is not really used by the code path of url-utils, so we return a mock object.
    return {};
  }
  else {
    throw new Error("Unsupported dependency: '" + moduleName + "'.");
  }
};
