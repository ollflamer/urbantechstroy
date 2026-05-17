import { _ as _sfc_main$1, a as _sfc_main$2, s as staggerDelay, b as _sfc_main$4 } from "./SiteFooter-Ck7CxC6V.js";
import { _ as _sfc_main$3 } from "./ServiceCard-B2DwP2re.js";
import { defineComponent, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { s as services } from "./services-T1UzemLn.js";
import { a as useSeoMeta } from "./v3-BwXw2HPY.js";
import "./nuxt-link-BpXDrWrg.js";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/hookable/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/unctx/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/klona/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Услуги — URBANTECHSTROY",
      description: "Полный спектр строительных и ремонтных услуг: жилые комплексы, частные дома, ремонт, фасады, кровля и многое другое."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$1;
      const _component_Reveal = _sfc_main$2;
      const _component_ServiceCard = _sfc_main$3;
      const _component_SiteFooter = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
      _push(`<section class="section-y-sm bg-[#F9FAFB] pt-[calc(81px+3rem)] sm:pt-[calc(81px+4rem)]"><div class="container-site text-center">`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "blur-up",
        immediate: "",
        delay: 0.1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="heading-section"${_scopeId}>Полный спектр услуг</h1><p class="text-lead mx-auto mt-3 max-w-2xl sm:mt-4"${_scopeId}> Выполняем все виды строительных и ремонтных работ </p>`);
          } else {
            return [
              createVNode("h1", { class: "heading-section" }, "Полный спектр услуг"),
              createVNode("p", { class: "text-lead mx-auto mt-3 max-w-2xl sm:mt-4" }, " Выполняем все виды строительных и ремонтных работ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="bg-white pb-16 pt-4 sm:pb-20 lg:pb-24"><div class="container-site"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(services), (service, index) => {
        _push(ssrRenderComponent(_component_Reveal, {
          key: service.slug,
          variant: "scale",
          delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ServiceCard, { service }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ServiceCard, { service }, null, 8, ["service"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-RpZSJjj4.js.map
