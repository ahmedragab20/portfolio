<template>
  <div v-if="loaded" id="ragab-app">
    <div class="min-h-[80svh] flex flex-col justify-center w-full p-5 sm:max-w-lg mx-auto">
      <div>
        <div
          dir="rtl"
          class="relative flex h-32 w-32 rounded-full bg-gray-100 dark:bg-gray-900 shadow shadow-red-200 duration-300 hover:blur-lg"
        >
          <div class="absolute inset-0 flex items-center justify-center text-xl"></div>
          <div
            class="absolute right-0 h-full w-1/2 rounded-s-full bg-gray-400 dark:bg-gray-600 shadow-2xl shadow-primary-600 backdrop- duration-300 hover:opacity-50"
          ></div>
          <div
            id="target-circle"
            class="absolute right-0 h-full w-1/2 rounded-e-full bg-gray-600 dark:bg-gray-900 shadow-2xl shadow-red-700 dark:shadow-red-500 backdrop-blur-lg duration-100 hover:opacity-50"
          ></div>
        </div>
      </div>
      <!-- bio -->
      <div class="my-10 font-mono">
        <h2>Hi, I'm <span class="font-bold text-primary-500">Ragab</span> 👋🏻</h2>
        <p>listen, life is too short to code a fantasy portfolio...</p>
        <p>
          therefore, here's my github and my linkedin. you'll find all you wanna know about me
          there😄
        </p>
        <div>
          <span>
            <i class="text-xs bg-gray-100 p-0.5 rounded-md dark:bg-gray-800">life is short, man!</i>
          </span>
        </div>
        <div class="flex gap-1 mt-2">
          <UButton
            to="https://github.com/ahmedragab20"
            color="black"
            target="_blank"
            size="sm"
            :ui="{
              rounded: 'rounded-full',
            }"
          >
            Github
          </UButton>
          <UButton
            to="https://www.linkedin.com/in/ahmed-ragab-bb75541b3/"
            size="sm"
            target="_blank"
            :ui="{
              rounded: 'rounded-full',
            }"
          >
            LinkedIn
          </UButton>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div
      class="p-4 fixed bottom-0 flex justify-end w-full backdrop-blur-sm border-t border-gray-100 dark:border-gray-800"
    >
      <UTooltip text="App Settings" :shortcuts="[metaSymbol, '.']">
        <UButton
          class="duration-300 hover:rotate-45"
          @click="settingsToggler"
          icon="i-heroicons-cog"
          variant="soft"
          :ui="presetButton"
        />
      </UTooltip>
    </div>
  </div>
  <div v-else class="flex flex-col items-center justify-center h-screen gap-4">
    <div v-for="n in 4" :key="n">
      <div class="flex items-center space-x-4">
        <USkeleton class="w-12 h-12 rounded-full" />
        <div class="space-y-2">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  </div>

  <!-- 🤷🏻‍♂️ - so global -->
  <!-- Modals -->
  <UModal v-model="settingsModal" name="settingsModal">
    <Settings @close="onSettingsClose" />
  </UModal>

  <!-- Toasts -->
  <UNotifications />
</template>
<script setup lang="ts">
  const toast = useToast();
  const { metaSymbol } = useShortcuts();
  const appConfig = useAppConfig();
  const appSettings = ref();
  const loaded = ref(false);
  const settingsModal = ref(false);
  const settingsToggler = () => {
    settingsModal.value = !settingsModal.value;
  };
  const onSettingsClose = (haveDataChanged?: boolean) => {
    settingsModal.value = false;

    if (haveDataChanged) toast.add({ title: 'Settings applied successfully😉' });
  };
  const presetButton = {
    rounded: 'rounded-full',
  };

  const initTheme = () => {
    if (process.client) {
      appSettings.value = localStorage.getItem('appSettings');
      if (!!appSettings.value) {
        const settings = JSON.parse(appSettings.value);

        appConfig.ui.primary = settings.color?.primary || 'green';
        appConfig.ui.gray = settings.color?.secondary || 'cool';
      }
    }
  };

  onMounted(() => {
    initTheme();
    nextTick(() => {
      // Get the target circle element
      const targetCircle = ref<HTMLElement>(document.getElementById('target-circle')!);

      // Check if the element was found
      if (targetCircle.value) {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
          // Get the center coordinates of the target circle
          const circleRect = targetCircle.value.getBoundingClientRect();
          const circleCenterX = circleRect.left + circleRect.width / 2;
          const circleCenterY = circleRect.top + circleRect.height / 2;

          // Calculate the angle between the cursor position and the center of the circle
          const angle = Math.atan2(e.clientY - circleCenterY, e.clientX - circleCenterX);

          // Convert the angle to degrees
          const degrees = angle * (180 / Math.PI);

          // Rotate the target circle based on the cursor direction
          targetCircle.value.style.transform = `rotate(${degrees}deg)`;
        });
      }
    });
    loaded.value = true;
  });
  defineShortcuts({
    'meta_.': {
      usingInput: true,
      handler: () => settingsToggler(),
    },
  });

  useHead({
    title: 'Ragab - Portfolio',
  });
</script>
