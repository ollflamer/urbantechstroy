import { b as _sfc_main$2, a as _sfc_main$1, s as staggerDelay, _ as _sfc_main$5 } from './SiteFooter-Ck7CxC6V.mjs';
import { g as getProjectsByCategory, a as projectCategories, _ as _sfc_main$3 } from './projects-BREcmVYU.mjs';
import { _ as _sfc_main$4 } from './HomeContacts-46jF-WHo.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
      title: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B \u2014 URBANTECHSTROY",
      description: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 URBANTECHSTROY: \u0436\u0438\u043B\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B, \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438 \u0440\u0435\u043C\u043E\u043D\u0442."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$2;
      const _component_Reveal = _sfc_main$1;
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
            _push2(`<h1 class="heading-page font-medium"${_scopeId}>\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</h1><p class="text-lead mx-auto mt-3 max-w-3xl sm:mt-4"${_scopeId}> \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u2014 \u0436\u0438\u043B\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B, \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E </p>`);
          } else {
            return [
              createVNode("h1", { class: "heading-page font-medium" }, "\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),
              createVNode("p", { class: "text-lead mx-auto mt-3 max-w-3xl sm:mt-4" }, " \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u2014 \u0436\u0438\u043B\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B, \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E ")
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

export { _sfc_main as default };
//# sourceMappingURL=index-FsG4cqeL.mjs.map
