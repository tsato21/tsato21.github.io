<template>
  <div class="flex flex-col min-h-screen relative">
    <header class="shadow-sm bg-white relative p-5">
      <nav class="flex justify-between items-center">
        <NuxtLink
          to="/"
          class="text-xl font-bold text-primary text-black no-underline flex items-center"
        >
          <img
            src="/assets/images/nav-bar/icon.png"
            alt="Site's Icon"
            class="mr-2 w-12 h-12"
          />
          Tiger's Scripts Showcase
        </NuxtLink>

        <ul class="nav bg-white rounded-lg p-3 right-2 flex" @click.stop>
          <NavbarItems @close="isOpen = false" />
        </ul>
        <div class="relative">
          <button @click="toggleMenu" class="navbar-toggler">
            <Icon name="material-symbols-light:menu" class="custom-icon"></Icon>
          </button>
          <Transition name="menu-bar-out">
            <div
              v-if="isOpen"
              class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
              @click="isOpen = false"
            >
              <Transition name="menu-bar-in">
                <ul
                  v-if="isOpen"
                  class="nav absolute bg-white rounded-lg p-5 mt-5 right-2"
                  @click.stop
                >
                  <NavbarItems @close="isOpen = false" />
                </ul>
              </Transition>
            </div>
          </Transition>
        </div>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container flex-grow py-5 mx-auto">
      <slot />
    </div>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavbarItems from '~/components/NavbarItems.vue';
import Footer from '~/components/Footer.vue';

const isOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped></style>
