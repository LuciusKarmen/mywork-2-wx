"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const pets = common_vendor.ref([]);
    function resquest() {
      common_vendor.index.request({
        url: "https://api.thecatapi.com/v1/images/search?limit=10"
      }).then((res) => {
        pets.value = res.data;
      }).catch((err) => {
        common_vendor.index.showToast({
          icon: "none",
          title: "失败"
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    }
    function showa(index) {
      let urls = pets.value.map((item) => item.url);
      common_vendor.index.previewImage(
        {
          current: index,
          urls
        }
      );
    }
    function fresh() {
      common_vendor.index.startPullDownRefresh();
    }
    function top() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0
      });
    }
    common_vendor.onReachBottom(() => {
      resquest();
    });
    common_vendor.onPullDownRefresh(() => {
      resquest();
    });
    resquest();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(pets.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => showa(index), item.id),
            c: common_vendor.t(item.content),
            d: item.id
          };
        }),
        b: common_vendor.o(($event) => fresh()),
        c: common_vendor.o(($event) => top())
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
