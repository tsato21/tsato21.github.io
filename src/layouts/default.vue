<template>
    <div class="flex flex-col min-h-screen relative px-5">
        <header class="shadow-sm bg-white relative">
            <nav class="flex justify-between items-center">
                <h4>
                    <NuxtLink to="/" class="text-xl font-bold text-primary text-black no-underline">
                        Tiger's Scripts Showcase
                    </NuxtLink>
                </h4>
                <ul class="nav bg-white rounded-lg p-5 mt-5 right-2 flex" @click.stop>
                    <NavbarItems @close="isOpen = false" />
                </ul>
                <div class="relative">
                    <button @click="toggleMenu" class="navbar-toggler">
                        <Icon name="material-symbols-light:menu" class="custom-icon"></Icon>
                    </button>
                    <Transition name="menu-bar-out">
                        <div v-if="isOpen" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" @click="isOpen = false">
                            <Transition name="menu-bar-in">
                                <ul v-if="isOpen" class="nav absolute bg-white rounded-lg p-5 mt-5 right-2" @click.stop>
                                    <NavbarItems @close="isOpen = false" />
                                </ul>
                            </Transition>
                        </div>
                    </Transition>
                </div>
            </nav>
        </header>


        <!-- output the page content -->
        <div class="container-lg flex-grow">
            <slot />
        </div>


        <footer class="shadow-sm bg-white p-4">
            <ul class="flex justify-center space-x-4">
                <li><a href="" target="_blank" class="text-black no-underline">GITHUB</a></li>
                <li><a href="" class="text-black no-underline">TERMS & CONDITIONS</a></li>
                <li><a href="" class="text-black no-underline">PRIVACY POLICY</a></li>
                <li><a href="" class="text-black no-underline">CONTACT</a></li>
            </ul>
        </footer>
    </div>
 </template>
 
 
 <script setup lang="ts">
 import { ref, computed, nextTick } from 'vue'
 import { useRoute } from 'vue-router'
 import NavbarItems from '/components/NavbarItems.vue'

 
 
 const isOpen = ref(false)
 const route = useRoute()
 
 
 const toggleMenu = () => {
     nextTick(() => {
         isOpen.value = !isOpen.value
     })
 }
 const currentPage = computed(() => {
     switch (route.path) {
         case '/':
             return 'Home'
         case '/about':
             return 'About'
         // Add more paths here
         default:
             return ''
     }
 })
 </script>
 
 
 <style>
 .nav-item {
    margin: 1rem 0;
 }
.nav-link {
    margin-right: 1rem;
    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
}
.nav-link:hover {
    transform: translateY(-0.25rem) scale(1.10);
    color: #4B5563;
    border-bottom: 2px solid #4B5563;
}
 .menu-bar-out-enter-active, .menu-bar-out-leave-active {
    transition: opacity 0.5s;
 }
 
 .menu-bar-out-enter-from, .menu-bar-out-leave-to {
    opacity: 0;
 }
 
 .menu-bar-in-enter-active, .menu-bar-in-leave-active {
    transition: transform 0.5s;
 }
 
 .menu-bar-in-enter-from, .menu-bar-in-leave-to {
    transform: scale(0.5);
 }

 .custom-icon {
  font-size: 50px;
}
 
 </style> 