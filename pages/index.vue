<template>
  <div
    class="sm:py-5 px-5 sm:px-0 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto"
  >
    <div>
      <a href="#hi">
        <h3
          id="hi"
          class="bg-primary-400 inline-block p-3 font-semibold text-xl"
        >
          Hi..!!
        </h3>
      </a>
      <h1 class="text-lg mt-2">
        this is
        <span class="text-primary-400">Ahmed Ragab</span>
        . he's nice guy!
      </h1>
      <div
        class="mt-2 text-gray-500 dark:text-gray-400 sm:max-w-4xl sm:text-sm text-xs space-y-1.5"
      >
        <p>
          Ahmed Ragab, is mainly a Frontend Engineer, he loves to write
          Javascript, and Typescript code that runs everywhere.
        </p>
        <p>
          Throughout his career, Ahmed has evolved from a self-taught junior
          engineer to a senior engineer in major firms, leading projects,
          onboarding and mentoring developers.
        </p>
        <p>
          Advanced frontend development for startups, focusing on design
          systems, project leadership, and mentoring.
        </p>
      </div>
    </div>
    <div class="mt-7">
      <div>
        <a href="#technologies">
          <h3
            id="technologies"
            class="text-primary-400 inline-block font-semibold text-xl"
          >
            Technologies
          </h3>
        </a>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          not everything he knows, just a few of the things he's worked with or
          is currently working with.
        </p>
      </div>
      <div class="mt-3 space-y-1">
        <div
          v-for="(technology, $index) in technologies"
          :key="$index"
          class="text-gray-400 hover:text-gray-400/50 flex gap-2 items-center text-sm cursor-text"
        >
          <UIcon :name="technology.icon" class="w-3.5 h-3.5" />
          {{ technology.name }}
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div>
        <a href="#contact">
          <h3
            id="open_source_projects"
            class="text-primary-400 inline-block font-semibold text-xl"
          >
            Open Source Projects
          </h3>
        </a>
      </div>
      <div class="mt-3 space-y-3">
        <a
          href="https://github.com/ahmedragab20/kalemah"
          class="py-3 px-5 border block hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700"
          target="_blank"
        >
          <div>
            <UIcon name="i-simple-icons:github" class="w-3.5 h-3.5" />
          </div>
          <h3 class="text-lg font-semibold">Very Good Fetch</h3>
          <p class="text-sm text-gray-500">A Very Good Fetch Api✨</p>
          <div>
            <UIcon
              name="i-simple-icons:typescript"
              class="w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
            />
          </div>
        </a>
        <a
          href="https://github.com/ahmedragab20/kalemah"
          class="py-3 px-5 border block hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700"
          target="_blank"
        >
          <div>
            <UIcon name="i-simple-icons:github" class="w-3.5 h-3.5" />
          </div>
          <h3 class="text-lg font-semibold">Kalemah</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            (kalemah - كَلِمة) is an internationalization library written fully
            in Typescript
          </p>
          <div>
            <UIcon
              name="i-simple-icons:typescript"
              class="w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { technologies } from "../assets/technologies.json";
</script>
