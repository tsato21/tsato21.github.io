<template>
    <div>
        <UBreadcrumbs :breadCrumbs="breadCrumbs"/>
        <div class="mb-5 p-4 grid grid-cols-12 gap-3 md:gap-6">
            <!-- First part -->
            <div class="col-span-12 order-1 lg:col-span-2 lg:order-1 md:col-span-12 md:order-1 sm:col-span-12 sm:order-1">
                <div class="mb-5 pt-5">
                    <!-- contents -->
                </div>
            </div>

            <!-- Second part -->
            <div class="col-span-12 order-3 lg:col-span-8 lg:order-2 md:col-span-12 md:order-3 sm:col-span-12 sm:order-3">
                <div class="lg:block hidden">
                    <div class="my-2 flex items-center">
                    <span class="text-3xl font-bold">Manual Builder</span>
                    <LanguageSelections :languages="languages" :currentLanguage="currentLanguage" class="ml-4"/>
                    </div>
                    <Badges :badges="badges" />
                </div>

                <div class="mb-5 p-5 bottom-shadow">
                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="about">
                                About
                            </div>
                            <div class="py-3">
                                <p>
                                    Automates the creation of work manuals by extracting essential details from Google Slides and organizing them into Google Sheets, improving workflow efficiency.
                                </p>
                                <blockquote class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400">
                                    This tool serves as a pivotal asset for organizations aiming to centralize their manual documentation in Google Drive. By consolidating manuals onto a single platform, it facilitates easy access for all workers. Moreover, it ensures that the information within each work manual is conveyed in a concise manner, enhancing readability and comprehension.
                                </blockquote>
                            </div>
                    </div>

                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="prerequisites">
                                Prerequisites
                            </div>
                            <div class="py-3">
                                <ul class="list-disc list-inside space-y-2">
                                    <li class="text-gray-700">A Google account with access to Google Sheets and Slides.</li>
                                    <li class="text-gray-700">A foundational understanding of Google Sheets, Google Slides and Google Apps Script.</li>
                                </ul>
                            </div>
                    </div>

                    <div class="mb-3">
                        <div class="text-2xl font-bold" id="setup">
                            Setup
                        </div>
                        <div class="py-3">
                            <ol class="list-decimal list-inside space-y-2">
                                <li class="text-gray-700">
                                    <strong>Access Your Google Sheet</strong>: Begin by opening the <a href="https://docs.google.com/spreadsheets/d/1PMzgfemPZhTKBubqUDWp5gbM-veuWCbT0IKKOw3fsL8/edit#gid=0" target="_blank" rel="noopener noreferrer" class="text-lightblue underline hover:text-darkblue">Sample Google Sheet</a>. You can also find the <a href="https://docs.google.com/presentation/d/1pUxDKtwHA4GMXfmGXmwzXnjuAbW9g6DE9lFTj55wAn8/edit#slide=id.g2aa00057ea4_0_0" target="_blank" rel="noopener noreferrer" class="text-lightblue underline hover:text-darkblue">Sample Google Slide</a>.
                                    <p class="mt-2">*Note: The samples provided are merely illustrative, showcasing a manual for an educational institution.</p>
                                </li>
                                <li class="text-gray-700">
                                    <strong>Copy the Google Sheet</strong>: Make a copy of the Google Sheet to create your personalized version.
                                </li>
                                <li class="text-gray-700">
                                    <strong>Authorization</strong>: The first time you run the script, it will ask for your permission to access certain data. If you're using a free Gmail account, you might see a warning that says <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Not Verified by Google</code>. Don't worry about this warning - you still need to give permission for the script to work. The script is yours alone, and it won't share any data outside of Google, unless you choose to share your Google Sheet. The only data it might send outside of Google is website status codes, for monitoring purposes.
                                </li>
                                <li class="text-gray-700">
                                    <strong>Return to Original Format</strong>: Use this option to reset the Google Sheet to its original format (i.e., Delete all of the sample sheets except index sheet, reset all pre-defined information, and clear contents in index sheet). Navigate to <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">'Custom Menu' > Click 'Setting'</code> and click <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">'Delete All Sheets and Pre-Set Info'</code>.
                                    <div class="mt-3">
                                        <!-- Placeholder for Setting Menu Image -->
                                        <figure>
                                            <img src="assets/images/gas-tools/manual-builder/setting_menu.png" alt="Setting Menu" class="w-80 h-40">
                                            <figcaption class="p-2 text-gray-400">Fig: Setting Menu</figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li class="text-gray-700">
                                    <strong>Set Slide URL and Name of Index Sheet</strong>: Navigate to <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu > Setting</code> and click <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Set Necessary Info</code> designating URL of Google Slide and name of the index sheet of Google Sheet.
                                </li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="terms-conditions">
                                Others
                            </div>
                            <div class="py-3">
                                <p class="text-lg mt-4">
                                If you are interested in the logics on how the details from Google Slides are extracted and outputting them into Google Sheet, click 
                                <a href="https://docs.google.com/presentation/d/1xSyIpb7w24os4EEhpNBP5CCTxS70q5PeTGKm2Vndumw/edit#slide=id.g6f52a3fb7eed7995_31" target="_blank" rel="noopener noreferrer" class="text-lightblue underline hover:text-darkblue">HERE</a> 
                                for the detailed explanation.
                                </p>
                            </div>
                    </div>

                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="terms-conditions">
                                Terms and Conditions
                            </div>
                            <div class="py-3">
                                <p class="text-lg mt-4">Please note that your use of this website is subject to the <NuxtLink to="/others/terms-conditions" class="text-lightblue underline hover:text-darkblue">Terms and Conditions.</NuxtLink></p>
                            </div>
                    </div>
                </div>
                <p> <Icon name="material-symbols:calendar-month-sharp"/>  Last updated: {{ date }}</p>
            </div>

            <!-- Third part -->
            <div class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2">
                <div class="text-3xl mt-2 font-bold lg:hidden block">
                    <div class="my-2 flex items-center">
                    <span class="text-3xl font-bold">Manual Builder</span>
                    <LanguageSelections :languages="languages" :currentLanguage="currentLanguage" class="ml-4"/>
                    </div>
                    <Badges :badges="badges" />
                </div>
                <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed">
                    <div class="mb-5 pt-5">
                        <p class="text-l font-bold p-1 bg-gray-400 text-white">
                            <Icon name="map:book-store"></Icon> On this page
                        </p>
                        <ul class="break-words">
                            <PageItems :pageItems="pageItems" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref } from 'vue'
import UBreadcrumbs from '~/components/UBreadcrumbs.vue';
import Badges from '~/components/Badges.vue';
import PageItems from '~/components/PageItems.vue';


const breadCrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Gas Tools', to: '/gas-tools/gas-tools' },
    { label: 'Manual Builder'}
];

useHead({
    title: "Manual Builder",
});

const pageItems = [
  { label: 'About', href: '#about' },
  { label: 'Prerequisites', href: '#prerequisites' },
  { label: 'Setup', href: '#setup' },
  { label: 'Terms and Conditions', href: '#terms-conditions' }
];

const badges = [
{
    src: "https://img.shields.io/badge/Google%20Apps-slide%20%26%20sheet-brightgreen?style=flat-square&color=brightgreen",
    alt: "Use of Google Apps"
},
  {
    url: "https://github.com/google/clasp",
    src: "https://img.shields.io/badge/built%20with-clasp-FFA500.svg?style=flat-square",
    alt: "Built with Clasp"
  },
  {
    url: "https://github.com/prettier/prettier",
    src: "https://img.shields.io/badge/code_style-prettier-800080.svg?style=flat-square",
    alt: "Code style: Prettier"
  }
];

const languages = [
    {
        name: "日本語",
        filePath: "/gas-tools/manual-builder/manual-builder_JPN"
    },
    {
        name: "English",
        filePath: "/gas-tools/manual-builder/manual-builder_ENG"
    },
];

const currentLanguage = "English";

let date = ref(
    new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    .format(new Date('2024-04-06'))
);

let isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>

</style>