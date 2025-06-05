"use strict";
const api_request = require("./request.js");
function apiset() {
  return api_request.request({ url: "https://tea.qingnian8.com/api/bizhi/homeBanner" });
}
function apisetRandom() {
  return api_request.request({ url: "https://tea.qingnian8.com/api/bizhi/randomWall" });
}
function apisetClassify(data = {}) {
  return api_request.request({ url: "https://tea.qingnian8.com/api/bizhi/classify", data });
}
function apisetWall(data = {}) {
  return api_request.request({ url: "https://tea.qingnian8.com/api/bizhi/wallList", data });
}
function apisetUser(data = {}) {
  return api_request.request({ url: "https://tea.qingnian8.com/api/bizhi/userInfo", data });
}
exports.apiset = apiset;
exports.apisetClassify = apisetClassify;
exports.apisetRandom = apisetRandom;
exports.apisetUser = apisetUser;
exports.apisetWall = apisetWall;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
