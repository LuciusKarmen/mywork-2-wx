"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_title2 = common_vendor.resolveComponent("title");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_title2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_title = () => "../../components/title/title.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_title + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const randomList = common_vendor.ref([]);
    const classifyList = common_vendor.ref([]);
    const getBanner = async () => {
      let res = await api_apis.apiset();
      bannerList.value = res.data;
      common_vendor.index.__f__("log", "at pages/index/index.vue:74", "@开头轮播：" + bannerList.value);
    };
    const getRandom = async () => {
      let res = await api_apis.apisetRandom();
      randomList.value = res.data;
      common_vendor.index.__f__("log", "at pages/index/index.vue:79", "@随机：" + res.data);
    };
    const getClassify = async () => {
      let res = await api_apis.apisetClassify();
      classifyList.value = res.data.slice(0, 8);
    };
    getBanner();
    getRandom();
    getClassify();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        b: common_vendor.p({
          type: "sound-filled",
          size: "20",
          color: "green"
        }),
        c: common_vendor.p({
          type: "right",
          size: "16"
        }),
        d: common_vendor.p({
          type: "calendar",
          size: "20",
          color: "green"
        }),
        e: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日",
          color: "green"
        }),
        f: common_vendor.f(randomList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl
          };
        }),
        g: common_vendor.f(classifyList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              item
            })
          };
        }),
        h: common_vendor.p({
          isMore: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
