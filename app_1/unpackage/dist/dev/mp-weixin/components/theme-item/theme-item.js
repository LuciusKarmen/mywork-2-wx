"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default() {
        return {
          name: "名字",
          picurl: "",
          updateTime: ""
        };
      }
    }
  },
  setup(__props) {
    function compareTimestamp(timestamp) {
      const currentTime = (/* @__PURE__ */ new Date()).getTime();
      const timeDiff = currentTime - timestamp;
      if (timeDiff < 6e4) {
        return "1分钟内";
      } else if (timeDiff < 36e5) {
        return Math.floor(timeDiff / 6e4) + "分钟前更新";
      } else if (timeDiff < 864e5) {
        return Math.floor(timeDiff / 36e5) + "小时前更新";
      } else if (timeDiff < 2592e6) {
        return Math.floor(timeDiff / 864e5) + "天前更新";
      } else if (timeDiff < 7776e6) {
        return Math.floor(timeDiff / 2592e6) + "月前更新";
      } else {
        return "很久前更新";
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? {
        b: __props.item.picurl,
        c: common_vendor.t(__props.item.name),
        d: common_vendor.t(compareTimestamp(__props.item.updateTime))
      } : {}, {
        e: __props.isMore
      }, __props.isMore ? {
        f: common_assets._imports_0$2
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4eafbca"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/theme-item/theme-item.js.map
