"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_apis = require("../../api/apis.js");
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
    const userList = common_vendor.ref([]);
    const getuser = async () => {
      const res = await api_apis.apisetUser();
      userList.value = res.data;
      common_vendor.index.__f__("log", "at pages/my/my.vue:82", userList.value);
    };
    const go = () => {
      common_vendor.index.switchTab({
        url: "/pages/classlist/classlist"
      });
    };
    const goto = () => {
      common_vendor.index.navigateTo({
        url: "/pages/our/our"
      });
    };
    getuser();
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        c: common_vendor.t(common_vendor.unref(userList).downloadSize),
        d: common_vendor.p({
          type: "forward",
          size: "30",
          color: "green"
        }),
        e: common_vendor.o(go),
        f: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        g: common_vendor.p({
          type: "forward",
          size: "30",
          color: "green"
        }),
        h: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        i: common_vendor.p({
          type: "forward",
          size: "30",
          color: "green"
        }),
        j: common_vendor.p({
          type: "download",
          size: "30",
          color: "green"
        }),
        k: common_vendor.o(goto),
        l: common_vendor.p({
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
