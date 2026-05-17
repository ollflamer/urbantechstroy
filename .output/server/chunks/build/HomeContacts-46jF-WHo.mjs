import { a as _sfc_main$1$1, s as staggerDelay } from './SiteFooter-Ck7CxC6V.mjs';
import { a as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, h, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const officeAddress = {
  display: "Tashkent, Muhammad Yusuf street 45A",
  /** Для геокодера Яндекс.Карт */
  mapQuery: "\u0422\u0430\u0448\u043A\u0435\u043D\u0442, \u0443\u043B\u0438\u0446\u0430 \u041C\u0443\u0445\u0430\u043C\u043C\u0430\u0434\u0430 \u042E\u0441\u0443\u0444\u0430, 45\u0410",
  lat: 41.298886,
  lon: 69.252029,
  zoom: 17
};
const yandexMapsRouteUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(officeAddress.mapQuery)}`;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "YandexMap",
  __ssrInlineRender: true,
  setup(__props) {
    const widgetUrl = computed(() => {
      const params = new URLSearchParams({
        ll: `${officeAddress.lon},${officeAddress.lat}`,
        z: String(officeAddress.zoom),
        pt: `${officeAddress.lon},${officeAddress.lat},pm2rdm`,
        text: officeAddress.mapQuery,
        l: "map",
        lang: "ru_RU"
      });
      return `https://yandex.ru/map-widget/v1/?${params.toString()}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-full min-h-[272px] w-full flex-1 overflow-hidden rounded-[15px] bg-[#E5E7EB] lg:min-h-0" }, _attrs))}><iframe${ssrRenderAttr("src", unref(widgetUrl))} class="absolute inset-0 h-full w-full border-0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"${ssrRenderAttr("title", `\u041A\u0430\u0440\u0442\u0430: ${unref(officeAddress).display}`)}></iframe><a${ssrRenderAttr("href", unref(yandexMapsRouteUrl))} target="_blank" rel="noopener noreferrer" class="absolute bottom-3 right-3 z-10 rounded-[10px] bg-white px-3 py-2 text-xs font-medium text-[#155DFC] shadow-md transition hover:bg-[#EFF6FF] sm:bottom-4 sm:right-4 sm:px-4 sm:text-sm"> \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u0430\u0445 </a></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/site/YandexMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeContacts",
  __ssrInlineRender: true,
  setup(__props) {
    const contactCards = [
      { type: "phones", title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B", iconSrc: "/icons/contact-phone.svg" },
      {
        type: "address",
        title: "\u0410\u0434\u0440\u0435\u0441",
        iconSrc: "/icons/contact-address.svg"
      },
      {
        type: "telegram",
        title: "Telegram",
        iconSrc: "/icons/contact-telegram.svg"
      },
      {
        type: "payment",
        title: "\u041E\u043F\u043B\u0430\u0442\u0430",
        iconSrc: "/icons/contact-payment.svg"
      }
    ];
    const ContactCard = defineComponent({
      name: "ContactCard",
      props: {
        title: { type: String, required: true },
        iconSrc: { type: String, required: true }
      },
      setup(props, { slots }) {
        return () => {
          var _a;
          return h(
            "div",
            {
              class: "card-interactive rounded-[16px] border border-[#F3F4F6] bg-white px-5 pb-6 pt-5 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] sm:px-[33px] sm:pb-8 sm:pt-[33px]"
            },
            [
              h("div", { class: "flex items-start gap-3 sm:gap-4" }, [
                h(
                  "div",
                  {
                    class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#DBEAFE] p-2 sm:h-12 sm:w-12 sm:px-3"
                  },
                  [
                    h("img", {
                      src: props.iconSrc,
                      alt: "",
                      class: "h-5 w-5 sm:h-6 sm:w-6"
                    })
                  ]
                ),
                h("div", { class: "min-w-0 pt-0.5 sm:pt-1" }, [
                  h(
                    "h3",
                    {
                      class: "text-base font-bold leading-7 text-[#101828] sm:text-lg"
                    },
                    props.title
                  ),
                  h("div", { class: "mt-2 sm:mt-3" }, (_a = slots.default) == null ? void 0 : _a.call(slots))
                ])
              ])
            ]
          );
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Reveal = _sfc_main$1$1;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_YandexMap = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contacts",
        class: "section-y scroll-mt-header bg-[#F9FAFB]"
      }, _attrs))}><div class="container-site">`);
      _push(ssrRenderComponent(_component_Reveal, { variant: "fade-up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h2 class="heading-section"${_scopeId}>\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438</h2><p class="text-lead mx-auto mt-3 max-w-2xl sm:mt-4"${_scopeId}> \u0413\u043E\u0442\u043E\u0432\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442 </p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("h2", { class: "heading-section" }, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438"),
                createVNode("p", { class: "text-lead mx-auto mt-3 max-w-2xl sm:mt-4" }, " \u0413\u043E\u0442\u043E\u0432\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-10 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-8"><div class="flex flex-col gap-4 sm:gap-6 lg:gap-8"><!--[-->`);
      ssrRenderList(contactCards, (card, index) => {
        _push(ssrRenderComponent(_component_Reveal, {
          key: card.title,
          variant: "fade-right",
          delay: ("staggerDelay" in _ctx ? _ctx.staggerDelay : unref(staggerDelay))(index, 0.1)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ContactCard), {
                title: card.title,
                "icon-src": card.iconSrc
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (card.type === "phones") {
                      _push3(`<!--[--><a href="tel:+998910023343" class="block text-base leading-7 text-[#364153] sm:text-lg"${_scopeId2}> +998 91 002 33 43 </a><a href="tel:+998999372027" class="mt-1 block text-base leading-7 text-[#364153] sm:mt-2 sm:text-lg"${_scopeId2}> +998 99 937 20 27 </a><!--]-->`);
                    } else if (card.type === "address") {
                      _push3(`<a${ssrRenderAttr("href", unref(yandexMapsRouteUrl))} target="_blank" rel="noopener noreferrer" class="text-sm leading-6 text-[#364153] underline-offset-2 transition hover:text-[#155DFC] hover:underline sm:text-base"${_scopeId2}>${ssrInterpolate(unref(officeAddress).display)}</a>`);
                    } else if (card.type === "telegram") {
                      _push3(`<a href="#" class="text-base leading-7 text-[#155DFC] sm:text-lg"${_scopeId2}> @urbantechstroy </a>`);
                    } else {
                      _push3(`<!--[--><p class="text-sm leading-6 text-[#364153] sm:text-base"${_scopeId2}> \u041B\u044E\u0431\u044B\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C </p><p class="mt-1 text-xs leading-5 text-[#6A7282] sm:mt-2 sm:text-sm"${_scopeId2}> \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435, \u043A\u0430\u0440\u0442\u044B, \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434, \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 </p><!--]-->`);
                    }
                  } else {
                    return [
                      card.type === "phones" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("a", {
                          href: "tel:+998910023343",
                          class: "block text-base leading-7 text-[#364153] sm:text-lg"
                        }, " +998 91 002 33 43 "),
                        createVNode("a", {
                          href: "tel:+998999372027",
                          class: "mt-1 block text-base leading-7 text-[#364153] sm:mt-2 sm:text-lg"
                        }, " +998 99 937 20 27 ")
                      ], 64)) : card.type === "address" ? (openBlock(), createBlock("a", {
                        key: 1,
                        href: unref(yandexMapsRouteUrl),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "text-sm leading-6 text-[#364153] underline-offset-2 transition hover:text-[#155DFC] hover:underline sm:text-base"
                      }, toDisplayString(unref(officeAddress).display), 9, ["href"])) : card.type === "telegram" ? (openBlock(), createBlock("a", {
                        key: 2,
                        href: "#",
                        class: "text-base leading-7 text-[#155DFC] sm:text-lg"
                      }, " @urbantechstroy ")) : (openBlock(), createBlock(Fragment, { key: 3 }, [
                        createVNode("p", { class: "text-sm leading-6 text-[#364153] sm:text-base" }, " \u041B\u044E\u0431\u044B\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C "),
                        createVNode("p", { class: "mt-1 text-xs leading-5 text-[#6A7282] sm:mt-2 sm:text-sm" }, " \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435, \u043A\u0430\u0440\u0442\u044B, \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434, \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 ")
                      ], 64))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ContactCard), {
                  title: card.title,
                  "icon-src": card.iconSrc
                }, {
                  default: withCtx(() => [
                    card.type === "phones" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("a", {
                        href: "tel:+998910023343",
                        class: "block text-base leading-7 text-[#364153] sm:text-lg"
                      }, " +998 91 002 33 43 "),
                      createVNode("a", {
                        href: "tel:+998999372027",
                        class: "mt-1 block text-base leading-7 text-[#364153] sm:mt-2 sm:text-lg"
                      }, " +998 99 937 20 27 ")
                    ], 64)) : card.type === "address" ? (openBlock(), createBlock("a", {
                      key: 1,
                      href: unref(yandexMapsRouteUrl),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "text-sm leading-6 text-[#364153] underline-offset-2 transition hover:text-[#155DFC] hover:underline sm:text-base"
                    }, toDisplayString(unref(officeAddress).display), 9, ["href"])) : card.type === "telegram" ? (openBlock(), createBlock("a", {
                      key: 2,
                      href: "#",
                      class: "text-base leading-7 text-[#155DFC] sm:text-lg"
                    }, " @urbantechstroy ")) : (openBlock(), createBlock(Fragment, { key: 3 }, [
                      createVNode("p", { class: "text-sm leading-6 text-[#364153] sm:text-base" }, " \u041B\u044E\u0431\u044B\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C "),
                      createVNode("p", { class: "mt-1 text-xs leading-5 text-[#6A7282] sm:mt-2 sm:text-sm" }, " \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435, \u043A\u0430\u0440\u0442\u044B, \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434, \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 ")
                    ], 64))
                  ]),
                  _: 2
                }, 1032, ["title", "icon-src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Reveal, {
        variant: "fade-left",
        delay: 0.15,
        class: "flex min-h-[280px] w-full lg:min-h-0 lg:h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white p-1 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] lg:min-h-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex h-full min-h-[272px] flex-1 items-center justify-center rounded-[15px] bg-[#E5E7EB] lg:min-h-0"${_scopeId2}><p class="text-sm text-[#4A5565]"${_scopeId2}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0440\u0442\u044B\u2026</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex h-full min-h-[272px] flex-1 items-center justify-center rounded-[15px] bg-[#E5E7EB] lg:min-h-0" }, [
                      createVNode("p", { class: "text-sm text-[#4A5565]" }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0440\u0442\u044B\u2026")
                    ])
                  ];
                }
              })
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-[16px] border border-[#F3F4F6] bg-white p-1 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] lg:min-h-0" }, [
                createVNode(_component_ClientOnly, null, {
                  fallback: withCtx(() => [
                    createVNode("div", { class: "flex h-full min-h-[272px] flex-1 items-center justify-center rounded-[15px] bg-[#E5E7EB] lg:min-h-0" }, [
                      createVNode("p", { class: "text-sm text-[#4A5565]" }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0440\u0442\u044B\u2026")
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "flex h-full min-h-[272px] flex-1 flex-col lg:min-h-0" }, [
                      createVNode(_component_YandexMap)
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeContacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=HomeContacts-46jF-WHo.mjs.map
