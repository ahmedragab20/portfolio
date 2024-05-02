export default defineAppConfig({
  ui: {
    primary: "custom-primary",
    gray: "zinc",
    icons: {
      dynamic: true,
    },
    ui: {
      notifications: {
        position: "top-0 bottom-auto z-[100]",
      },
    },
    modal: { rounded: "rounded-xl" },
    button: {
      rounded: "rounded-xl",
      default: {
        size: "xl",
      },
    },
    input: {
      base: "!py-3",
      rounded: "rounded-xl",
      default: {
        size: "xl",
      },
    },
  },
});
