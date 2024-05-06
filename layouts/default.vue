<template>
  <main class="pb-20">
    <slot />
  </main>
  <footer
    class="fixed bottom-0 w-full h-20 border-t backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/50"
  >
    <div
      class="sm:px-0 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto h-full flex items-center justify-between"
    >
      <ThemeSwitch />
      <div class="flex items-center gap-3">
        <UTooltip text="Visit Github">
          <a href="https://github.com/ahmedragab20" target="_blank">
            <UIcon name="i-simple-icons:github" class="w-3.5 h-3.5" />
          </a>
        </UTooltip>
        <UTooltip text="Visit Linkedin">
          <a
            href="https://www.linkedin.com/in/ahmed-ragab-bb75541b3"
            target="_blank"
          >
            <UIcon name="i-simple-icons:linkedin" class="w-3.5 h-3.5" />
          </a>
        </UTooltip>
      </div>
    </div>
  </footer>
</template>
