"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const go = () => {
      common_vendor.index.switchTab({
        url: "/pages/class/class"
      });
    };
    const goto = () => {
      common_vendor.index.navigateTo({
        url: "/pages/our/our"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        c: common_vendor.p({
          type: "forward",
          size: "30",
          color: "green"
        }),
        d: common_vendor.o(go),
        e: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        f: common_vendor.p({
          type: "forward",
          size: "30",
          color: "green"
        }),
        g: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        h: common_vendor.p({
          type: "forward",
          size: "30",
          color: "green"
        }),
        i: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        j: common_vendor.p({
          type: "forward",
          size: "30",
          color: "green"
        }),
        k: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        l: common_vendor.o(goto),
        m: common_vendor.p({
          type: "forward",
          size: "30",
          color: "green"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
