import { _ as _sfc_main$9, a as _sfc_main$1$1, s as staggerDelay, b as _sfc_main$2$1 } from './SiteFooter-Ck7CxC6V.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BpXDrWrg.mjs';
import { mergeProps, defineComponent, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, h, reactive, withDirectives, vModelSelect, vModelText, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { h as homeAboutFeatures } from './about-ojLGu0i-.mjs';
import { _ as _sfc_main$a } from './ServiceCard-B2DwP2re.mjs';
import { s as services } from './services-T1UzemLn.mjs';
import { p as projects, _ as _sfc_main$b } from './projects-BREcmVYU.mjs';
import { _ as _sfc_main$8 } from './HomeContacts-46jF-WHo.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _imports_0$4 = publicAssetsURL("/images/hero-construction-site.png");
const _imports_1$1 = publicAssetsURL("/icons/icon-calc-left.svg");
const _imports_2 = publicAssetsURL("/icons/icon-arrow-right.svg");
const _imports_3 = publicAssetsURL("/icons/icon-phone.svg");
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SiteHeader = _sfc_main$2$1;
  const _component_Reveal = _sfc_main$1$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-[560px] w-full flex-col lg:h-[896px]" }, _attrs))}><div class="absolute inset-0 overflow-hidden"><img${ssrRenderAttr("src", _imports_0$4)} alt="" class="hero-bg-zoom absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0" style="${ssrRenderStyle({ "background": "linear-gradient(\r\n						90deg,\r\n						rgba(0, 0, 0, 0.7) 0%,\r\n						rgba(0, 0, 0, 0.5) 50%,\r\n						rgba(0, 0, 0, 0.3) 100%\r\n					)" })}"></div><div class="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[96px] sm:h-[128px]" aria-hidden="true" style="${ssrRenderStyle({ "background": "linear-gradient(\r\n						0deg,\r\n						rgba(255, 255, 255, 1) 0%,\r\n						rgba(231, 231, 231, 0.93) 7%,\r\n						rgba(208, 208, 208, 0.86) 14%,\r\n						rgba(185, 185, 185, 0.79) 21%,\r\n						rgba(163, 163, 163, 0.71) 29%,\r\n						rgba(141, 141, 141, 0.64) 36%,\r\n						rgba(120, 120, 120, 0.57) 43%,\r\n						rgba(99, 99, 99, 0.5) 50%,\r\n						rgba(79, 79, 79, 0.43) 57%,\r\n						rgba(60, 60, 60, 0.36) 64%,\r\n						rgba(42, 42, 42, 0.29) 71%,\r\n						rgba(25, 25, 25, 0.21) 79%,\r\n						rgba(10, 10, 10, 0.14) 86%,\r\n						rgba(1, 1, 1, 0.07) 93%,\r\n						rgba(0, 0, 0, 0) 100%\r\n					)" })}"></div></div>`);
  _push(ssrRenderComponent(_component_SiteHeader, { entrance: "" }, null, _parent));
  _push(`<div class="relative z-10 flex flex-1 flex-col"><div class="container-site flex flex-1 flex-col pb-12 pt-[calc(81px+2rem)] sm:pb-16 sm:pt-[calc(81px+3rem)] lg:pb-20 lg:pt-[calc(81px+4.5rem)]"><div class="w-full max-w-[768px]">`);
  _push(ssrRenderComponent(_component_Reveal, {
    variant: "blur-up",
    immediate: "",
    delay: 0.12,
    duration: 1
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-[32px] font-bold leading-[1.15] text-white sm:text-[44px] md:text-[56px] lg:text-[72px] lg:leading-[90px]"${_scopeId}> \u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438 \u0440\u0435\u043C\u043E\u043D\u0442 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435 </h1>`);
      } else {
        return [
          createVNode("h1", { class: "text-[32px] font-bold leading-[1.15] text-white sm:text-[44px] md:text-[56px] lg:text-[72px] lg:leading-[90px]" }, " \u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438 \u0440\u0435\u043C\u043E\u043D\u0442 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Reveal, {
    variant: "fade-up",
    immediate: "",
    delay: 0.28,
    duration: 0.9
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="mt-4 text-base leading-7 text-[#E5E7EB] sm:mt-6 sm:text-lg lg:text-2xl lg:leading-8"${_scopeId}> \u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u2014 \u043E\u0442 \u0438\u0434\u0435\u0438 \u0434\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430 </p>`);
      } else {
        return [
          createVNode("p", { class: "mt-4 text-base leading-7 text-[#E5E7EB] sm:mt-6 sm:text-lg lg:text-2xl lg:leading-8" }, " \u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u2014 \u043E\u0442 \u0438\u0434\u0435\u0438 \u0434\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Reveal, {
    variant: "fade-up",
    immediate: "",
    delay: 0.44,
    duration: 0.9
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="btn-row mt-8 sm:mt-10"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/#calculator",
          class: "btn-full-mobile inline-flex h-[52px] items-center gap-3 rounded-[14px] bg-gradient-to-r from-[#155DFC] to-[#1447E6] px-6 text-[15px] font-medium text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:h-[58px] sm:px-8 sm:text-[16px]"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_1$1)} alt="" class="h-5 w-5"${_scopeId2}><span${_scopeId2}>\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C</span><img${ssrRenderAttr("src", _imports_2)} alt="" class="h-5 w-5"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "",
                  class: "h-5 w-5"
                }),
                createVNode("span", null, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"),
                createVNode("img", {
                  src: _imports_2,
                  alt: "",
                  class: "h-5 w-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/#contacts",
          class: "btn-full-mobile inline-flex h-[52px] items-center gap-3 rounded-[14px] border border-white/30 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition-[transform,background-color] duration-300 hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98] sm:h-[58px] sm:px-8 sm:text-[16px]"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_3)} alt="" class="h-5 w-5"${_scopeId2}><span${_scopeId2}>\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438</span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_3,
                  alt: "",
                  class: "h-5 w-5"
                }),
                createVNode("span", null, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "btn-row mt-8 sm:mt-10" }, [
            createVNode(_component_NuxtLink, {
              to: "/#calculator",
              class: "btn-full-mobile inline-flex h-[52px] items-center gap-3 rounded-[14px] bg-gradient-to-r from-[#155DFC] to-[#1447E6] px-6 text-[15px] font-medium text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:h-[58px] sm:px-8 sm:text-[16px]"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "",
                  class: "h-5 w-5"
                }),
                createVNode("span", null, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"),
                createVNode("img", {
                  src: _imports_2,
                  alt: "",
                  class: "h-5 w-5"
                })
              ]),
              _: 1
            }),
            createVNode(_component_NuxtLink, {
              to: "/#contacts",
              class: "btn-full-mobile inline-flex h-[52px] items-center gap-3 rounded-[14px] border border-white/30 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition-[transform,background-color] duration-300 hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98] sm:h-[58px] sm:px-8 sm:text-[16px]"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: _imports_3,
                  alt: "",
                  class: "h-5 w-5"
                }),
                createVNode("span", null, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeHero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HomeAbout",
  __ssrInlineRender: true,
  setup(__props) {
    const aboutImagesLeft = [
      "/images/about-construction-team.png",
      "/images/about-modern-building.png"
    ];
    const aboutImagesRight = [
      "/images/about-construction-workers.png",
      "/images/about-building-construction.png"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Reveal = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "relative z-[1] -mt-16 bg-[#F9FAFB] section-y-sm sm:-mt-24"
      }, _attrs))}><div class="container-site flex flex-col gap-10 lg:flex-row lg:gap-12">`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-right",
        class: "w-full shrink-0 lg:w-[584px] lg:pt-[27px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h2 class="heading-section"${_scopeId}>\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</h2><p class="mt-4 text-base font-semibold leading-relaxed sm:mt-6 sm:text-lg lg:text-xl lg:leading-[32.5px]"${_scopeId}><span class="text-[#155DFC]"${_scopeId}>URBANTECHSTROY</span><span class="font-normal text-[#364153]"${_scopeId}> \u2014 \u043C\u043E\u043B\u043E\u0434\u0430\u044F, \u0431\u044B\u0441\u0442\u0440\u043E\u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C </span></p><ul class="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(homeAboutFeatures), (item, index2) => {
              _push2(ssrRenderComponent(_component_Reveal, {
                key: item.title,
                variant: "fade-up",
                delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2, 0.08, 0.15),
                as: "li",
                class: "flex gap-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", item.icon)} alt="" class="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"${_scopeId2}><div class="min-w-0"${_scopeId2}><h3 class="text-base font-semibold leading-snug text-[#101828] sm:text-lg sm:leading-[27px]"${_scopeId2}>${ssrInterpolate(item.title)}</h3><p class="mt-1.5 text-sm leading-6 text-[#4A5565] sm:mt-2 sm:text-base"${_scopeId2}>${ssrInterpolate(item.description)}</p></div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: item.icon,
                        alt: "",
                        class: "h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("h3", { class: "text-base font-semibold leading-snug text-[#101828] sm:text-lg sm:leading-[27px]" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "mt-1.5 text-sm leading-6 text-[#4A5565] sm:mt-2 sm:text-base" }, toDisplayString(item.description), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></ul>`);
            _push2(ssrRenderComponent(_component_Reveal, {
              variant: "fade-up",
              delay: 0.45
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/about",
                    class: "btn-full-mobile mt-8 inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:mt-10 sm:h-14 sm:text-base"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 <span aria-hidden="true"${_scopeId3}>\u2192</span>`);
                      } else {
                        return [
                          createTextVNode(" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 "),
                          createVNode("span", { "aria-hidden": "true" }, "\u2192")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "/about",
                      class: "btn-full-mobile mt-8 inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:mt-10 sm:h-14 sm:text-base"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 "),
                        createVNode("span", { "aria-hidden": "true" }, "\u2192")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h2", { class: "heading-section" }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                createVNode("p", { class: "mt-4 text-base font-semibold leading-relaxed sm:mt-6 sm:text-lg lg:text-xl lg:leading-[32.5px]" }, [
                  createVNode("span", { class: "text-[#155DFC]" }, "URBANTECHSTROY"),
                  createVNode("span", { class: "font-normal text-[#364153]" }, " \u2014 \u043C\u043E\u043B\u043E\u0434\u0430\u044F, \u0431\u044B\u0441\u0442\u0440\u043E\u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C ")
                ]),
                createVNode("ul", { class: "mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(homeAboutFeatures), (item, index2) => {
                    return openBlock(), createBlock(_component_Reveal, {
                      key: item.title,
                      variant: "fade-up",
                      delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2, 0.08, 0.15),
                      as: "li",
                      class: "flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: item.icon,
                          alt: "",
                          class: "h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("h3", { class: "text-base font-semibold leading-snug text-[#101828] sm:text-lg sm:leading-[27px]" }, toDisplayString(item.title), 1),
                          createVNode("p", { class: "mt-1.5 text-sm leading-6 text-[#4A5565] sm:mt-2 sm:text-base" }, toDisplayString(item.description), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["delay"]);
                  }), 128))
                ]),
                createVNode(_component_Reveal, {
                  variant: "fade-up",
                  delay: 0.45
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: "/about",
                      class: "btn-full-mobile mt-8 inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:mt-10 sm:h-14 sm:text-base"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 "),
                        createVNode("span", { "aria-hidden": "true" }, "\u2192")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-left",
        class: "grid w-full grid-cols-2 gap-3 sm:gap-4 lg:w-[584px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-3 sm:gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(aboutImagesLeft, (src, index2) => {
              _push2(ssrRenderComponent(_component_Reveal, {
                key: src,
                variant: "scale",
                delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2, 0.1),
                class: "overflow-hidden rounded-[12px] sm:rounded-[16px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", src)} alt="" class="${ssrRenderClass([
                      index2 === 0 ? "h-[140px] sm:h-[200px] lg:h-[256px]" : "h-[100px] sm:h-[160px] lg:h-[192px]",
                      "h-full w-full object-cover"
                    ])}"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src,
                        alt: "",
                        class: [
                          "h-full w-full object-cover",
                          index2 === 0 ? "h-[140px] sm:h-[200px] lg:h-[256px]" : "h-[100px] sm:h-[160px] lg:h-[192px]"
                        ]
                      }, null, 10, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="flex flex-col gap-3 pt-6 sm:gap-4 sm:pt-8"${_scopeId}><!--[-->`);
            ssrRenderList(aboutImagesRight, (src, index2) => {
              _push2(ssrRenderComponent(_component_Reveal, {
                key: src,
                variant: "scale",
                delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2, 0.1, 0.12),
                class: "overflow-hidden rounded-[12px] sm:rounded-[16px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", src)} alt="" class="${ssrRenderClass([
                      index2 === 0 ? "h-[100px] sm:h-[160px] lg:h-[192px]" : "h-[140px] sm:h-[200px] lg:h-[256px]",
                      "h-full w-full object-cover"
                    ])}"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src,
                        alt: "",
                        class: [
                          "h-full w-full object-cover",
                          index2 === 0 ? "h-[100px] sm:h-[160px] lg:h-[192px]" : "h-[140px] sm:h-[200px] lg:h-[256px]"
                        ]
                      }, null, 10, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-3 sm:gap-4" }, [
                (openBlock(), createBlock(Fragment, null, renderList(aboutImagesLeft, (src, index2) => {
                  return createVNode(_component_Reveal, {
                    key: src,
                    variant: "scale",
                    delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2, 0.1),
                    class: "overflow-hidden rounded-[12px] sm:rounded-[16px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src,
                        alt: "",
                        class: [
                          "h-full w-full object-cover",
                          index2 === 0 ? "h-[140px] sm:h-[200px] lg:h-[256px]" : "h-[100px] sm:h-[160px] lg:h-[192px]"
                        ]
                      }, null, 10, ["src"])
                    ]),
                    _: 2
                  }, 1032, ["delay"]);
                }), 64))
              ]),
              createVNode("div", { class: "flex flex-col gap-3 pt-6 sm:gap-4 sm:pt-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(aboutImagesRight, (src, index2) => {
                  return createVNode(_component_Reveal, {
                    key: src,
                    variant: "scale",
                    delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2, 0.1, 0.12),
                    class: "overflow-hidden rounded-[12px] sm:rounded-[16px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src,
                        alt: "",
                        class: [
                          "h-full w-full object-cover",
                          index2 === 0 ? "h-[100px] sm:h-[160px] lg:h-[192px]" : "h-[140px] sm:h-[200px] lg:h-[256px]"
                        ]
                      }, null, 10, ["src"])
                    ]),
                    _: 2
                  }, 1032, ["delay"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeAbout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$3 = publicAssetsURL("/icons/services-all-icon.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HomeServices",
  __ssrInlineRender: true,
  setup(__props) {
    const previewServices = services.slice(0, 3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Reveal = _sfc_main$1$1;
      const _component_ServiceCard = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "section-y bg-white"
      }, _attrs))}><div class="container-site">`);
      _push(ssrRenderComponent(_component_Reveal, { variant: "fade-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2 sm:space-y-3"${_scopeId}><h2 class="heading-section"${_scopeId}>\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438</h2><p class="text-lead max-w-2xl"${_scopeId}> \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u0432\u043E\u043F\u043B\u043E\u0449\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0438\u0445 \u0438\u0434\u0435\u0439 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C </p></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2 sm:space-y-3" }, [
                createVNode("h2", { class: "heading-section" }, "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438"),
                createVNode("p", { class: "text-lead max-w-2xl" }, " \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u0432\u043E\u043F\u043B\u043E\u0449\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0438\u0445 \u0438\u0434\u0435\u0439 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(previewServices), (service, index2) => {
        _push(ssrRenderComponent(_component_Reveal, {
          key: service.slug,
          variant: "scale",
          delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2)
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
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-up",
        delay: 0.35,
        class: "mt-8 flex justify-center sm:mt-10 lg:mt-12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/services",
              class: "btn-full-mobile inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:h-14 sm:text-base"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0412\u0441\u0435 \u0443\u0441\u043B\u0443\u0433\u0438</span><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="h-5 w-5"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("span", null, "\u0412\u0441\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"),
                    createVNode("img", {
                      src: _imports_0$3,
                      alt: "",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/services",
                class: "btn-full-mobile inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:h-14 sm:text-base"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "\u0412\u0441\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"),
                  createVNode("img", {
                    src: _imports_0$3,
                    alt: "",
                    class: "h-5 w-5"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeServices.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HomeAdvantages",
  __ssrInlineRender: true,
  setup(__props) {
    const advantageCards = [
      {
        iconSrc: "/icons/adv-icon-1.svg",
        title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434",
        text: "\u0411\u0435\u0440\u0435\u043C \u043D\u0430 \u0441\u0435\u0431\u044F \u0432\u0441\u0435 \u044D\u0442\u0430\u043F\u044B \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u2014 \u043E\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E \u0444\u0438\u043D\u0438\u0448\u043D\u043E\u0439 \u043E\u0442\u0434\u0435\u043B\u043A\u0438"
      },
      {
        iconSrc: "/icons/adv-icon-2.svg",
        title: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430",
        text: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044E \u043D\u0430 \u0432\u0441\u0435 \u0440\u0430\u0431\u043E\u0442\u044B"
      },
      {
        iconSrc: "/icons/adv-icon-3.svg",
        title: "\u0421\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u043E\u0432",
        text: "\u0427\u0435\u0442\u043A\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0435\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442"
      },
      {
        iconSrc: "/icons/adv-icon-4.svg",
        title: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434",
        text: "\u0423\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u043C \u0432\u0441\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u0435\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u0434 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"
      }
    ];
    const AdvCard = defineComponent({
      name: "AdvCard",
      props: {
        iconSrc: { type: String, required: true },
        title: { type: String, required: true },
        text: { type: String, required: true }
      },
      setup(props) {
        return () => h(
          "div",
          {
            class: "card-interactive rounded-[16px] border border-[#F3F4F6] bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
          },
          [
            h("div", { class: "p-5 sm:p-[33px]" }, [
              h(
                "div",
                {
                  class: "h-12 w-12 rounded-[14px] p-3 sm:h-14 sm:w-14 sm:p-[14px]",
                  style: "background: linear-gradient(135deg, rgba(43, 127, 255, 1) 0%, rgba(21, 93, 252, 1) 100%)"
                },
                [
                  h("img", {
                    src: props.iconSrc,
                    alt: "",
                    class: "h-6 w-6 sm:h-7 sm:w-7"
                  })
                ]
              ),
              h(
                "h3",
                {
                  class: "mt-4 text-base font-bold leading-snug text-[#101828] sm:mt-6 sm:text-lg sm:leading-[27px]"
                },
                props.title
              ),
              h(
                "p",
                {
                  class: "mt-2 text-sm leading-relaxed text-[#4A5565] sm:mt-3 sm:text-base sm:leading-[26px]"
                },
                props.text
              )
            ])
          ]
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Reveal = _sfc_main$1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "advantages",
        class: "section-y",
        style: { "background": "linear-gradient(\n				135deg,\n				rgba(239, 246, 255, 1) 0%,\n				rgba(249, 250, 251, 1) 100%\n			)" }
      }, _attrs))}><div class="container-site">`);
      _push(ssrRenderComponent(_component_Reveal, { variant: "fade-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h2 class="heading-section"${_scopeId}>\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u043D\u0430\u0441</h2><p class="text-lead mx-auto mt-3 max-w-2xl sm:mt-4"${_scopeId}> \u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u0434\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0434\u043E\u0432\u0435\u0440\u0438\u044F \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 </p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("h2", { class: "heading-section" }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u043D\u0430\u0441"),
                createVNode("p", { class: "text-lead mx-auto mt-3 max-w-2xl sm:mt-4" }, " \u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u0434\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0434\u043E\u0432\u0435\u0440\u0438\u044F \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(advantageCards, (card, index2) => {
        _push(ssrRenderComponent(_component_Reveal, {
          key: card.title,
          variant: "fade-up",
          delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(AdvCard), {
                "icon-src": card.iconSrc,
                title: card.title,
                text: card.text
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(AdvCard), {
                  "icon-src": card.iconSrc,
                  title: card.title,
                  text: card.text
                }, null, 8, ["icon-src", "title", "text"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeAdvantages.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0$2 = publicAssetsURL("/icons/projects-all-icon.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HomeProjectsPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const previewProjects = projects.slice(0, 3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Reveal = _sfc_main$1$1;
      const _component_ProjectCard = _sfc_main$b;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "section-y bg-[#F9FAFB]"
      }, _attrs))}><div class="container-site">`);
      _push(ssrRenderComponent(_component_Reveal, { variant: "fade-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2 sm:space-y-3"${_scopeId}><h2 class="heading-section"${_scopeId}>\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</h2><p class="text-lead max-w-2xl"${_scopeId}> \u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0443 </p></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2 sm:space-y-3" }, [
                createVNode("h2", { class: "heading-section" }, "\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                createVNode("p", { class: "text-lead max-w-2xl" }, " \u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0443 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(previewProjects), (project, index2) => {
        _push(ssrRenderComponent(_component_Reveal, {
          key: project.slug,
          variant: "scale",
          delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ProjectCard, { project }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ProjectCard, { project }, null, 8, ["project"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-up",
        delay: 0.35,
        class: "mt-8 flex justify-center sm:mt-10 lg:mt-12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/projects",
              class: "btn-full-mobile inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:h-14 sm:text-base"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</span><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="h-5 w-5"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("span", null, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                    createVNode("img", {
                      src: _imports_0$2,
                      alt: "",
                      class: "h-5 w-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/projects",
                class: "btn-full-mobile inline-flex h-12 items-center gap-3 rounded-[14px] bg-[#155DFC] px-6 text-sm font-semibold text-white shadow-[0px_12px_30px_rgba(16,24,40,0.12)] sm:h-14 sm:text-base"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
                  createVNode("img", {
                    src: _imports_0$2,
                    alt: "",
                    class: "h-5 w-5"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeProjectsPreview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/icons/regions-icon.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HomeRegions",
  __ssrInlineRender: true,
  setup(__props) {
    const cities = [
      "\u0422\u0430\u0448\u043A\u0435\u043D\u0442",
      "\u0421\u0430\u043C\u0430\u0440\u043A\u0430\u043D\u0434",
      "\u0411\u0443\u0445\u0430\u0440\u0430",
      "\u0410\u043D\u0434\u0438\u0436\u0430\u043D",
      "\u0424\u0435\u0440\u0433\u0430\u043D\u0430",
      "\u041D\u0430\u043C\u0430\u043D\u0433\u0430\u043D"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Reveal = _sfc_main$1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "regions",
        class: "section-y bg-white"
      }, _attrs))}><div class="container-site">`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "scale",
        duration: 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden rounded-[16px] p-6 text-white sm:rounded-[24px] sm:p-10 lg:p-16" style="${ssrRenderStyle({ "background": "linear-gradient(\n							135deg,\n							rgba(21, 93, 252, 1) 0%,\n							rgba(4, 25, 72, 1) 100%\n						)" })}"${_scopeId}><div class="absolute inset-0 opacity-10"${_scopeId}><div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-white blur-[128px] sm:h-64 sm:w-64"${_scopeId}></div><div class="absolute left-0 top-[120px] h-40 w-40 rounded-full bg-white blur-[128px] sm:top-[168px] sm:h-64 sm:w-64"${_scopeId}></div></div><div class="relative mx-auto max-w-[1088px] text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Reveal, {
              variant: "fade-up",
              delay: 0.1
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] bg-white/10 sm:h-16 sm:w-16 sm:rounded-[16px]"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="h-7 w-7 sm:h-8 sm:w-8"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] bg-white/10 sm:h-16 sm:w-16 sm:rounded-[16px]" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: "",
                        class: "h-7 w-7 sm:h-8 sm:w-8"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Reveal, {
              variant: "fade-up",
              delay: 0.2
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="mt-4 text-[26px] font-bold leading-tight sm:mt-6 sm:text-[36px] lg:text-[48px] lg:leading-[48px]"${_scopeId2}> \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0443 <span class="hidden sm:inline"${_scopeId2}><br${_scopeId2}></span><span class="sm:hidden"${_scopeId2}></span> \u0438 \u0437\u0430 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 </h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "mt-4 text-[26px] font-bold leading-tight sm:mt-6 sm:text-[36px] lg:text-[48px] lg:leading-[48px]" }, [
                      createTextVNode(" \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0443 "),
                      createVNode("span", { class: "hidden sm:inline" }, [
                        createVNode("br")
                      ]),
                      createVNode("span", { class: "sm:hidden" }),
                      createTextVNode(" \u0438 \u0437\u0430 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Reveal, {
              variant: "fade-up",
              delay: 0.3
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mx-auto mt-4 max-w-[768px] text-base leading-7 text-[#DBEAFE] sm:mt-6 sm:text-lg lg:text-xl"${_scopeId2}> \u041D\u0430\u0448\u0438 \u0431\u0440\u0438\u0433\u0430\u0434\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0432\u044B\u0435\u0445\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u0440\u0435\u0433\u0438\u043E\u043D \u0441\u0442\u0440\u0430\u043D\u044B \u0434\u043B\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0431\u043E\u0442 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430. </p>`);
                } else {
                  return [
                    createVNode("p", { class: "mx-auto mt-4 max-w-[768px] text-base leading-7 text-[#DBEAFE] sm:mt-6 sm:text-lg lg:text-xl" }, " \u041D\u0430\u0448\u0438 \u0431\u0440\u0438\u0433\u0430\u0434\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0432\u044B\u0435\u0445\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u0440\u0435\u0433\u0438\u043E\u043D \u0441\u0442\u0440\u0430\u043D\u044B \u0434\u043B\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0431\u043E\u0442 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3 lg:gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(cities, (city, index2) => {
              _push2(ssrRenderComponent(_component_Reveal, {
                key: city,
                variant: "fade-up",
                delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2, 0.06, 0.4)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-full bg-white/10 px-4 py-2 text-sm leading-6 sm:h-12 sm:px-[22px] sm:py-[10px] sm:text-base"${_scopeId2}>${ssrInterpolate(city)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "rounded-full bg-white/10 px-4 py-2 text-sm leading-6 sm:h-12 sm:px-[22px] sm:py-[10px] sm:text-base" }, toDisplayString(city), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "relative overflow-hidden rounded-[16px] p-6 text-white sm:rounded-[24px] sm:p-10 lg:p-16",
                style: { "background": "linear-gradient(\n							135deg,\n							rgba(21, 93, 252, 1) 0%,\n							rgba(4, 25, 72, 1) 100%\n						)" }
              }, [
                createVNode("div", { class: "absolute inset-0 opacity-10" }, [
                  createVNode("div", { class: "absolute right-0 top-0 h-40 w-40 rounded-full bg-white blur-[128px] sm:h-64 sm:w-64" }),
                  createVNode("div", { class: "absolute left-0 top-[120px] h-40 w-40 rounded-full bg-white blur-[128px] sm:top-[168px] sm:h-64 sm:w-64" })
                ]),
                createVNode("div", { class: "relative mx-auto max-w-[1088px] text-center" }, [
                  createVNode(_component_Reveal, {
                    variant: "fade-up",
                    delay: 0.1
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] bg-white/10 sm:h-16 sm:w-16 sm:rounded-[16px]" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "",
                          class: "h-7 w-7 sm:h-8 sm:w-8"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Reveal, {
                    variant: "fade-up",
                    delay: 0.2
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "mt-4 text-[26px] font-bold leading-tight sm:mt-6 sm:text-[36px] lg:text-[48px] lg:leading-[48px]" }, [
                        createTextVNode(" \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0443 "),
                        createVNode("span", { class: "hidden sm:inline" }, [
                          createVNode("br")
                        ]),
                        createVNode("span", { class: "sm:hidden" }),
                        createTextVNode(" \u0438 \u0437\u0430 \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Reveal, {
                    variant: "fade-up",
                    delay: 0.3
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "mx-auto mt-4 max-w-[768px] text-base leading-7 text-[#DBEAFE] sm:mt-6 sm:text-lg lg:text-xl" }, " \u041D\u0430\u0448\u0438 \u0431\u0440\u0438\u0433\u0430\u0434\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0432\u044B\u0435\u0445\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u0440\u0435\u0433\u0438\u043E\u043D \u0441\u0442\u0440\u0430\u043D\u044B \u0434\u043B\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0431\u043E\u0442 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430. ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-6 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3 lg:gap-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(cities, (city, index2) => {
                      return createVNode(_component_Reveal, {
                        key: city,
                        variant: "fade-up",
                        delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index2, 0.06, 0.4)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "rounded-full bg-white/10 px-4 py-2 text-sm leading-6 sm:h-12 sm:px-[22px] sm:py-[10px] sm:text-base" }, toDisplayString(city), 1)
                        ]),
                        _: 2
                      }, 1032, ["delay"]);
                    }), 64))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeRegions.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/icons/calculator-section-icon.svg");
const _imports_1 = publicAssetsURL("/icons/calculator-send-icon.svg");
const calculatorBudgetOptions = [
  "\u0414\u043E $50 000",
  "$50 000 \u2013 $100 000",
  "$100 000 \u2013 $250 000",
  "\u0411\u043E\u043B\u0435\u0435 $250 000"
];
const calculatorServiceOptions = services.map((service) => ({
  value: service.slug,
  label: service.title
}));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeCalculator",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      serviceType: "",
      area: "",
      budget: "",
      name: "",
      phone: ""
    });
    const onSubmit = () => {
    };
    const CalculatorField = defineComponent({
      name: "CalculatorField",
      props: {
        label: { type: String, required: true },
        required: { type: Boolean, default: false }
      },
      setup(props, { slots }) {
        return () => {
          var _a;
          return h("div", { class: "flex flex-col gap-2" }, [
            h(
              "label",
              {
                class: "text-left text-[16px] font-medium leading-6 text-[#364153]"
              },
              [
                props.label,
                props.required ? h("span", { class: "text-[#155DFC]" }, " *") : null
              ]
            ),
            (_a = slots.default) == null ? void 0 : _a.call(slots)
          ]);
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Reveal = _sfc_main$1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "calculator",
        class: "scroll-mt-header relative overflow-hidden py-16 md:py-20 lg:py-24",
        style: { "background": "linear-gradient(\n				135deg,\n				rgba(4, 25, 72, 1) 0%,\n				rgba(25, 60, 184, 1) 100%\n			)" }
      }, _attrs))} data-v-01e0b1b2><div class="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-white opacity-10 blur-[128px]" aria-hidden="true" data-v-01e0b1b2></div><div class="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white opacity-10 blur-[128px]" aria-hidden="true" data-v-01e0b1b2></div><div class="container-site relative z-[1] mx-auto max-w-[1024px]" data-v-01e0b1b2><div class="flex flex-col items-center text-center" data-v-01e0b1b2>`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "scale",
        delay: 0.05
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-16 w-16 items-center justify-center rounded-[16px] bg-white/10" data-v-01e0b1b2${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-8 w-8" data-v-01e0b1b2${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-16 w-16 items-center justify-center rounded-[16px] bg-white/10" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  class: "h-8 w-8"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-up",
        delay: 0.15
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="mt-6 text-[32px] font-bold leading-tight text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[48px]" data-v-01e0b1b2${_scopeId}> \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430 </h2>`);
          } else {
            return [
              createVNode("h2", { class: "mt-6 text-[32px] font-bold leading-tight text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[48px]" }, " \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-up",
        delay: 0.25
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mt-4 max-w-[672px] text-base leading-7 text-[#DBEAFE] sm:mt-6 sm:text-[20px] sm:leading-7" data-v-01e0b1b2${_scopeId}> \u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 24 \u0447\u0430\u0441\u043E\u0432 </p>`);
          } else {
            return [
              createVNode("p", { class: "mt-4 max-w-[672px] text-base leading-7 text-[#DBEAFE] sm:mt-6 sm:text-[20px] sm:leading-7" }, " \u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 24 \u0447\u0430\u0441\u043E\u0432 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-up",
        delay: 0.2,
        duration: 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="mt-10 rounded-[24px] bg-white px-5 pb-8 pt-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:mt-12 sm:px-10 sm:pb-10 sm:pt-10 lg:px-12 lg:pb-12 lg:pt-12" data-v-01e0b1b2${_scopeId}><div class="flex flex-col gap-6" data-v-01e0b1b2${_scopeId}><div class="grid grid-cols-1 gap-6 md:grid-cols-2" data-v-01e0b1b2${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CalculatorField), {
              label: "\u0422\u0438\u043F \u0443\u0441\u043B\u0443\u0433\u0438",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<select class="field-control appearance-none" required data-v-01e0b1b2${_scopeId2}><option disabled value="" data-v-01e0b1b2${ssrIncludeBooleanAttr(Array.isArray(unref(form).serviceType) ? ssrLooseContain(unref(form).serviceType, "") : ssrLooseEqual(unref(form).serviceType, "")) ? " selected" : ""}${_scopeId2}>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443</option><!--[-->`);
                  ssrRenderList(unref(calculatorServiceOptions), (option) => {
                    _push3(`<option${ssrRenderAttr("value", option.value)} data-v-01e0b1b2${ssrIncludeBooleanAttr(Array.isArray(unref(form).serviceType) ? ssrLooseContain(unref(form).serviceType, option.value) : ssrLooseEqual(unref(form).serviceType, option.value)) ? " selected" : ""}${_scopeId2}>${ssrInterpolate(option.label)}</option>`);
                  });
                  _push3(`<!--]--></select>`);
                } else {
                  return [
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).serviceType = $event,
                      class: "field-control appearance-none",
                      required: ""
                    }, [
                      createVNode("option", {
                        disabled: "",
                        value: ""
                      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443"),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(calculatorServiceOptions), (option) => {
                        return openBlock(), createBlock("option", {
                          key: option.value,
                          value: option.value
                        }, toDisplayString(option.label), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(form).serviceType]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(CalculatorField), {
              label: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C (\u043C\xB2)",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttr("value", unref(form).area)} type="number" min="1" class="field-control" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: 100" required data-v-01e0b1b2${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(form).area = $event,
                      type: "number",
                      min: "1",
                      class: "field-control",
                      placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: 100",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).area]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(CalculatorField), {
              label: "\u0411\u044E\u0434\u0436\u0435\u0442",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<select class="field-control appearance-none" required data-v-01e0b1b2${_scopeId2}><option disabled value="" data-v-01e0b1b2${ssrIncludeBooleanAttr(Array.isArray(unref(form).budget) ? ssrLooseContain(unref(form).budget, "") : ssrLooseEqual(unref(form).budget, "")) ? " selected" : ""}${_scopeId2}>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u044E\u0434\u0436\u0435\u0442</option><!--[-->`);
                  ssrRenderList(unref(calculatorBudgetOptions), (option) => {
                    _push3(`<option${ssrRenderAttr("value", option)} data-v-01e0b1b2${ssrIncludeBooleanAttr(Array.isArray(unref(form).budget) ? ssrLooseContain(unref(form).budget, option) : ssrLooseEqual(unref(form).budget, option)) ? " selected" : ""}${_scopeId2}>${ssrInterpolate(option)}</option>`);
                  });
                  _push3(`<!--]--></select>`);
                } else {
                  return [
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).budget = $event,
                      class: "field-control appearance-none",
                      required: ""
                    }, [
                      createVNode("option", {
                        disabled: "",
                        value: ""
                      }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u044E\u0434\u0436\u0435\u0442"),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(calculatorBudgetOptions), (option) => {
                        return openBlock(), createBlock("option", {
                          key: option,
                          value: option
                        }, toDisplayString(option), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(form).budget]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(CalculatorField), {
              label: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttr("value", unref(form).name)} type="text" class="field-control" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F" required data-v-01e0b1b2${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      type: "text",
                      class: "field-control",
                      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).name]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(CalculatorField), {
              label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttr("value", unref(form).phone)} type="tel" class="field-control" placeholder="+998 __ ___ __ __" required data-v-01e0b1b2${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                      type: "tel",
                      class: "field-control",
                      placeholder: "+998 __ ___ __ __",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).phone]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button type="submit" class="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#155DFC] to-[#1447E6] text-[16px] font-medium leading-6 text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]" data-v-01e0b1b2${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" class="h-5 w-5" data-v-01e0b1b2${_scopeId}><span data-v-01e0b1b2${_scopeId}>\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442</span></button><p class="text-center text-[14px] leading-5 text-[#4A5565]" data-v-01e0b1b2${_scopeId}> \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 </p></div></form>`);
          } else {
            return [
              createVNode("form", {
                class: "mt-10 rounded-[24px] bg-white px-5 pb-8 pt-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:mt-12 sm:px-10 sm:pb-10 sm:pt-10 lg:px-12 lg:pb-12 lg:pt-12",
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode("div", { class: "flex flex-col gap-6" }, [
                  createVNode("div", { class: "grid grid-cols-1 gap-6 md:grid-cols-2" }, [
                    createVNode(unref(CalculatorField), {
                      label: "\u0422\u0438\u043F \u0443\u0441\u043B\u0443\u0433\u0438",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).serviceType = $event,
                          class: "field-control appearance-none",
                          required: ""
                        }, [
                          createVNode("option", {
                            disabled: "",
                            value: ""
                          }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443"),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(calculatorServiceOptions), (option) => {
                            return openBlock(), createBlock("option", {
                              key: option.value,
                              value: option.value
                            }, toDisplayString(option.label), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).serviceType]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CalculatorField), {
                      label: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C (\u043C\xB2)",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).area = $event,
                          type: "number",
                          min: "1",
                          class: "field-control",
                          placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: 100",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).area]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CalculatorField), {
                      label: "\u0411\u044E\u0434\u0436\u0435\u0442",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).budget = $event,
                          class: "field-control appearance-none",
                          required: ""
                        }, [
                          createVNode("option", {
                            disabled: "",
                            value: ""
                          }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u044E\u0434\u0436\u0435\u0442"),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(calculatorBudgetOptions), (option) => {
                            return openBlock(), createBlock("option", {
                              key: option,
                              value: option
                            }, toDisplayString(option), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).budget]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CalculatorField), {
                      label: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          type: "text",
                          class: "field-control",
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).name]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(unref(CalculatorField), {
                    label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                        type: "tel",
                        class: "field-control",
                        placeholder: "+998 __ ___ __ __",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).phone]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("button", {
                    type: "submit",
                    class: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#155DFC] to-[#1447E6] text-[16px] font-medium leading-6 text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: "",
                      class: "h-5 w-5"
                    }),
                    createVNode("span", null, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442")
                  ]),
                  createVNode("p", { class: "text-center text-[14px] leading-5 text-[#4A5565]" }, " \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ")
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeCalculator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-01e0b1b2"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeHero = __nuxt_component_0;
  const _component_HomeAbout = _sfc_main$6;
  const _component_HomeServices = _sfc_main$5;
  const _component_HomeAdvantages = _sfc_main$4;
  const _component_HomeProjectsPreview = _sfc_main$3;
  const _component_HomeRegions = _sfc_main$2;
  const _component_HomeCalculator = __nuxt_component_6;
  const _component_HomeContacts = _sfc_main$8;
  const _component_SiteFooter = _sfc_main$9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeServices, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAdvantages, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeProjectsPreview, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeRegions, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeCalculator, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeContacts, null, null, _parent));
  _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-aDDMQSyi.mjs.map
