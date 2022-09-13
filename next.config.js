const withTM = require("next-transpile-modules")(["echarts", "zrender"]);

module.exports = withTM({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   trailingSlash: true,
//   // Your NextJS config.
// };
