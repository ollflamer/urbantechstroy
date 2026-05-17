import { _ as __nuxt_component_0 } from './nuxt-link-BpXDrWrg.mjs';
import { defineComponent, ref, watch, withCtx, createVNode, createTextVNode, toDisplayString, unref, computed, resolveDynamicComponent, mergeProps, renderSlot, shallowRef, watchEffect, toValue, hasInjectionContext, getCurrentInstance, inject, getCurrentScope, onScopeDispose, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useRoute } from './server.mjs';

const _imports_0$1 = publicAssetsURL("/brand/logo-784fe1.png");
const _imports_1 = publicAssetsURL("/brand/icon-phone-header.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  props: {
    entrance: { type: Boolean }
  },
  setup(__props) {
    const route = useRoute();
    const navItems = [
      { to: "/", label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" },
      { to: "/about", label: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" },
      { to: "/services", label: "\u0423\u0441\u043B\u0443\u0433\u0438" },
      { to: "/projects", label: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B" },
      { to: "/#calculator", label: "\u0420\u0430\u0441\u0447\u0435\u0442" },
      { to: "/#contacts", label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }
    ];
    const isMenuOpen = ref(false);
    const closeMenu = () => {
      isMenuOpen.value = false;
    };
    const isNavActive = (path) => {
      if (path === "/") return route.path === "/";
      if (path.startsWith("/about")) return route.path.startsWith("/about");
      if (path.startsWith("/services")) return route.path.startsWith("/services");
      if (path.startsWith("/projects")) return route.path.startsWith("/projects");
      if (path === "/#calculator") return route.hash === "#calculator";
      if (path === "/#contacts") return route.hash === "#contacts";
      return false;
    };
    const navLinkClass = (path) => {
      const base = "text-[16px] leading-6";
      return isNavActive(path) ? `${base} text-[#155DFC]` : `${base} text-[#364153]`;
    };
    const mobileNavLinkClass = (path) => {
      const base = "block rounded-[12px] px-4 py-3.5 text-[18px] font-medium leading-7 transition-colors";
      return isNavActive(path) ? `${base} bg-[#EFF6FF] text-[#155DFC]` : `${base} text-[#364153] hover:bg-[#F9FAFB]`;
    };
    watch(
      () => route.fullPath,
      () => closeMenu()
    );
    watch(isMenuOpen, (open) => {
      return;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<header class="${ssrRenderClass([{ "header-entrance": __props.entrance }, "site-header"])}"><div class="mx-auto flex h-[81px] w-full max-w-[1216px] items-center justify-between gap-3 px-4 lg:gap-4 lg:px-0">`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "flex h-12 shrink-0 items-center gap-3",
          onClick: closeMenu
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" class="h-12 w-[62px] object-contain"${_scopeId}><span class="hidden text-[18px] font-bold leading-7 tracking-[-0.025em] text-[#101828] min-[400px]:inline"${_scopeId}> URBANTECHSTROY </span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$1,
                  alt: "",
                  class: "h-12 w-[62px] object-contain"
                }),
                createVNode("span", { class: "hidden text-[18px] font-bold leading-7 tracking-[-0.025em] text-[#101828] min-[400px]:inline" }, " URBANTECHSTROY ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push2(`<nav class="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex xl:gap-8"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push2(ssrRenderComponent(_component_NuxtLink, {
            key: item.to,
            to: item.to,
            class: [navLinkClass(item.to), "shrink-0 whitespace-nowrap"]
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push2(`<!--]--></nav><div class="hidden shrink-0 items-center gap-4 xl:flex"><div class="flex flex-col items-end"><a href="tel:+998910023343" class="whitespace-nowrap text-[16px] font-medium leading-6 text-[#101828]"> +998 91 002 33 43 </a><a href="tel:+998999372027" class="whitespace-nowrap text-[14px] leading-5 text-[#4A5565]"> +998 99 937 20 27 </a></div><a href="tel:+998910023343" class="flex h-10 w-10 shrink-0 items-center justify-center" aria-label="\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"><img${ssrRenderAttr("src", _imports_1)} alt="" class="h-5 w-5"></a></div><button type="button" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] text-[#101828] transition-colors hover:bg-[#F3F4F6] xl:hidden"${ssrRenderAttr("aria-expanded", unref(isMenuOpen))} aria-controls="mobile-nav"${ssrRenderAttr("aria-label", unref(isMenuOpen) ? "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E" : "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")}>`);
        if (!unref(isMenuOpen)) {
          _push2(`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>`);
        } else {
          _push2(`<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>`);
        }
        _push2(`</button></div>`);
        ssrRenderTeleport(_push2, (_push3) => {
          if (unref(isMenuOpen)) {
            _push3(`<div class="fixed inset-0 top-[81px] z-[200] xl:hidden" aria-hidden="true"><div class="absolute inset-0 bg-black/40"></div></div>`);
          } else {
            _push3(`<!---->`);
          }
          if (unref(isMenuOpen)) {
            _push3(`<nav id="mobile-nav" class="fixed right-0 top-[81px] z-[210] flex h-[calc(100dvh-81px)] w-full max-w-[320px] flex-col bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.12)] xl:hidden" aria-label="\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E"><div class="flex flex-1 flex-col overflow-y-auto px-4 py-6"><!--[-->`);
            ssrRenderList(navItems, (item) => {
              _push3(ssrRenderComponent(_component_NuxtLink, {
                key: item.to,
                to: item.to,
                class: mobileNavLinkClass(item.to),
                onClick: closeMenu
              }, {
                default: withCtx((_, _push4, _parent2, _scopeId) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate(item.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push3(`<!--]--></div><div class="shrink-0 border-t border-[#E5E7EB] p-4"><a href="tel:+998910023343" class="flex h-[56px] w-full items-center justify-center gap-3 rounded-[14px] bg-gradient-to-r from-[#155DFC] to-[#1447E6] text-[16px] font-medium text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"><img${ssrRenderAttr("src", _imports_1)} alt="" class="h-5 w-5 brightness-0 invert"><span>+998 91 002 33 43</span></a><a href="tel:+998999372027" class="mt-3 flex h-12 w-full items-center justify-center rounded-[14px] border border-[#E5E7EB] text-[15px] font-medium text-[#364153]"> +998 99 937 20 27 </a></div></nav>`);
          } else {
            _push3(`<!---->`);
          }
        }, "body", false, _parent);
        _push2(`</header>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/site/SiteHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = /* @__NO_SIDE_EFFECTS__ */ (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance == null && !hasInjectionContext())
    throw new Error("injectLocal must be called in setup");
  if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject(...args);
};
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
// @__NO_SIDE_EFFECTS__
function useMounted() {
  const isMounted = shallowRef(false);
  getCurrentInstance();
  return isMounted;
}
// @__NO_SIDE_EFFECTS__
function useSupported(callback) {
  const isMounted = /* @__PURE__ */ useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
const ssrWidthSymbol = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? /* @__PURE__ */ injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
// @__NO_SIDE_EFFECTS__
function usePreferredReducedMotion(options) {
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)", options);
  return computed(() => {
    if (isReduced.value)
      return "reduce";
    return "no-preference";
  });
}
function staggerDelay(index, step = 0.09, base = 0) {
  return base + index * step;
}
function useReveal(target, options = {}) {
  const ready = ref(false);
  const isVisible = ref(false);
  const prefersReducedMotion = /* @__PURE__ */ usePreferredReducedMotion();
  return { isVisible, ready, prefersReducedMotion };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Reveal",
  __ssrInlineRender: true,
  props: {
    as: { default: "div" },
    variant: { default: "fade-up" },
    delay: { default: 0 },
    duration: { default: 0.85 },
    once: { type: Boolean, default: true },
    immediate: { type: Boolean, default: false },
    threshold: { default: 0.12 }
  },
  setup(__props) {
    const props = __props;
    const rootRef = ref(null);
    const { isVisible, ready } = useReveal(rootRef, {
      once: props.once,
      immediate: props.immediate,
      threshold: props.threshold
    });
    const revealStyle = computed(() => ({
      "--reveal-delay": `${props.delay}s`,
      "--reveal-duration": `${props.duration}s`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        ref_key: "rootRef",
        ref: rootRef
      }, _ctx.$attrs, {
        class: [
          unref(ready) && "reveal",
          unref(ready) && `reveal--${__props.variant}`,
          { "reveal--visible": !unref(ready) || unref(isVisible) }
        ],
        style: unref(revealStyle)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Reveal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/icons/footer-social-icons.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#041948] px-4 sm:px-6 lg:px-8" }, _attrs))}><div class="container-site !px-0"><div class="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-16 lg:py-[39px]"><div class="sm:col-span-2 lg:col-span-1 lg:max-w-[584px]"><div class="text-lg font-bold leading-7 tracking-[-0.025em] text-white sm:text-xl"> URBANTECHSTROY </div><p class="mt-3 text-sm leading-relaxed text-[#99A1AF] sm:mt-4 sm:text-base sm:leading-[26px]"> \u041C\u043E\u043B\u043E\u0434\u0430\u044F, \u0431\u044B\u0441\u0442\u0440\u043E\u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C. \u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0443. </p><div class="mt-4 flex items-center gap-4 sm:mt-6"><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-9 w-auto sm:h-10"></div></div><div><div class="text-base font-bold leading-7 text-white sm:text-lg"> \u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F </div><nav class="mt-3 flex flex-col gap-2 text-sm leading-6 text-[#99A1AF] sm:mt-4 sm:gap-3 sm:text-base">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0413\u043B\u0430\u0432\u043D\u0430\u044F`);
          } else {
            return [
              createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438`);
          } else {
            return [
              createTextVNode("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0423\u0441\u043B\u0443\u0433\u0438`);
          } else {
            return [
              createTextVNode("\u0423\u0441\u043B\u0443\u0433\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0440\u043E\u0435\u043A\u0442\u044B`);
          } else {
            return [
              createTextVNode("\u041F\u0440\u043E\u0435\u043A\u0442\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#calculator",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div><div class="text-base font-bold leading-7 text-white sm:text-lg"> \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B </div><div class="mt-3 flex flex-col gap-2 text-sm leading-6 text-[#99A1AF] sm:mt-4 sm:gap-3 sm:text-base"><a href="tel:+998910023343" class="hover:text-white">+998 91 002 33 43</a><a href="tel:+998999372027" class="hover:text-white">+998 99 937 20 27</a><a href="#" class="hover:text-white">@urbantechstroy</a><div class="text-xs leading-relaxed sm:text-sm sm:leading-[22.75px]"> Tashkent, Muhammad Yusuf street 45A </div></div></div></div><div class="border-t border-[#1E2939] py-6 lg:pt-[33px]"><div class="flex flex-col gap-3 text-center text-xs leading-5 text-[#99A1AF] sm:flex-row sm:justify-between sm:text-left sm:text-sm"><div>\xA9 ${ssrInterpolate(unref(year))} URBANTECHSTROY. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.</div><div>\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438 \u0440\u0435\u043C\u043E\u043D\u0442 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0443</div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/site/SiteFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a, _sfc_main$2 as b, staggerDelay as s };
//# sourceMappingURL=SiteFooter-Ck7CxC6V.mjs.map
