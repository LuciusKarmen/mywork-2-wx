"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_uni_popup2 + _easycom_uni_rate2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_popup + _easycom_uni_rate)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "preview",
  setup(__props) {
    const kkk = common_vendor.ref(true);
    const info = common_vendor.ref(null);
    const p = common_vendor.ref(null);
    const change = () => {
      kkk.value = !kkk.value;
    };
    const clickInfo = () => {
      info.value.open();
    };
    const clickp = () => {
      var _a;
      if ((_a = p.value) == null ? void 0 : _a.open) {
        p.value.open();
      }
    };
    const closePopup = () => {
      var _a;
      if ((_a = p.value) == null ? void 0 : _a.close) {
        p.value.close();
      }
    };
    const submitRate = (score = 0) => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:117", "评分:", score);
      closePopup();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(10, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$3,
        c: common_vendor.o(change),
        d: kkk.value
      }, kkk.value ? {
        e: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        f: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        g: common_vendor.p({
          type: "info",
          size: "35"
        }),
        h: common_vendor.o(clickInfo),
        i: common_vendor.p({
          type: "heart",
          size: "35"
        }),
        j: common_vendor.o(clickp),
        k: common_vendor.p({
          type: "download",
          size: "35"
        })
      } : {}, {
        l: common_vendor.p({
          type: "close",
          size: "30"
        }),
        m: common_vendor.sr(info, "2dad6c07-5", {
          "k": "info"
        }),
        n: common_vendor.p({
          type: "bottom"
        }),
        o: common_vendor.p({
          type: "close",
          size: "30"
        }),
        p: common_vendor.o(closePopup),
        q: common_vendor.o(() => submitRate(5)),
        r: common_vendor.o(() => submitRate(4)),
        s: common_vendor.o(submitRate),
        t: common_vendor.sr(p, "2dad6c07-7", {
          "k": "p"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
