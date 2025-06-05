"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "classlist",
  setup(__props) {
    const queryParams = {
      pageNum: 1,
      pageSize: 12,
      classid: null
    };
    const No = common_vendor.ref(false);
    const wallList = common_vendor.ref([]);
    const getWall = async () => {
      let res = await api_apis.apisetWall(queryParams);
      wallList.value = [...wallList.value, ...res.data];
      if (queryParams.pageSize > res.data.length) {
        No.value = true;
      }
      common_vendor.index.setStorageSync("storgclassList", wallList.value);
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:34", wallList.value);
    };
    common_vendor.onLoad((e) => {
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:38", e);
      let { id = null, name = null } = e;
      queryParams.classid = id;
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:41", id, name);
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getWall();
    });
    common_vendor.onReachBottom(() => {
      if (No.value)
        return;
      queryParams.pageNum++;
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:50", 1);
      getWall();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(wallList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id,
            c: item._id
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classlist/classlist.js.map
