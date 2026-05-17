import { _ as __nuxt_component_0 } from './nuxt-link-BpXDrWrg.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/projects/${__props.project.slug}`,
        class: "card-interactive group relative block aspect-square overflow-hidden rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", __props.project.image)}${ssrRenderAttr("alt", __props.project.title)} class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"${_scopeId}></div><div class="absolute inset-x-0 bottom-0 p-4 sm:p-6"${_scopeId}><p class="text-xs leading-5 text-[#51A2FF] sm:text-sm"${_scopeId}>${ssrInterpolate(__props.project.categoryLabel)}</p><h3 class="mt-1.5 text-base font-bold leading-snug text-white sm:mt-2 sm:text-lg lg:text-xl lg:leading-7"${_scopeId}>${ssrInterpolate(__props.project.title)}</h3><p class="mt-2 text-[14px] leading-5 text-white/80"${_scopeId}>${ssrInterpolate(__props.project.shortDescription)}</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: __props.project.image,
                alt: __props.project.title,
                class: "absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              }, null, 8, ["src", "alt"]),
              createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" }),
              createVNode("div", { class: "absolute inset-x-0 bottom-0 p-4 sm:p-6" }, [
                createVNode("p", { class: "text-xs leading-5 text-[#51A2FF] sm:text-sm" }, toDisplayString(__props.project.categoryLabel), 1),
                createVNode("h3", { class: "mt-1.5 text-base font-bold leading-snug text-white sm:mt-2 sm:text-lg lg:text-xl lg:leading-7" }, toDisplayString(__props.project.title), 1),
                createVNode("p", { class: "mt-2 text-[14px] leading-5 text-white/80" }, toDisplayString(__props.project.shortDescription), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projects/ProjectCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectCategories = [
  { id: "all", label: "\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B" },
  { id: "residential", label: "\u0416\u0438\u043B\u043E\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E" },
  { id: "commercial", label: "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0430\u044F \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C" },
  { id: "industrial", label: "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E" },
  { id: "repair", label: "\u0420\u0435\u043C\u043E\u043D\u0442" },
  { id: "metal", label: "\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438" },
  { id: "landscaping", label: "\u0411\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E" }
];
const projects = [
  {
    slug: "zhiloj-kompleks-riverside",
    category: "residential",
    categoryLabel: "\u0416\u0438\u043B\u043E\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    title: '\u0416\u0438\u043B\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 "Riverside"',
    shortDescription: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0436\u0438\u043B\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043B\u0430\u0441\u0441\u0430 \u043D\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u0440\u0435\u043A\u0438",
    image: "/images/projects/project-riverside.png",
    heroImage: "/images/projects/project-riverside.png",
    location: "\u0422\u0430\u0448\u043A\u0435\u043D\u0442, \u0440\u0430\u0439\u043E\u043D \u0423\u0447\u0442\u0435\u043F\u0430",
    area: "45,000 \u043C\xB2",
    duration: "24 \u043C\u0435\u0441\u044F\u0446\u0430",
    year: "2024",
    description: '\u0416\u0438\u043B\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 "Riverside" \u2014 \u044D\u0442\u043E \u0432\u043E\u043F\u043B\u043E\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F. \u041F\u0440\u043E\u0435\u043A\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0442\u0440\u0438 12-\u044D\u0442\u0430\u0436\u043D\u044B\u0445 \u0437\u0434\u0430\u043D\u0438\u044F \u0441 \u0440\u0430\u0437\u0432\u0438\u0442\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0439, \u043F\u043E\u0434\u0437\u0435\u043C\u043D\u044B\u043C \u043F\u0430\u0440\u043A\u0438\u043D\u0433\u043E\u043C \u0438 \u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0435\u0439. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.',
    features: [
      "\u042D\u043D\u0435\u0440\u0433\u043E\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0444\u0430\u0441\u0430\u0434\u044B",
      "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043C\u043D\u044B\u0439 \u0434\u043E\u043C",
      "\u041F\u043E\u0434\u0437\u0435\u043C\u043D\u044B\u0439 \u043F\u0430\u0440\u043A\u0438\u043D\u0433 \u043D\u0430 200 \u043C\u0435\u0441\u0442",
      "\u0414\u0435\u0442\u0441\u043A\u0438\u0435 \u0438 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438",
      "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u0442\u0435\u043B\u044C\u043D\u0430\u044F",
      "\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0438 \u043E\u0445\u0440\u0430\u043D\u0430 24/7"
    ],
    gallery: [
      "/images/projects/project-riverside.png",
      "/images/projects/project-apartment-renovation.png",
      "/images/projects/project-landscaping.png"
    ]
  },
  {
    slug: "kapitalnyj-remont-ofisa",
    category: "commercial",
    categoryLabel: "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0430\u044F \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C",
    title: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 \u043E\u0444\u0438\u0441\u043D\u043E\u0433\u043E \u0437\u0434\u0430\u043D\u0438\u044F",
    shortDescription: "\u041F\u043E\u043B\u043D\u0430\u044F \u0440\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043E\u0444\u0438\u0441\u043D\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0430 \u043A\u043B\u0430\u0441\u0441\u0430 \u0410",
    image: "/images/projects/project-office-repair.png"
  },
  {
    slug: "proizvodstvennyj-ceh",
    category: "industrial",
    categoryLabel: "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
    title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0446\u0435\u0445\u0430",
    shortDescription: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u043A\u043E\u0440\u043F\u0443\u0441\u043E\u043C",
    image: "/images/projects/project-production-hall.png"
  },
  {
    slug: "remont-kvartir-premium",
    category: "repair",
    categoryLabel: "\u0420\u0435\u043C\u043E\u043D\u0442",
    title: "\u0420\u0435\u043C\u043E\u043D\u0442 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043B\u0430\u0441\u0441\u0430",
    shortDescription: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0432 \u044D\u043B\u0438\u0442\u043D\u043E\u043C \u0416\u041A",
    image: "/images/projects/project-apartment-renovation.png"
  },
  {
    slug: "montazh-metallokonstrukcij-angara",
    category: "metal",
    categoryLabel: "\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438",
    title: "\u041C\u043E\u043D\u0442\u0430\u0436 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439 \u0430\u043D\u0433\u0430\u0440\u0430",
    shortDescription: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u0438\u0437 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439",
    image: "/images/projects/project-metal-warehouse.png"
  },
  {
    slug: "blagoustrojstvo-territorii",
    category: "landscaping",
    categoryLabel: "\u0411\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E",
    title: "\u0411\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438",
    shortDescription: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0435 \u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0436\u0438\u043B\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430",
    image: "/images/projects/project-landscaping.png"
  }
];
const getProjectBySlug = (slug) => {
  var _a;
  return (_a = projects.find((p) => p.slug === slug)) != null ? _a : null;
};
const getProjectsByCategory = (category) => category === "all" ? projects : projects.filter((p) => p.category === category);

export { _sfc_main as _, projectCategories as a, getProjectBySlug as b, getProjectsByCategory as g, projects as p };
//# sourceMappingURL=projects-BREcmVYU.mjs.map
