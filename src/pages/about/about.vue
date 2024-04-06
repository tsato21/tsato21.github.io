<template>
    <div>
        <UBreadcrumb :links="links"/>
        <div class="text-3xl mt-2 font-bold">About</div>

            <div class="mb-5 pt-2 grid grid-cols-12 gap-3 md:gap-6">
                <!-- First part -->
                <div class="col-span-12 md:col-span-3 order-1 md:order-1">
                    <!-- Your name -->
                    <div class="mb-5 pt-5">
                        <h1 class="text-2xl font-bold">Taiga Sato</h1>

                    <!-- Short introduction -->
                    <p class="mt-2 text-gray-600">Programmer, driving work efficiency and continual improvement through IT tech.</p>

                    <!-- GitHub URL with icon -->
                    <NuxtLink to="https://github.com/tsato21" target="_blank" class="flex items-center mt-2">
                        <Icon name="uil:github" color="black" />
                        <span class="text-gray-500 hover:text-gray-700 ms-2">GitHub</span>
                    </NuxtLink>
                    </div>
                    
                </div>

                <!-- Second part -->
                <div class="col-span-12 md:col-span-7 order-3 md:order-2">
                    <div class="mb-5 p-5 bottom-shadow">
                        <div class="mb-3">
                            <div class="text-2xl font-bold" id="about-scripts-showcase">
                                About Scripts Showcase
                            </div>
                            <div class="py-3">
                                <p class="text-lg mb-2">Scripts Showcase serves as a platform for sharing open-source solutions that I have developed, including Google Add-ons, aimed at enhancing automation and efficiency. You are welcome to utilize these tools for your needs.</p>
                                <p class="text-lg">Should you wish to delve into the source code, rest assured that it will always be accessible via GitHub repositories.</p>

                                <p class="text-lg mt-4">Kindly be advised that the use of this website is governed by our <NuxtLink to="#" class="text-lightblue underline hover:text-darkblue">Terms and Conditions.</NuxtLink></p>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="text-2xl font-bold" id="about-me">
                                About Me
                            </div>
                            <div class="py-3">
                                <p class="text-lg mb-2">
                                    I developed an interest in programming through the lens of improving work efficiency. My primary focus has been on projects based on Google Apps Script, leveraging its powerful automation capabilities to streamline processes and enhance productivity in Google Workspace.
                                </p>
                                <p class="text-lg mb-2">
                                    Beyond Google Apps Script, I'm broadening my skills with Laravel, PHP, Nuxt.js, and TypeScript, driven by my passion for technology and dedication to my growth as a software engineer.
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
                                    Favicon of this website is made by <a href="https://www.canva.com/" target="_blank" rel="noopener" class="text-lightblue underline hover:text-darkblue">Canva</a>.
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p> <Icon name="material-symbols:calendar-month-sharp"/>  Last updated: {{ date }}</p>
                </div>

                <!-- Third part -->
                <div class="col-span-12 md:col-span-2 order-2 md:order-3">
                    <div class="bg-white shadow-lg rounded-lg">
                        <p class="text-l font-bold p-1 bg-gray-400 text-white">
                            <Icon name="map:book-store"></Icon> On this page
                        </p>
                        <ul class="break-words">
                            <li class="border-b border-gray-200 mx-2 py-1"><a href="#about-scripts-showcase" class="text-xs font-bold text-gray-400 hover:text-blue-700 about-menu-link">About Scripts Showcase</a></li>
                            <li class="border-b border-gray-200 mx-2 py-1"><a href="#about-me" class="text-xs font-bold text-gray-400 hover:text-blue-700 about-menu-link">About Me</a></li>
                            <li class= "mx-2 py-1"><a href="#acknowledgements" class="text-xs font-bold text-gray-400 hover:text-blue-700 about-menu-link">Acknowledgements</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import UBreadcrumb from '@/components/UBreadcrumbs';

const links = [
    { label: 'Home', to: '/' },
    { label: 'About'}
];

useHead({
    title: "About",
});

const date = ref(null)

onMounted(() => {
    date.value = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date())
})
</script>

<style scoped>
.bottom-shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>