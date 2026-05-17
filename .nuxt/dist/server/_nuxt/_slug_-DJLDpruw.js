import { _ as _sfc_main$1, b as _sfc_main$3 } from "./SiteFooter-Ck7CxC6V.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BpXDrWrg.js";
import { _ as _sfc_main$2 } from "./HomeContacts-46jF-WHo.js";
import { defineComponent, computed, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { g as getServiceBySlug } from "./services-T1UzemLn.js";
import { u as useRoute } from "../server.mjs";
import { a as useSeoMeta } from "./v3-BwXw2HPY.js";
import "#internal/nuxt/paths";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/ufo/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/ofetch/dist/node.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/hookable/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/unctx/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/klona/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = computed(() => String(route.params.slug));
    const service = computed(() => getServiceBySlug(slug.value));
    useSeoMeta({
      title: () => service.value ? `${service.value.title} — URBANTECHSTROY` : "Услуга — URBANTECHSTROY",
      description: () => service.value?.shortDescription ?? ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeContacts = _sfc_main$2;
      const _component_SiteFooter = _sfc_main$3;
      if (unref(service)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
        _push(`<section class="relative flex min-h-[280px] w-full items-end overflow-hidden sm:min-h-[360px] lg:h-[420px] lg:items-stretch"><img${ssrRenderAttr("src", unref(service).heroImage ?? unref(service).image)} alt="" class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 bg-black/50"></div><div class="container-site relative z-10 w-full pb-8 pt-[calc(81px+3rem)] sm:pb-10 sm:pt-[calc(81px+4rem)] lg:pb-0 lg:pt-[calc(81px+5rem)]">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          class: "inline-flex items-center gap-2 text-sm leading-6 text-white/90 hover:text-white sm:text-base"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span aria-hidden="true"${_scopeId}>←</span> Вернуться к услугам `);
            } else {
              return [
                createVNode("span", { "aria-hidden": "true" }, "←"),
                createTextVNode(" Вернуться к услугам ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="mt-4 max-w-[900px] text-2xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl sm:leading-[44px] lg:text-[48px] lg:leading-[58px]">${ssrInterpolate(unref(service).title)}</h1><p class="mt-3 max-w-[720px] text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">${ssrInterpolate(unref(service).shortDescription)}</p></div></section>`);
        if (unref(service).description) {
          _push(`<section class="section-y-sm bg-white lg:py-20"><div class="container-site grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"><div><h2 class="heading-subsection">Описание услуги</h2><p class="mt-4 text-sm leading-relaxed text-[#364153] sm:mt-6 sm:text-base sm:leading-[26px]">${ssrInterpolate(unref(service).description)}</p>`);
          if (unref(service).benefits?.length) {
            _push(`<h3 class="mt-8 text-xl font-bold leading-8 text-[#101828] sm:mt-10 sm:text-2xl"> Преимущества </h3>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(service).benefits?.length) {
            _push(`<ul class="mt-4 space-y-3 sm:mt-6 sm:space-y-4"><!--[-->`);
            ssrRenderList(unref(service).benefits, (benefit, index) => {
              _push(`<li class="flex items-start gap-3 text-sm leading-6 text-[#364153] sm:text-base"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#155DFC] text-xs text-white"> ✓ </span> ${ssrInterpolate(benefit)}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (unref(service).gallery?.length) {
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
          _push(`<section class="section-y-sm bg-white lg:py-20"><div class="container-site max-w-3xl"><h2 class="heading-subsection">Описание услуги</h2><p class="mt-4 text-sm leading-relaxed text-[#364153] sm:mt-6 sm:text-base sm:leading-[26px]">${ssrInterpolate(unref(service).shortDescription)}</p></div></section>`);
        }
        if (unref(service).stages?.length) {
          _push(`<section class="section-y-sm bg-[#F9FAFB] lg:py-20"><div class="container-site"><h2 class="heading-subsection">Этапы выполнения работ</h2><p class="mt-2 text-sm leading-7 text-[#4A5565] sm:mt-3 sm:text-base lg:text-lg"> Профессиональный подход к каждому этапу </p><div class="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-3"><!--[-->`);
          ssrRenderList(unref(service).stages, (stage) => {
            _push(`<div class="rounded-[14px] border border-[#E5E7EB] bg-white p-5 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:p-6"><div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#155DFC] text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base">${ssrInterpolate(stage.step)}</div><p class="mt-3 text-sm leading-6 text-[#364153] sm:mt-4 sm:text-base">${ssrInterpolate(stage.title)}</p></div>`);
          });
          _push(`<!--]--></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="section-y-sm bg-[#155DFC] lg:py-20"><div class="container-site text-center"><h2 class="heading-subsection text-white">Готовы начать работу?</h2><p class="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#DBEAFE] sm:mt-4 sm:text-base lg:text-lg"> Свяжитесь с нами для получения консультации и расчёта стоимости </p><div class="btn-row mx-auto mt-6 max-w-md justify-center sm:mt-8 sm:max-w-none"><a href="#contacts" class="btn-full-mobile inline-flex h-12 items-center rounded-[10px] bg-white px-6 text-sm font-semibold text-[#155DFC] sm:text-base"> Оставить заявку </a><a href="tel:+998910023343" class="btn-full-mobile inline-flex h-12 items-center rounded-[10px] border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white sm:text-base"> Позвонить сейчас </a></div></div></section>`);
        _push(ssrRenderComponent(_component_HomeContacts, null, null, _parent));
        _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
        _push(`<div class="container-site py-24 sm:py-32"><p class="text-base text-[#4A5565] sm:text-lg">Услуга не найдена.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          class: "mt-4 inline-block text-[#155DFC]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Вернуться к услугам `);
            } else {
              return [
                createTextVNode(" Вернуться к услугам ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DJLDpruw.js.map
