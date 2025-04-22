"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const pets = common_vendor.ref([]);
    function resquest() {
      common_vendor.index.request({
        url: "https://api.thecatapi.com/v1/images/search?limit=30"
      }).then((res) => {
        pets.value = res.data;
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => resquest()),
        b: common_vendor.f(pets.value, (item, k0, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.width),
            c: item.id
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
