import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    parent: group({
      title: "Parent title",
      description: "Parent description.",
      fields: {
        leaf: field({
          title: "Field title",
          description: "Field Description",
          icon: "i-icon-to-display",
          default: "default value",
        }),
      },
    }),
  },
});
