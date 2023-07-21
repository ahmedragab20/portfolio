<template>
  <div v-if="loaded" id="ragab-app">
    <div class="min-h-[80svh] flex flex-col justify-center w-full p-5 sm:max-w-xl mx-auto">
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
        <div class="text-gray-500 dark:text-gray-400">
          <p>listen, life is too short to code a fantasy portfolio...</p>
          <p>therefore, here's all you might need to know about me.</p>
        </div>
        <div>
          <span>
            <i class="text-xs bg-gray-100 p-0.5 rounded-md dark:bg-gray-800"
              >#life is short, man!</i
            >
          </span>
        </div>
        <div class="flex gap-1 mt-2">
          <UTooltip text="Google Dive - Dropbox - Download" :shortcuts="[metaSymbol, 'r']">
            <UButton
              @click="resumeToggler"
              size="sm"
              color="black"
              target="_blank"
              icon="i-heroicons-document"
              :ui="{
                rounded: 'rounded-full',
              }"
            >
              Resume
            </UButton>
          </UTooltip>
          <UButton
            :to="links.github"
            target="_blank"
            size="sm"
            variant="outline"
            :ui="{
              rounded: 'rounded-full',
            }"
          >
            Github
          </UButton>
          <UButton
            :to="links.linkedin"
            size="sm"
            target="_blank"
            variant="outline"
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
  <!-- Resume -->
  <UModal v-model="resumeModal" name="resumeModal">
    <UCard>
      <template #header>
        <h2 class="text-2xl font-semibold">Resume</h2>
      </template>

      <h3 class="font-bold">here you go 👋🏻</h3>
      <div class="text-gray-700 dark:text-gray-400">
        <p class="my-1">
          the resume will include all the information you may need to know about me. from my first
          job to my last one, and all the skills i've learned along the way.
        </p>
        <p class="text-gray-900 dark:text-gray-100">
          and before you go, <strong>thank you ❤️</strong>
        </p>
      </div>

      <template #footer>
        <div class="flex flex-wrap gap-1">
          <UButton
            @click="downloadResumePDF"
            size="sm"
            color="black"
            target="_blank"
            icon="i-heroicons-document-arrow-down"
            :loading="downloadingResume"
            :ui="{
              rounded: 'rounded-full',
            }"
          >
            Download
          </UButton>
          <UButton
            :to="links.googleDrive"
            size="sm"
            color="green"
            target="_blank"
            variant="outline"
            :ui="{
              rounded: 'rounded-full',
            }"
          >
            Drive
          </UButton>
          <UButton
            :to="links.dropbox"
            size="sm"
            color="blue"
            target="_blank"
            variant="outline"
            :ui="{
              rounded: 'rounded-full',
            }"
          >
            Dropbox
          </UButton>
        </div>
      </template>
    </UCard>
  </UModal>

  <!-- settings -->
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

  const links = {
    github: 'https://github.com/ahmedragab20',
    linkedin: 'https://www.linkedin.com/in/ahmed-ragab-bb75541b3/',
    resume: './assets/Ahmed_Ragab.pdf',
    googleDrive:
      'https://drive.google.com/file/d/1xmJiQ14tibiUJR1QHxj1svq2yREzBGfI/view?usp=drive_link',
    dropbox:
      'https://www.dropbox.com/scl/fi/jk2xhl6sb9atv9runorw2/kickresume-Ahmed-Ragab.pdf?rlkey=yhdgsm92cs0rhhcr7dtg9xoye&dl=0',
  };

  const resumeModal = ref(false);
  const resumeToggler = () => {
    resumeModal.value = !resumeModal.value;
  };
  const downloadingResume = ref(false);

  const downloadResumePDF = () => {
    downloadingResume.value = true;
    const link = document.createElement('a');
    link.href = links.resume;
    link.download = "Ahmed Ragab's Resume";

    setTimeout(() => {
      link.click();
      downloadingResume.value = false;
    }, 1000);
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
    meta_r: {
      usingInput: true,
      handler: () => resumeToggler(),
    },
  });

  useHead({
    title: 'Ragab - Portfolio',
  });
</script>
