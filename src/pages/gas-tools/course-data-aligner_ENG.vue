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
                    <span class="text-3xl font-bold">Course Data Aligner</span>
                    </div>
                    <Badges :badges="badges" />
                </div>

                <div class="mb-5 p-5 bottom-shadow">
                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="about">
                                About
                            </div>
                            <div class="py-3">
                                <p>Harmonizes course data between two Google Sheets with differing structures, effectively resolving data structure inconsistencies across multiple stakeholders.
                                </p>
                                <blockquote class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400">
                                    This tool streamlines data management by addressing inconsistencies in course data, aligning it with system databases. It includes scripts for categorizing course offerings, synchronizing schedules, and coordinating faculty assignments, enhancing administrative efficiency and data retrieval.
                                </blockquote>
                            </div>
                    </div>

                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="prerequisites">
                                Prerequisites
                            </div>
                            <div class="py-3">
                                <ul class="list-disc list-inside space-y-2">
                                    <li class="text-gray-700">A Google account with access to Google Sheets.</li>
                                    <li class="text-gray-700">A foundational understanding of Google Sheets and Google Apps Script.</li>
                                </ul>
                            </div>
                    </div>

                    <div class="mb-3">
                        <div class="text-2xl font-bold" id="setup">
                            References
                        </div>
                        <div class="py-3">
                            <ul class="list-decimal list-inside space-y-2">
                                <li class="text-gray-700">
                                    You can find the sample Google Sheets with scrips <a href="https://docs.google.com/spreadsheets/d/1hG3fAQrBgtwIdJQAG5O8JBaQNG7n__tpV4-DVsqZSd0/edit#gid=0" target="_blank" rel="noopener noreferrer" class="text-lightblue underline hover:text-darkblue">HERE</a>.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="text-2xl font-bold" id="setup">
                           Useages
                        </div>
                        <div class="py-3">
                            <ul class="list-decimal list-inside space-y-2">
                                <li class="text-gray-700">
                                    You can find the sample Google Sheets with scrips <a href="https://docs.google.com/spreadsheets/d/1hG3fAQrBgtwIdJQAG5O8JBaQNG7n__tpV4-DVsqZSd0/edit#gid=0" target="_blank" rel="noopener noreferrer" class="text-lightblue underline hover:text-darkblue">HERE</a>.
                                </li>
                            </ul>
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
    src: "https://img.shields.io/badge/Google%20Apps-%20sheet-brightgreen?style=flat-square&color=brightgreen",
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