import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';
import { u as usePostsStore } from './posts-Dpio44Xj.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = computed(() => String(route.params.slug));
    const postsStore = usePostsStore();
    const post = computed(() => postsStore.getPostBySlug(slug.value));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "container-site section-y-sm max-w-3xl" }, _attrs))}><header class="space-y-2"><h1 class="heading-subsection">${ssrInterpolate((_b = (_a = unref(post)) == null ? void 0 : _a.title) != null ? _b : "Post")}</h1><p class="text-sm text-[#4A5565]"> Slug: <code>${ssrInterpolate(unref(slug))}</code></p></header><div class="prose mt-6 max-w-none text-[#364153]">`);
      if (!unref(post)) {
        _push(`<p>Loading\u2026</p>`);
      } else {
        _push(`<p class="text-base leading-relaxed">${ssrInterpolate(unref(post).content)}</p>`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-Dtj2N_Fp.mjs.map
