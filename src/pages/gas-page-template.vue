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
                <div class="text-3xl mt-2 font-bold lg:block hidden">XXXX</div>
                <div class="mb-5 p-5 bottom-shadow">
                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="about-scripts-showcase">
                                XXXX
                            </div>
                            <div class="py-3">
                                <p class="text-lg mb-2">XXX.</p>
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
                <!-- <p> <Icon name="material-symbols:calendar-month-sharp"/>  Last updated: {{ date }}</p> -->
            </div>

            <!-- Third part -->
            <div class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2">
                <div class="text-3xl mt-2 font-bold lg:hidden block">XXX</div>
                <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed">
                    <div class="mb-5 pt-5">
                        <p class="text-l font-bold p-1 bg-gray-400 text-white">
                            <Icon name="map:book-store"></Icon> On this page
                        </p>
                        <PageItems :pageItems="pageItems" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref } from 'vue'
import UBreadcrumbs from '~/components/UBreadcrumbs.vue';
import PageItems from '~/components/PageItems.vue';

const breadCrumbs = [
    { label: 'Home', to: '/' },
];
const pageItems = [
  { label: 'XXX', href: '#XXX' },
  { label: 'XXX', href: '#XXX' },
  { label: 'XXX', href: '#XXX' }
];

useHead({
    title: "XXX",
});

// let date = ref(
//     new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
//     .format(new Date('202X-XX-XX'))
// );
</script>

<style scoped>

</style>