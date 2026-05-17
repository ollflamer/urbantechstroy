import { defineStore } from "pinia";
import { ref } from "vue";
const mockPosts = [
  {
    title: "Welcome to the blog",
    content: "This is mock content. Next step is to replace this with a real CMS or DB.",
    image: null,
    createdAt: (/* @__PURE__ */ new Date("2026-01-10T10:00:00.000Z")).toISOString()
  },
  {
    title: "Nuxt 3 project structure",
    content: "This post exists to demonstrate how pages can read from a Pinia store.",
    image: null,
    createdAt: (/* @__PURE__ */ new Date("2026-02-02T08:30:00.000Z")).toISOString()
  },
  {
    title: "Admin-like editing (scaffold)",
    content: "The store includes add/update/delete actions to simulate admin editing capabilities.",
    image: null,
    createdAt: (/* @__PURE__ */ new Date("2026-03-05T15:45:00.000Z")).toISOString()
  }
];
function useSlugify() {
  const slugify = (value) => value.trim().toLowerCase().replace(/['"]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  return { slugify };
}
const usePostsStore = defineStore("posts", () => {
  const posts = ref([...mockPosts]);
  const getPosts = () => posts.value;
  const addPost = (post) => {
    const createdAt = post.createdAt ?? (/* @__PURE__ */ new Date()).toISOString();
    posts.value.unshift({
      title: post.title,
      content: post.content,
      image: post.image ?? null,
      createdAt
    });
  };
  const deletePost = (createdAt) => {
    posts.value = posts.value.filter((p) => p.createdAt !== createdAt);
  };
  const updatePost = (createdAt, patch) => {
    const idx = posts.value.findIndex((p) => p.createdAt === createdAt);
    if (idx === -1) return;
    posts.value[idx] = {
      ...posts.value[idx],
      ...patch,
      createdAt: posts.value[idx].createdAt
    };
  };
  const getPostBySlug = (slug) => {
    const { slugify } = useSlugify();
    return posts.value.find((p) => slugify(p.title) === slug) ?? null;
  };
  return {
    posts,
    getPosts,
    addPost,
    deletePost,
    updatePost,
    getPostBySlug
  };
});
export {
  useSlugify as a,
  usePostsStore as u
};
//# sourceMappingURL=posts-Dpio44Xj.js.map
