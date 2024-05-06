<template>
  <ClientOnly>
    <UTooltip text="Toggle Dark Mode" :shortcuts="['⌘', 'o']">
      <UToggle
        v-model="isDark"
        on-icon="i-heroicons-moon"
        off-icon="i-heroicons-sun"
      />
    </UTooltip>
  </ClientOnly>
</template>
<script lang="ts" setup>
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      isDark.value = !isDark.value;
    },
  },
});
</script>
