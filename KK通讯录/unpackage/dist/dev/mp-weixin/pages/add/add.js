"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: {
        "name": "",
        "phone": ""
      }
    };
  },
  methods: {
    sub() {
      const db = common_vendor.nr.database();
      db.collection("kk1").add(this.item).then((r) => {
        common_vendor.index.__f__("log", "at pages/add/add.vue:25", e);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.item.name,
    b: common_vendor.o(($event) => $data.item.name = $event.detail.value),
    c: $data.item.phone,
    d: common_vendor.o(($event) => $data.item.phone = $event.detail.value),
    e: common_vendor.o((...args) => $options.sub && $options.sub(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e8d2fd40"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/add/add.js.map
