"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  _easycom_theme_item2();
}
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  _easycom_theme_item();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "classlist",
  setup(__props) {
    const classifyList = common_vendor.ref([]);
    const getClass = async () => {
      let res = await api_apis.apisetClassify();
      classifyList.value = res.data;
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:18", "#" + classifyList.value);
    };
    getClass();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classifyList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "bd381383-0-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classlist/classlist.js.map
