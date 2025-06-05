"use strict";
const common_vendor = require("../../common/vendor.js");
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
    const storgclassList = common_vendor.index.getStorageSync("storgclassList");
    common_vendor.index.__f__("log", "at pages/preview/preview.vue:101", storgclassList);
    const classList = common_vendor.ref([]);
    const readImgs = common_vendor.ref([]);
    classList.value = storgclassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    common_vendor.index.__f__("log", "at pages/preview/preview.vue:110", classList.value);
    const kkk = common_vendor.ref(true);
    const info = common_vendor.ref(null);
    const p = common_vendor.ref(null);
    const userscore = common_vendor.ref(5);
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
    const closea = () => {
      info.value.close();
    };
    const sub = (userscore2 = 0) => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:139", "评分:", userscore2);
      closePopup();
    };
    const clickdown = () => {
      common_vendor.index.getImageInfo({
        src: classInfo.value.picurl,
        success: (res) => {
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: res.path,
            success: () => {
              common_vendor.index.__f__("log", "at pages/preview/preview.vue:156", "下载成功");
            }
          });
        }
      });
    };
    const classid = common_vendor.ref([]);
    const classindex = common_vendor.ref();
    const classInfo = common_vendor.ref();
    common_vendor.onLoad((e) => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:171", e);
      classid.value = e.id;
      let index = classList.value.findIndex((item) => item._id == classid.value);
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:174", index);
      classindex.value = index;
      classInfo.value = classList.value[classindex.value];
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:177", classInfo.value);
      readImgsFun();
    });
    const hhh = (e) => {
      classindex.value = e.detail.current;
      classInfo.value = classList.value[classindex.value];
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:183", e);
    };
    function readImgsFun() {
      readImgs.value.push(
        classInfo.value <= 0 ? classList.value.length - 1 : classInfo.value - 1,
        classInfo.value,
        classInfo.value >= classList.value.length - 1 ? 0 : classInfo.value + 1
      );
      readImgs.value = [...new Set(readImgs.value)];
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.picurl
          };
        }),
        b: common_vendor.o(change),
        c: classindex.value,
        d: common_vendor.o(hhh),
        e: kkk.value
      }, kkk.value ? {
        f: common_vendor.t(classindex.value + 1),
        g: common_vendor.t(classList.value.length),
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        i: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        j: common_vendor.p({
          type: "info",
          size: "35"
        }),
        k: common_vendor.o(clickInfo),
        l: common_vendor.p({
          type: "heart",
          size: "35"
        }),
        m: common_vendor.o(clickp),
        n: common_vendor.p({
          type: "download",
          size: "35"
        }),
        o: common_vendor.o(clickdown)
      } : {}, {
        p: common_vendor.p({
          type: "close",
          size: "30"
        }),
        q: common_vendor.o(closea),
        r: common_vendor.t(classInfo.value.classid),
        s: common_vendor.t(classInfo.value.nickname),
        t: common_vendor.t(classInfo.value.score),
        v: common_vendor.t(classInfo.value.description),
        w: common_vendor.f(classInfo.value.tabs, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab)
          };
        }),
        x: common_vendor.sr(info, "2dad6c07-5", {
          "k": "info"
        }),
        y: common_vendor.p({
          type: "bottom"
        }),
        z: common_vendor.p({
          type: "close",
          size: "30"
        }),
        A: common_vendor.o(closePopup),
        B: common_vendor.o(() => {
        }),
        C: common_vendor.o(($event) => userscore.value = $event),
        D: common_vendor.p({
          modelValue: userscore.value
        }),
        E: common_vendor.t(userscore.value),
        F: common_vendor.o(sub),
        G: common_vendor.sr(p, "2dad6c07-7", {
          "k": "p"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
