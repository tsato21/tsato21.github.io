<template>
    <div class="flex flex-col min-h-screen relative">
        <header class="shadow-sm bg-white relative p-5">
            <nav class="flex justify-between items-center">
                
                    <NuxtLink to="/" class="text-xl font-bold text-primary text-black no-underline">
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
        <div class="container flex-grow p-5 w-5/6 mx-auto">
            <slot />
        </div>


        <footer class="shadow-sm bg-white px-5 py-2">
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
 import { ref, computed } from 'vue'
 import NavbarItems from '~/components/NavbarItems.vue'
 
 const isOpen = ref(false)
 const route = useRoute()
 
 const toggleMenu = () => {
   isOpen.value = !isOpen.value
 }
 </script>
 
 <style scoped>

 </style>