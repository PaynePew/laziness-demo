const withTM = require("next-transpile-modules")(["echarts", "zrender"]);

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
};

module.exports = withTM({});
