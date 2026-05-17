import { b as _sfc_main$2, _ as _sfc_main$3 } from './SiteFooter-Ck7CxC6V.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BpXDrWrg.mjs';
import { _ as _sfc_main$1 } from './HomeContacts-46jF-WHo.mjs';
import { defineComponent, computed, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { g as getServiceBySlug } from './services-T1UzemLn.mjs';
import { u as useRoute } from './server.mjs';
import { u as useSeoMeta } from './v3-BwXw2HPY.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = computed(() => String(route.params.slug));
    const service = computed(() => getServiceBySlug(slug.value));
    useSeoMeta({
      title: () => service.value ? `${service.value.title} \u2014 URBANTECHSTROY` : "\u0423\u0441\u043B\u0443\u0433\u0430 \u2014 URBANTECHSTROY",
      description: () => {
        var _a, _b;
        return (_b = (_a = service.value) == null ? void 0 : _a.shortDescription) != null ? _b : "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_SiteHeader = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeContacts = _sfc_main$1;
      const _component_SiteFooter = _sfc_main$3;
      if (unref(service)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
        _push(`<section class="relative flex min-h-[280px] w-full items-end overflow-hidden sm:min-h-[360px] lg:h-[420px] lg:items-stretch"><img${ssrRenderAttr("src", (_a = unref(service).heroImage) != null ? _a : unref(service).image)} alt="" class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 bg-black/50"></div><div class="container-site relative z-10 w-full pb-8 pt-[calc(81px+3rem)] sm:pb-10 sm:pt-[calc(81px+4rem)] lg:pb-0 lg:pt-[calc(81px+5rem)]">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          class: "inline-flex items-center gap-2 text-sm leading-6 text-white/90 hover:text-white sm:text-base"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span aria-hidden="true"${_scopeId}>\u2190</span> \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0443\u0441\u043B\u0443\u0433\u0430\u043C `);
            } else {
              return [
                createVNode("span", { "aria-hidden": "true" }, "\u2190"),
                createTextVNode(" \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0443\u0441\u043B\u0443\u0433\u0430\u043C ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="mt-4 max-w-[900px] text-2xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl sm:leading-[44px] lg:text-[48px] lg:leading-[58px]">${ssrInterpolate(unref(service).title)}</h1><p class="mt-3 max-w-[720px] text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">${ssrInterpolate(unref(service).shortDescription)}</p></div></section>`);
        if (unref(service).description) {
          _push(`<section class="section-y-sm bg-white lg:py-20"><div class="container-site grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"><div><h2 class="heading-subsection">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438</h2><p class="mt-4 text-sm leading-relaxed text-[#364153] sm:mt-6 sm:text-base sm:leading-[26px]">${ssrInterpolate(unref(service).description)}</p>`);
          if ((_b = unref(service).benefits) == null ? void 0 : _b.length) {
            _push(`<h3 class="mt-8 text-xl font-bold leading-8 text-[#101828] sm:mt-10 sm:text-2xl"> \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 </h3>`);
          } else {
            _push(`<!---->`);
          }
          if ((_c = unref(service).benefits) == null ? void 0 : _c.length) {
            _push(`<ul class="mt-4 space-y-3 sm:mt-6 sm:space-y-4"><!--[-->`);
            ssrRenderList(unref(service).benefits, (benefit, index) => {
              _push(`<li class="flex items-start gap-3 text-sm leading-6 text-[#364153] sm:text-base"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#155DFC] text-xs text-white"> \u2713 </span> ${ssrInterpolate(benefit)}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if ((_d = unref(service).gallery) == null ? void 0 : _d.length) {
            _push(`<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"><!--[-->`);
            ssrRenderList(unref(service).gallery, (src, index) => {
              _push(`<div class="overflow-hidden rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px]"><img${ssrRenderAttr("src", src)} alt="" class="h-[200px] w-full object-cover sm:h-[240px] lg:h-[280px]"></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></section>`);
        } else {
          _push(`<section class="section-y-sm bg-white lg:py-20"><div class="container-site max-w-3xl"><h2 class="heading-subsection">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438</h2><p class="mt-4 text-sm leading-relaxed text-[#364153] sm:mt-6 sm:text-base sm:leading-[26px]">${ssrInterpolate(unref(service).shortDescription)}</p></div></section>`);
        }
        if ((_e = unref(service).stages) == null ? void 0 : _e.length) {
          _push(`<section class="section-y-sm bg-[#F9FAFB] lg:py-20"><div class="container-site"><h2 class="heading-subsection">\u042D\u0442\u0430\u043F\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442</h2><p class="mt-2 text-sm leading-7 text-[#4A5565] sm:mt-3 sm:text-base lg:text-lg"> \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u044D\u0442\u0430\u043F\u0443 </p><div class="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-3"><!--[-->`);
          ssrRenderList(unref(service).stages, (stage) => {
            _push(`<div class="rounded-[14px] border border-[#E5E7EB] bg-white p-5 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:p-6"><div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#155DFC] text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base">${ssrInterpolate(stage.step)}</div><p class="mt-3 text-sm leading-6 text-[#364153] sm:mt-4 sm:text-base">${ssrInterpolate(stage.title)}</p></div>`);
          });
          _push(`<!--]--></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="section-y-sm bg-[#155DFC] lg:py-20"><div class="container-site text-center"><h2 class="heading-subsection text-white">\u0413\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443?</h2><p class="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#DBEAFE] sm:mt-4 sm:text-base lg:text-lg"> \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0438 \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 </p><div class="btn-row mx-auto mt-6 max-w-md justify-center sm:mt-8 sm:max-w-none"><a href="#contacts" class="btn-full-mobile inline-flex h-12 items-center rounded-[10px] bg-white px-6 text-sm font-semibold text-[#155DFC] sm:text-base"> \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 </a><a href="tel:+998910023343" class="btn-full-mobile inline-flex h-12 items-center rounded-[10px] border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white sm:text-base"> \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441 </a></div></div></section>`);
        _push(ssrRenderComponent(_component_HomeContacts, null, null, _parent));
        _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
        _push(`<div class="container-site py-24 sm:py-32"><p class="text-base text-[#4A5565] sm:text-lg">\u0423\u0441\u043B\u0443\u0433\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          class: "mt-4 inline-block text-[#155DFC]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0443\u0441\u043B\u0443\u0433\u0430\u043C `);
            } else {
              return [
                createTextVNode(" \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0443\u0441\u043B\u0443\u0433\u0430\u043C ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DJLDpruw.mjs.map
