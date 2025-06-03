"use strict";
const common_vendor = require("../common/vendor.js");
function request(config = {}) {
  let { url, header = {}, data = {} } = config;
  header["access-key"] = "538939";
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      data,
      header,
      success: (res) => {
        if (res.data.errCode === 0) {
          resolve(res.data);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/request.js.map
