"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _component_custom_nav_bar = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_component_custom_nav_bar + _easycom_theme_item2)();
}
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  _easycom_theme_item();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "class",
  setup(__props) {
    const classifyLi = common_vendor.ref([]);
    const getClassify = async () => {
      let res = await api_apis.apisetClassify({
        pageSize: 20
      });
      classifyLi.value = res.data;
      common_vendor.index.__f__("log", "at pages/class/class.vue:28", res);
    };
    getClassify();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(classifyLi.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "23c40782-1-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-23c40782"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/class/class.js.map
