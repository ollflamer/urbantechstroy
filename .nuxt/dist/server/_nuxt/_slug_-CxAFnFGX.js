import { _ as _sfc_main$1, b as _sfc_main$4 } from "./SiteFooter-Ck7CxC6V.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BpXDrWrg.js";
import { b as getProjectBySlug, p as projects, _ as _sfc_main$2 } from "./projects-BREcmVYU.js";
import { _ as _sfc_main$3 } from "./HomeContacts-46jF-WHo.js";
import { defineComponent, computed, unref, withCtx, createVNode, createTextVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
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
    const project = computed(() => getProjectBySlug(slug.value));
    const relatedProjects = computed(
      () => projects.filter(
        (p) => p.slug !== slug.value && p.category === project.value?.category
      ).slice(0, 3)
    );
    useSeoMeta({
      title: () => project.value ? `${project.value.title} — URBANTECHSTROY` : "Проект не найден",
      description: () => project.value?.shortDescription ?? ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ProjectCard = _sfc_main$2;
      const _component_HomeContacts = _sfc_main$3;
      const _component_SiteFooter = _sfc_main$4;
      if (unref(project)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
        _push(`<section class="relative flex min-h-[300px] w-full items-end overflow-hidden sm:min-h-[380px] lg:h-[480px] lg:items-stretch"><img${ssrRenderAttr("src", unref(project).heroImage ?? unref(project).image)}${ssrRenderAttr("alt", unref(project).title)} class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 bg-black/50"></div><div class="container-site relative z-10 w-full pb-8 pt-[calc(81px+3rem)] sm:pb-10 sm:pt-[calc(81px+4rem)] lg:pb-0 lg:pt-[calc(81px+5rem)]">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects",
          class: "inline-flex items-center gap-2 text-sm leading-6 text-white/90 hover:text-white sm:text-base"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span aria-hidden="true"${_scopeId}>←</span> Вернуться к проектам `);
            } else {
              return [
                createVNode("span", { "aria-hidden": "true" }, "←"),
                createTextVNode(" Вернуться к проектам ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="mt-4 text-xs leading-5 text-[#51A2FF] sm:mt-6 sm:text-sm">${ssrInterpolate(unref(project).categoryLabel)}</p><h1 class="mt-1 max-w-[900px] text-2xl font-bold leading-tight text-white sm:mt-2 sm:text-4xl sm:leading-[44px] lg:text-[48px] lg:leading-[58px]">${ssrInterpolate(unref(project).title)}</h1><p class="mt-3 max-w-[720px] text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">${ssrInterpolate(unref(project).shortDescription)}</p></div></section>`);
        if (unref(project).location || unref(project).area || unref(project).duration || unref(project).year) {
          _push(`<section class="section-y-sm bg-[#F9FAFB]"><div class="container-site grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">`);
          if (unref(project).location) {
            _push(`<div class="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px] sm:p-6"><p class="text-xs leading-5 text-[#4A5565] sm:text-sm">Локация</p><p class="mt-1 text-base font-semibold leading-7 text-[#101828] sm:mt-2 sm:text-lg">${ssrInterpolate(unref(project).location)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(project).area) {
            _push(`<div class="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px] sm:p-6"><p class="text-xs leading-5 text-[#4A5565] sm:text-sm">Площадь</p><p class="mt-1 text-base font-semibold leading-7 text-[#101828] sm:mt-2 sm:text-lg">${ssrInterpolate(unref(project).area)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(project).duration) {
            _push(`<div class="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px] sm:p-6"><p class="text-xs leading-5 text-[#4A5565] sm:text-sm"> Срок выполнения </p><p class="mt-1 text-base font-semibold leading-7 text-[#101828] sm:mt-2 sm:text-lg">${ssrInterpolate(unref(project).duration)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(project).year) {
            _push(`<div class="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:rounded-[16px] sm:p-6"><p class="text-xs leading-5 text-[#4A5565] sm:text-sm"> Год завершения </p><p class="mt-1 text-base font-semibold leading-7 text-[#101828] sm:mt-2 sm:text-lg">${ssrInterpolate(unref(project).year)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(project).description) {
          _push(`<section class="section-y-sm bg-white lg:py-20"><div class="container-site"><div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"><div><h2 class="heading-subsection">О проекте</h2><p class="mt-4 text-sm leading-relaxed text-[#364153] sm:mt-6 sm:text-base sm:leading-[26px]">${ssrInterpolate(unref(project).description)}</p>`);
          if (unref(project).features?.length) {
            _push(`<h3 class="mt-8 text-xl font-bold leading-8 text-[#101828] sm:mt-10 sm:text-2xl"> Особенности проекта </h3>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(project).features?.length) {
            _push(`<ul class="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4"><!--[-->`);
            ssrRenderList(unref(project).features, (feature, index) => {
              _push(`<li class="flex items-start gap-3 text-sm leading-6 text-[#364153] sm:text-base"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#155DFC] text-xs text-white"> ✓ </span> ${ssrInterpolate(feature)}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (unref(project).gallery?.length) {
            _push(`<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"><!--[-->`);
            ssrRenderList(unref(project).gallery, (src, index) => {
              _push(`<div class="${ssrRenderClass([index === 0 ? "sm:col-span-2" : "", "overflow-hidden rounded-[12px] sm:rounded-[16px]"])}"><img${ssrRenderAttr("src", src)} alt="" class="h-[180px] w-full object-cover sm:h-[220px] lg:h-[240px]"></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(relatedProjects).length) {
          _push(`<section class="section-y-sm bg-[#F9FAFB] lg:py-20"><div class="container-site"><h2 class="heading-subsection">Похожие проекты</h2><div class="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8 lg:mt-10 xl:grid-cols-3"><!--[-->`);
          ssrRenderList(unref(relatedProjects), (item) => {
            _push(ssrRenderComponent(_component_ProjectCard, {
              key: item.slug,
              project: item
            }, null, _parent));
          });
          _push(`<!--]--></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_HomeContacts, null, null, _parent));
        _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[60vh] bg-white pt-[calc(81px+3rem)] sm:pt-[calc(81px+5rem)]" }, _attrs))}><div class="container-site text-center"><h1 class="heading-subsection">Проект не найден</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects",
          class: "mt-6 inline-flex text-sm font-medium text-[#155DFC] sm:text-base"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ← Вернуться к проектам `);
            } else {
              return [
                createTextVNode(" ← Вернуться к проектам ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-CxAFnFGX.js.map
