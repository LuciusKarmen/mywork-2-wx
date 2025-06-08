"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db)();
}
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const udb = common_vendor.ref(null);
    function rmItem(id) {
      udb.value.remove(id);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          data,
          loading,
          error,
          options
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: common_vendor.t(error.message)
          } : {
            c: common_vendor.f(data, (item, k1, i1) => {
              return {
                a: common_vendor.o(($event) => rmItem(item._id), item._id),
                b: item._id,
                c: "149ae748-2-" + i0 + "-" + i1 + "," + ("149ae748-1-" + i0),
                d: common_vendor.p({
                  title: item.name,
                  note: item.phone
                })
              };
            }),
            d: "149ae748-1-" + i0 + ",149ae748-0"
          }, {
            e: i0,
            f: s0
          });
        }, {
          name: "d",
          path: "a",
          vueId: "149ae748-0"
        }),
        b: common_vendor.sr(udb, "149ae748-0", {
          "k": "udb"
        }),
        c: common_vendor.p({
          collection: "kk1"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/list/list.js.map
