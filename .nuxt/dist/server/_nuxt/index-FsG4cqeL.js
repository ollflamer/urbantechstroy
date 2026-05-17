import { _ as _sfc_main$1, a as _sfc_main$2, s as staggerDelay, b as _sfc_main$5 } from "./SiteFooter-Ck7CxC6V.js";
import { g as getProjectsByCategory, a as projectCategories, _ as _sfc_main$3 } from "./projects-BREcmVYU.js";
import { _ as _sfc_main$4 } from "./HomeContacts-46jF-WHo.js";
import { defineComponent, ref, computed, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
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
    const activeCategory = ref("all");
    const filteredProjects = computed(
      () => getProjectsByCategory(activeCategory.value)
    );
    const filterButtonClass = (id) => {
      const base = "shrink-0 rounded-[14px] px-4 py-2.5 text-sm font-medium leading-6 transition sm:h-[50px] sm:px-5 sm:text-[16px]";
      if (activeCategory.value === id) {
        return `${base} bg-[#155DFC] text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]`;
      }
      return `${base} border border-[#E5E7EB] bg-white text-[#364153] hover:border-[#155DFC] hover:text-[#155DFC]`;
    };
    useSeoMeta({
      title: "Проекты — URBANTECHSTROY",
      description: "Портфолио реализованных проектов URBANTECHSTROY: жилые комплексы, коммерческие объекты, промышленное строительство и ремонт."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$1;
      const _component_Reveal = _sfc_main$2;
      const _component_ProjectCard = _sfc_main$3;
      const _component_HomeContacts = _sfc_main$4;
      const _component_SiteFooter = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
      _push(`<section class="bg-gradient-to-br from-[#F9FAFB] to-white pb-10 pt-[calc(81px+3rem)] sm:pb-12 sm:pt-[calc(81px+4rem)] lg:pb-16 lg:pt-[calc(81px+5rem)]"><div class="container-site text-center">`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "blur-up",
        immediate: "",
        delay: 0.1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="heading-page font-medium"${_scopeId}>Наши проекты</h1><p class="text-lead mx-auto mt-3 max-w-3xl sm:mt-4"${_scopeId}> Портфолио выполненных работ — жилые комплексы, коммерческие объекты и промышленное строительство </p>`);
          } else {
            return [
              createVNode("h1", { class: "heading-page font-medium" }, "Наши проекты"),
              createVNode("p", { class: "text-lead mx-auto mt-3 max-w-3xl sm:mt-4" }, " Портфолио выполненных работ — жилые комплексы, коммерческие объекты и промышленное строительство ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-up",
        immediate: "",
        delay: 0.25
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-12"${_scopeId}><!--[-->`);
            ssrRenderList(unref(projectCategories), (cat) => {
              _push2(`<button type="button" class="${ssrRenderClass(filterButtonClass(cat.id))}"${_scopeId}>${ssrInterpolate(cat.label)}</button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-12" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(projectCategories), (cat) => {
                  return openBlock(), createBlock("button", {
                    key: cat.id,
                    type: "button",
                    class: filterButtonClass(cat.id),
                    onClick: ($event) => activeCategory.value = cat.id
                  }, toDisplayString(cat.label), 11, ["onClick"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="bg-white pb-16 sm:pb-20 lg:pb-24"><div class="container-site"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(filteredProjects), (project, index) => {
        _push(ssrRenderComponent(_component_Reveal, {
          key: `${unref(activeCategory)}-${project.slug}`,
          variant: "scale",
          delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index, 0.07),
          once: false
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
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_HomeContacts, null, null, _parent));
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-FsG4cqeL.js.map
