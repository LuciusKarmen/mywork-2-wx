"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my",
  setup(__props) {
    let arr = common_vendor.ref("");
    function request() {
      common_vendor.index.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        success: (res) => {
          arr.value = res.data;
        },
        data: {
          id: 5
        }
      });
    }
    let brr = common_vendor.ref("");
    async function req() {
      let res = await common_vendor.index.request({
        url: "https://jsonplaceholder.typicode.com/posts"
      });
      brr.value = res.data;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => request()),
        b: common_vendor.o(($event) => req()),
        c: common_vendor.t(common_vendor.unref(arr)),
        d: common_vendor.t(common_vendor.unref(brr))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
