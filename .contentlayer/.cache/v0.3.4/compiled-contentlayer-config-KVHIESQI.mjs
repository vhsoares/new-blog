// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", required: true, of: { type: "string" } },
    link_next: { type: "string", required: false },
    title_next: { type: "string", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath.split("/")[1]}`
    },
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath.split("/")[1]}`
    },
    language: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath.split("/")[0]}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KVHIESQI.mjs.map
