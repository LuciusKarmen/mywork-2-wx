"use strict";
const api_request = require("./request.js");
function apiset() {
  return api_request.request({ url: "https://tea.qingnian8.com/api/bizhi/homeBanner" });
}
function apisetRandom() {
  return api_request.request({ url: "https://tea.qingnian8.com/api/bizhi/randomWall" });
}
function apisetClassify(data = {}) {
  return api_request.request({ url: "https://tea.qingnian8.com/api/bizhi/classify" });
}
exports.apiset = apiset;
exports.apisetClassify = apisetClassify;
exports.apisetRandom = apisetRandom;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
