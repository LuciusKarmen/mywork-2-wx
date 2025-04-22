"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.index.setStorageSync("1", 2);
    common_vendor.index.setStorageSync("name", ["张三", "李四"]);
    function to() {
      common_vendor.index.navigateTo({
        url: "/pages/my/my"
      });
    }
    common_vendor.index.getStorageSync("1");
    const a = common_vendor.index.getStorageSync("name");
    common_vendor.index.__f__("log", "at pages/index/index.vue:16", a[1]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(to)
      };
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
