import { _ as __nuxt_component_0 } from "./nuxt-link-BpXDrWrg.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  { id: "all", label: "Все проекты" },
  { id: "residential", label: "Жилое строительство" },
  { id: "commercial", label: "Коммерческая недвижимость" },
  { id: "industrial", label: "Промышленное строительство" },
  { id: "repair", label: "Ремонт" },
  { id: "metal", label: "Металлоконструкции" },
  { id: "landscaping", label: "Благоустройство" }
];
const projects = [
  {
    slug: "zhiloj-kompleks-riverside",
    category: "residential",
    categoryLabel: "Жилое строительство",
    title: 'Жилой комплекс "Riverside"',
    shortDescription: "Современный жилой комплекс премиум-класса на берегу реки",
    image: "/images/projects/project-riverside.png",
    heroImage: "/images/projects/project-riverside.png",
    location: "Ташкент, район Учтепа",
    area: "45,000 м²",
    duration: "24 месяца",
    year: "2024",
    description: 'Жилой комплекс "Riverside" — это воплощение современного комфортного проживания. Проект включает в себя три 12-этажных здания с развитой инфраструктурой, подземным паркингом и благоустроенной территорией. Использованы передовые технологии строительства и высококачественные материалы.',
    features: [
      "Энергоэффективные фасады",
      "Система умный дом",
      "Подземный паркинг на 200 мест",
      "Детские и спортивные площадки",
      "Собственная котельная",
      "Видеонаблюдение и охрана 24/7"
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
    categoryLabel: "Коммерческая недвижимость",
    title: "Капитальный ремонт офисного здания",
    shortDescription: "Полная реконструкция офисного центра класса А",
    image: "/images/projects/project-office-repair.png"
  },
  {
    slug: "proizvodstvennyj-ceh",
    category: "industrial",
    categoryLabel: "Промышленное строительство",
    title: "Строительство производственного цеха",
    shortDescription: "Современный производственный комплекс с административным корпусом",
    image: "/images/projects/project-production-hall.png"
  },
  {
    slug: "remont-kvartir-premium",
    category: "repair",
    categoryLabel: "Ремонт",
    title: "Ремонт квартир премиум-класса",
    shortDescription: "Дизайнерский ремонт квартир в элитном ЖК",
    image: "/images/projects/project-apartment-renovation.png"
  },
  {
    slug: "montazh-metallokonstrukcij-angara",
    category: "metal",
    categoryLabel: "Металлоконструкции",
    title: "Монтаж металлоконструкций ангара",
    shortDescription: "Строительство складского комплекса из металлоконструкций",
    image: "/images/projects/project-metal-warehouse.png"
  },
  {
    slug: "blagoustrojstvo-territorii",
    category: "landscaping",
    categoryLabel: "Благоустройство",
    title: "Благоустройство территории",
    shortDescription: "Комплексное благоустройство жилого комплекса",
    image: "/images/projects/project-landscaping.png"
  }
];
const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug) ?? null;
const getProjectsByCategory = (category) => category === "all" ? projects : projects.filter((p) => p.category === category);
export {
  _sfc_main as _,
  projectCategories as a,
  getProjectBySlug as b,
  getProjectsByCategory as g,
  projects as p
};
//# sourceMappingURL=projects-BREcmVYU.js.map
