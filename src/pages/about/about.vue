<template>
  <div>
    <UBreadcrumbs :breadCrumbs="breadCrumbs" />
    <div class="mb-5 p-4 grid grid-cols-12 gap-3 md:gap-6">
      <!-- Section A (left in lg/ first in md/sm/xs) -->
      <div
        class="col-span-12 order-1 lg:col-span-2 lg:order-1 md:col-span-12 md:order-1 sm:col-span-12 sm:order-1"
      >
        <div class="mb-5 pt-5">
          <img
            src="assets/images/profile/profile.jpeg"
            alt="Fit to Data Feature"
            class="w-24 h-24 rounded-full"
          />
          <div class="text-2xl font-bold">Taiga Sato</div>

          <!-- Short introduction -->
          <p class="mt-2 text-gray-600">
            Programmer, driving work efficiency and continual improvement
            through IT tech.
          </p>

          <!-- GitHub URL with icon -->
          <NuxtLink
            to="https://github.com/tsato21"
            target="_blank"
            class="flex items-center mt-2"
          >
            <Icon name="grommet-icons:github" color="black" />
            <span class="text-gray-500 hover:text-gray-700 ms-2">GitHub</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Section B (middle in lg/ third in md/sm/xs) -->
      <div
        class="col-span-12 order-3 lg:col-span-8 lg:order-2 md:col-span-12 md:order-3 sm:col-span-12 sm:order-3"
      >
        <div class="text-3xl mt-2 font-bold lg:block hidden">About</div>
        <div class="mb-5 p-5 bottom-shadow">
          <div class="mb-3">
            <div class="text-2xl font-bold" id="about-scripts-showcase">
              About Scripts Showcase
            </div>
            <div class="py-3">
              <p class="text-lg mb-2">
                Scripts Showcase serves as a platform for sharing open-source
                solutions that I have developed, including Google Add-ons, aimed
                at enhancing automation and efficiency. You are welcome to
                utilize these tools for your needs.
              </p>
              <p class="text-lg">
                Should you wish to delve into the source code, rest assured that
                it will always be accessible via GitHub repositories.
              </p>

              <p class="text-lg mt-4">
                Kindly be advised that the use of this website is governed by
                our
                <NuxtLink
                  to="#"
                  class="text-lightblue underline hover:text-darkblue"
                  >Terms and Conditions.</NuxtLink
                >
              </p>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="about-me">About Me</div>
            <div class="py-3">
              <p class="text-lg mb-2">
                I developed an interest in programming through the lens of
                improving work efficiency. My primary focus has been on projects
                based on Google Apps Script, leveraging its powerful automation
                capabilities to streamline processes and enhance productivity in
                Google Workspace.
              </p>
              <p class="text-lg mb-2">
                Beyond Google Apps Script, I'm broadening my skills with
                Laravel, PHP, Nuxt.js, and TypeScript, driven by my passion for
                technology and dedication to my growth as a software engineer.
              </p>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="acknowledgements">
              Acknowledgements
            </div>
            <div class="py-3">
              <ul class="list-disc list-inside">
                <li class="text-lg mb-2">
                  The outline of the Privacy Policy of this website ~~.
                </li>
                <li class="text-lg mb-2">
                  Favicon of this website is made by
                  <a
                    href="https://www.canva.com/"
                    target="_blank"
                    rel="noopener"
                    class="text-lightblue underline hover:text-darkblue"
                    >Canva</a
                  >.
                </li>
                <li class="text-lg mb-2">
                  The profile photo is of my cherished Golden Retriever, Haru. Haru is not just a pet, but a valued member of our family. She has an immense love for people, always wagging her tail and rushing to be petted whenever she sees anyone.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          <Icon name="material-symbols:calendar-month-sharp" /> Last updated:
          {{ date }}
        </p>
      </div>

      <!-- Section C (right in lg/ second in md/sm/xs) -->
      <div
        class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2"
      >
        <div class="text-3xl mt-2 font-bold sm:ml-3 lg:hidden block">About</div>
        <div
          class="bg-white shadow-lg rounded-lg md:relative lg:fixed mb-5 pt-5"
        >
          <p class="text-l font-bold p-1 bg-gray-400 text-white">
            <Icon name="map:book-store"></Icon> On this page
          </p>
          <PageItems :pageItems="pageItems" :pageTitle="pageTitle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UBreadcrumbs from '~/components/UBreadcrumbs.vue';
import PageItems from '~/components/PageItems.vue';

const breadCrumbs = [{ label: 'Home', to: '/' }, { label: 'About' }];

const pageTitle = 'On this page';
const pageItems = [
  { label: 'About Scripts Showcase', id: 'about-scripts-showcase' },
  { label: 'About Me', id: 'about-me' },
  { label: 'Acknowledgements', id: 'acknowledgements' },
];

useHead({
  title: 'About',
});

let date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-04-06'))
);
</script>

<style scoped></style>
