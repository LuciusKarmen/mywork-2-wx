"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "other",
  setup(__props) {
    const mod = common_vendor.ref("");
    const list = common_vendor.reactive([
      { id: 1, word: "我爱你" },
      { id: 2, word: "我也爱你" },
      { id: 3, word: "好好学习，天天向上" }
    ]);
    const n = common_vendor.ref(3);
    function add() {
      list.push({ id: n.value + 1, word: mod.value });
      mod.value = "";
      n.value = n.value + 1;
    }
    function clean() {
      mod.value = "";
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.t(item.word),
            c: item.id
          };
        }),
        b: mod.value,
        c: common_vendor.o(($event) => mod.value = $event.detail.value),
        d: common_vendor.o(add),
        e: common_vendor.o(clean)
      };
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/other/other.js.map
