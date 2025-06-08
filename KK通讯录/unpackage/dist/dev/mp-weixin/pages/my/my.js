"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "StudioIntroduction",
  data() {
    return {
      title: "星辰网络科技工作室",
      description: "我是一个热爱技术与设计的专业人士，致力于为客户打造独一无二的数字体验。",
      members: [
        {
          name: "许光明（Lucius.John.Karmen)",
          role: "前端开发工程师",
          bio: "擅长使用最新的前端技术栈，如Vue.js,uniapp和React，为用户提供流畅的交互体验。"
        }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.t($data.description),
    c: common_vendor.f($data.members, (member, index, i0) => {
      return {
        a: common_vendor.t(member.name),
        b: common_vendor.t(member.role),
        c: common_vendor.t(member.bio),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
