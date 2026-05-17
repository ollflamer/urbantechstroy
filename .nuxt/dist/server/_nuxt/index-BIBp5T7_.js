import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./SiteFooter-Ck7CxC6V.js";
import { defineComponent, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { a as aboutIntro, b as aboutStats, c as aboutPortfolio, d as aboutDirector, e as aboutPaymentMethods } from "./about-ojLGu0i-.js";
import { a as useSeoMeta } from "./v3-BwXw2HPY.js";
import "./nuxt-link-BpXDrWrg.js";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/ofetch/dist/node.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/hookable/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/unctx/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/klona/dist/index.mjs";
import "C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/@unhead/vue/dist/index.mjs";
const _imports_0 = publicAssetsURL("/icons/about-contact-phone.svg");
const _imports_1 = publicAssetsURL("/icons/about-contact-telegram.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "О компании — URBANTECHSTROY",
      description: "URBANTECHSTROY — молодая, быстроразвивающаяся строительная компания с большим опытом. 28 лет опыта, 50+ специалистов, 60+ реализованных проектов."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$1;
      const _component_Reveal = _sfc_main$2;
      const _component_SiteFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
      _push(`<section class="relative overflow-hidden section-y-sm pt-[calc(81px+3rem)] sm:py-20 sm:pt-[calc(81px+5rem)] lg:py-24" style="${ssrRenderStyle({ "background": "linear-gradient(\n					135deg,\n					rgba(4, 25, 72, 1) 0%,\n					rgba(25, 60, 184, 1) 100%\n				)" })}"><div class="container-site relative z-10 text-center">`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "blur-up",
        immediate: "",
        delay: 0.1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="heading-page text-white"${_scopeId}>О компании URBANTECHSTROY</h1><p class="mx-auto mt-3 max-w-[896px] text-base leading-7 text-[#DBEAFE] sm:mt-4 sm:text-lg lg:text-2xl lg:leading-8"${_scopeId}> Молодая, быстроразвивающаяся строительная компания с большим опытом </p>`);
          } else {
            return [
              createVNode("h1", { class: "heading-page text-white" }, "О компании URBANTECHSTROY"),
              createVNode("p", { class: "mx-auto mt-3 max-w-[896px] text-base leading-7 text-[#DBEAFE] sm:mt-4 sm:text-lg lg:text-2xl lg:leading-8" }, " Молодая, быстроразвивающаяся строительная компания с большим опытом ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="section-y-sm bg-white"><div class="container-site max-w-3xl space-y-4 sm:space-y-6"><p class="text-base leading-relaxed text-[#364153] sm:text-lg lg:text-xl lg:leading-[32.5px]"> Компания <strong class="font-bold text-[#155DFC]">«URBANTECHSTROY»</strong> предоставляет широкий спектр строительно-ремонтных услуг любой сложности. </p><p class="text-sm leading-relaxed text-[#364153] sm:text-base lg:text-lg lg:leading-[29.25px]">${ssrInterpolate(unref(aboutIntro).description)}</p></div></section><section class="section-y-sm bg-[#F9FAFB]"><div class="container-site grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(aboutStats), (stat) => {
        _push(`<div class="flex flex-col items-center rounded-[16px] bg-white px-5 py-6 text-center shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:px-6 sm:pb-8 sm:pt-8"><img${ssrRenderAttr("src", stat.icon)} alt="" class="h-14 w-14 shrink-0 sm:h-16 sm:w-16"><p class="mt-4 text-3xl font-bold leading-10 text-[#155DFC] sm:mt-6 sm:text-[36px]">${ssrInterpolate(stat.value)}</p><p class="mt-2 w-full max-w-[280px] text-sm leading-6 text-[#4A5565] sm:text-base">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="section-y-sm bg-white lg:py-16"><div class="container-site"><h2 class="heading-subsection text-center">Портфолио наших работ</h2><div class="mx-auto mt-8 grid max-w-[896px] grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12"><!--[-->`);
      ssrRenderList(unref(aboutPortfolio), (item, index) => {
        _push(`<div class="flex min-h-[72px] items-center gap-3 rounded-[14px] bg-[#F9FAFB] py-3 pl-3 pr-4 sm:min-h-[80px] sm:py-4 sm:pl-4 sm:pr-5"><img${ssrRenderAttr("src", item.icon)} alt="" class="h-5 w-5 shrink-0 sm:h-6 sm:w-6"><p class="text-sm leading-6 text-[#364153] sm:text-base">${ssrInterpolate(item.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section-y-sm" style="${ssrRenderStyle({ "background": "linear-gradient(\n					135deg,\n					rgba(249, 250, 251, 1) 0%,\n					rgba(243, 244, 246, 1) 100%\n				)" })}"><div class="container-site"><div class="overflow-hidden rounded-[16px] bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:rounded-[24px] lg:grid lg:h-[502px] lg:grid-cols-2"><div class="relative min-h-[240px] sm:min-h-[320px] lg:min-h-0 lg:h-full"><img${ssrRenderAttr("src", unref(aboutDirector).image)} alt="Алтухов Андрей Владимирович" class="absolute inset-0 h-full w-full object-cover object-center"></div><div class="flex flex-col p-5 sm:p-8 lg:p-12"><span class="inline-flex w-fit rounded-full bg-[#DBEAFE] px-3 py-1.5 text-xs font-medium leading-5 text-[#1447E6] sm:px-4 sm:py-2 sm:text-[14px]"> Руководство компании </span><h2 class="mt-4 max-w-[512px] text-2xl font-bold leading-tight text-[#101828] sm:mt-6 sm:text-[32px] sm:leading-10 lg:text-[36px] lg:leading-[40px]">${ssrInterpolate(unref(aboutDirector).name)}</h2><p class="mt-3 text-base font-medium leading-7 text-[#155DFC] sm:mt-4 sm:text-lg lg:text-xl">${ssrInterpolate(unref(aboutDirector).role)}</p><div class="mt-4 flex max-w-[512px] flex-col gap-3 sm:mt-6 sm:gap-4"><!--[-->`);
      ssrRenderList(unref(aboutDirector).paragraphs, (paragraph, index) => {
        _push(`<p class="text-sm leading-relaxed text-[#364153] sm:text-base sm:leading-[26px]"><!--[-->`);
        ssrRenderList(paragraph, (part, partIndex) => {
          _push(`<!--[-->`);
          if (part.emphasis === "bold") {
            _push(`<span class="font-bold text-[#364153]">${ssrInterpolate(part.text)}</span>`);
          } else if (part.emphasis === "accent") {
            _push(`<span class="font-bold text-[#155DFC]">${ssrInterpolate(part.text)}</span>`);
          } else {
            _push(`<!--[-->${ssrInterpolate(part.text)}<!--]-->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></p>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="section-y-sm bg-white lg:py-20"><div class="container-site max-w-3xl text-center"><h2 class="heading-subsection">Удобная оплата</h2><p class="text-lead mt-3 sm:mt-4"> Мы принимаем оплату любым удобным для вас способом </p><div class="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3"><!--[-->`);
      ssrRenderList(unref(aboutPaymentMethods), (method) => {
        _push(`<span class="rounded-[14px] bg-[#EFF6FF] px-4 py-2.5 text-sm font-medium leading-6 text-[#1447E6] sm:px-6 sm:py-3 sm:text-base">${ssrInterpolate(method)}</span>`);
      });
      _push(`<!--]--></div></div></section><section class="section-y-sm" style="${ssrRenderStyle({ "background": "linear-gradient(\n					135deg,\n					rgba(4, 25, 72, 1) 0%,\n					rgba(25, 60, 184, 1) 100%\n				)" })}"><div class="container-site text-center"><h2 class="heading-subsection text-white">Свяжитесь с нами</h2><p class="mt-3 text-base leading-7 text-[#DBEAFE] sm:mt-4 sm:text-lg lg:text-xl"> Готовы ответить на все ваши вопросы </p><div class="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:gap-6"><a href="tel:+998910023343" class="btn-full-mobile inline-flex h-12 items-center justify-center gap-3 rounded-[14px] bg-white px-6 text-sm font-bold text-[#155DFC] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:h-14 sm:px-8 sm:text-base"><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-5 w-5"> +998 91 002 33 43 </a><a href="tel:+998999372027" class="btn-full-mobile inline-flex h-12 items-center justify-center gap-3 rounded-[14px] bg-white px-6 text-sm font-bold text-[#155DFC] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:h-14 sm:px-8 sm:text-base"><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-5 w-5"> +998 99 937 20 27 </a><a href="#" class="btn-full-mobile inline-flex h-12 items-center justify-center gap-3 rounded-[14px] bg-[#1447E6] px-6 text-sm font-bold text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:h-14 sm:px-8 sm:text-base"><img${ssrRenderAttr("src", _imports_1)} alt="" class="h-5 w-5"> Telegram </a></div></div></section>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BIBp5T7_.js.map
