<template>
    <div class="flex flex-col min-h-screen relative">
        <header class="shadow-sm bg-white p-4 relative">
            <nav class="flex justify-between items-center">
                <h4>
                    <NuxtLink to="/" class="text-xl font-bold text-primary text-black no-underline">
                        Tiger's Scripts Showcase
                    </NuxtLink>
                </h4>
                <ul class="nav bg-white rounded-lg p-5 mt-5 right-2" @click.stop>
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link" @click.native="isOpen = false">
                            Home
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/about" class="nav-link" @click.native="isOpen = false">
                            About
                        </NuxtLink>
                    </li>
                    <!-- Add more links here -->
                </ul>
                <!-- <div class="relative">
                    <button @click="toggleMenu" class="navbar-toggler">
                        Menu
                    </button>

                    <transition name="fade">
                        <div v-if="isOpen" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" @click="isOpen = false">
                            <transition name="slide">
                                <ul v-if="isOpen" class="nav absolute bg-white rounded-lg p-5 mt-5 right-2" @click.stop>
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link" @click.native="isOpen = false">
                                            Home
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/about" class="nav-link" @click.native="isOpen = false">
                                            About
                                        </NuxtLink>
                                    </li>
                                    <!-- Add more links here -->
                                <!-- </ul>
                            </transition>
                        </div>
                    </transition>
                </div> -->
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container-lg flex-grow">
            <slot />
        </div>

        <footer class="shadow-sm bg-white p-4">
            <ul class="flex justify-center space-x-4">
                <li><a href="https://github.com" target="_blank" class="text-black no-underline">GITHUB</a></li>
                <li><a href="/terms" class="text-black no-underline">TERMS & CONDITIONS</a></li>
                <li><a href="/privacy" class="text-black no-underline">PRIVACY POLICY</a></li>
                <li><a href="/contact" class="text-black no-underline">CONTACT</a></li>
            </ul>
        </footer>
    </div>
</template>

<script setup lang="ts">
// import { ref, computed, nextTick } from 'vue'
// import { useRoute } from 'vue-router'

// const isOpen = ref(false)
// const route = useRoute()

// const toggleMenu = () => {
//     nextTick(() => {
//         isOpen.value = !isOpen.value
//     })
// }

// const currentPage = computed(() => {
//     switch (route.path) {
//         case '/':
//             return 'Home'
//         case '/about':
//             return 'About'
//         // Add more paths here
//         default:
//             return ''
//     }
// })
</script>

<style>

/* .nav-item {
    margin: 1rem 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.slide-enter-active, .slide-leave-active {
    transition: transform .5s;
}

.slide-enter, .slide-leave-to {
    transform: translateY(-100%);
}


.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>