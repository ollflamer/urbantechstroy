import { _ as __nuxt_component_0 } from "./nuxt-link-BpXDrWrg.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    service: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/services/${__props.service.slug}`,
        class: "card-interactive block overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-[200px] w-full sm:h-[224px]"${_scopeId}><img${ssrRenderAttr("src", __props.service.image)} alt="" class="absolute inset-0 h-full w-full object-cover"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"${_scopeId}></div><div class="absolute bottom-4 left-4 right-4 flex items-start gap-2"${_scopeId}><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#51A2FF] text-[10px] text-white"${_scopeId}> ✓ </span><h3 class="text-base font-bold leading-snug text-white sm:text-[18px] sm:leading-[22.5px]"${_scopeId}>${ssrInterpolate(__props.service.title)}</h3></div></div><div class="p-4 sm:p-6"${_scopeId}><p class="text-sm leading-relaxed text-[#4A5565] sm:text-base sm:leading-[26px]"${_scopeId}>${ssrInterpolate(__props.service.shortDescription)}</p><span class="mt-4 inline-flex items-center gap-2 text-[16px] font-medium text-[#155DFC]"${_scopeId}> Узнать больше <span aria-hidden="true"${_scopeId}>→</span></span></div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-[200px] w-full sm:h-[224px]" }, [
                createVNode("img", {
                  src: __props.service.image,
                  alt: "",
                  class: "absolute inset-0 h-full w-full object-cover"
                }, null, 8, ["src"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }),
                createVNode("div", { class: "absolute bottom-4 left-4 right-4 flex items-start gap-2" }, [
                  createVNode("span", { class: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#51A2FF] text-[10px] text-white" }, " ✓ "),
                  createVNode("h3", { class: "text-base font-bold leading-snug text-white sm:text-[18px] sm:leading-[22.5px]" }, toDisplayString(__props.service.title), 1)
                ])
              ]),
              createVNode("div", { class: "p-4 sm:p-6" }, [
                createVNode("p", { class: "text-sm leading-relaxed text-[#4A5565] sm:text-base sm:leading-[26px]" }, toDisplayString(__props.service.shortDescription), 1),
                createVNode("span", { class: "mt-4 inline-flex items-center gap-2 text-[16px] font-medium text-[#155DFC]" }, [
                  createTextVNode(" Узнать больше "),
                  createVNode("span", { "aria-hidden": "true" }, "→")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/ServiceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ServiceCard-B2DwP2re.js.map
