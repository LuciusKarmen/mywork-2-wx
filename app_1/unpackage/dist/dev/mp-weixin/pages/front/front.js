"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "front",
  setup(__props) {
    const n = common_vendor.ref(0);
    function add() {
      n.value = n.value + 1;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(add),
        b: common_vendor.t(common_vendor.unref(n))
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0792c799"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/front/front.js.map
