import { b as _sfc_main$2, a as _sfc_main$1, s as staggerDelay, _ as _sfc_main$4 } from './SiteFooter-Ck7CxC6V.mjs';
import { _ as _sfc_main$3 } from './ServiceCard-B2DwP2re.mjs';
import { defineComponent, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { s as services } from './services-T1UzemLn.mjs';
import { u as useSeoMeta } from './v3-BwXw2HPY.mjs';
import './nuxt-link-BpXDrWrg.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u0423\u0441\u043B\u0443\u0433\u0438 \u2014 URBANTECHSTROY",
      description: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433: \u0436\u0438\u043B\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B, \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u0434\u043E\u043C\u0430, \u0440\u0435\u043C\u043E\u043D\u0442, \u0444\u0430\u0441\u0430\u0434\u044B, \u043A\u0440\u043E\u0432\u043B\u044F \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$2;
      const _component_Reveal = _sfc_main$1;
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
            _push2(`<h1 class="heading-section"${_scopeId}>\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0443\u0441\u043B\u0443\u0433</h1><p class="text-lead mx-auto mt-3 max-w-2xl sm:mt-4"${_scopeId}> \u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 </p>`);
          } else {
            return [
              createVNode("h1", { class: "heading-section" }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0443\u0441\u043B\u0443\u0433"),
              createVNode("p", { class: "text-lead mx-auto mt-3 max-w-2xl sm:mt-4" }, " \u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 ")
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

export { _sfc_main as default };
//# sourceMappingURL=index-RpZSJjj4.mjs.map
