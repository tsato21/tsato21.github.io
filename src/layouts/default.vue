<template>
  <Cursor />
  <div class="flex flex-col min-h-screen text-lg">
    <!-- <header class="shadow-sm bg-white relative px-5"> -->
    <header class="top-0 w-full z-50 shadow-sm bg-white px-5">
      <nav class="flex justify-between items-center">
        <NuxtLink
          to="/"
          class="text-xl font-bold text-primary text-black no-underline flex items-center"
        >
          <img
            src="~/assets/images/nav-bar/icon.png"
            alt="Site's Icon"
            class="mr-2 w-12 h-12 my-1"
          />
          Scripts Showcase
        </NuxtLink>
        <ul
          class="nav bg-white rounded-lg px-3 py-1 flex md:flex hidden"
          @click.stop
        >
          <NavbarItems @close="isOpen = false" />
        </ul>
        <div class="relative">
          <button
            @click="toggleMenu"
            class="navbar-toggler transform transition hover:-translate-y-1"
          >
            <Icon name="material-symbols-light:menu" class="custom-icon"></Icon>
          </button>
          <Transition name="menu-bar-out">
            <div
              v-if="isOpen"
              class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
              @click="isOpen = false"
            >
              <ul
                v-if="isOpen"
                class="absolute bg-white rounded-lg p-5 mt-5 right-2"
                @click.stop
              >
                <NavbarItems @close="isOpen = false" />
              </ul>
            </div>
          </Transition>
        </div>
      </nav>
    </header>

    <!-- output the page content -->
      <div class="container flex-grow py-5 mx-auto">
      <div>
        <slot />
      </div>
      <!-- Button to scroll to top of the page: fixed at bottom right corner -->
      <button
        v-if="isScrolled"
        @click="scrollTop"
        class="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full top-btn"
      >
        Top
      </button>
    </div>
    

    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// A function that scrolls the page to the top smoothly.
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const isScrolled = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>
