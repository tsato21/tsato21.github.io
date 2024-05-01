<template>
  <div>
    <UBreadcrumbs :breadCrumbs="breadCrumbs" />
    <div class="mb-5 p-4 grid grid-cols-12 gap-3 md:gap-6">
      <!-- First part -->
      <div
        class="col-span-12 order-1 lg:col-span-2 lg:order-1 md:col-span-12 md:order-1 sm:col-span-12 sm:order-1"
      >
        <div class="mb-5 pt-5">
          <!-- contents -->
        </div>
      </div>

      <!-- Second part -->
      <div
        class="col-span-12 order-3 lg:col-span-8 lg:order-2 md:col-span-12 md:order-3 sm:col-span-12 sm:order-3"
      >
        <div class="text-3xl mt-2 font-bold lg:block hidden">
          PRIVACY POLICY
        </div>
        <div class="mb-5 p-5 bottom-shadow">
          <!-- contents -->
          <p>
            Your privacy holds utmost significance to Me. This Privacy Policy
            delineates the types of personal information that is gathered and
            how it is utilized.
          </p>
          <br />
          <p>
            Above all, rest assured that I will never disclose Your email
            address or any other personal details to anyone without Your
            explicit permission.
          </p>
        </div>
        <div class="py-3">
          <ol class="list-set">
            <li class="text-2xl font-bold border-b-2 pb-3" id="definition">
<!-- <NuxtLink :to="{ hash: 'definition' }" class="group">
  Definitions
  <div class="-ml-6 pr-2 py-2 inline-flex transition-opacity">
    <span class="i-heroicons-hashtag-20-solid w-4 h-4 text-primary opacity-0 group-hover:opacity-100">a</span>
  </div>
</NuxtLink> -->
<a aria-current="page" href="#" class="router-link-active router-link-exact-active group">
  <div class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute">
    <span class="i-heroicons-hashtag-20-solid w-4 h-4 text-primary"></span>
  </div>
  Usage
</a>
              
              <!-- <a href="#definition">a</a> -->
                      
              <ol class="list-set">
                <li>Item 1-1</li>
                <li>Item 1-2</li>
              </ol>
            </li>
            <li>
              Item 2
              <ol class="list-set">
                <li>Item 2-1</li>
                <li>Item 2-2</li>
              </ol>
            </li>
            
          </ol>
          <p>
            “You”, “Your”, or “the user” in this page refers to the viewer
            of this Website or the user of the Services. These Terms herein
            constitutes a legal agreement between You and I (“both
            parties”). You must be of sufficient age, in Your timezone and
            local jurisdication, to legally bind Yourself to these Terms. If
            You are entering into these Terms on behalf of a company, You
            represent that You have the authority to bind that company to
            these Terms.
          </p>
        </div>
        <p>
          <Icon name="material-symbols:calendar-month-sharp" /> Last updated:
          {{ date }}
        </p>
      </div>

      <!-- Third part -->
      <div
        class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2"
      >
        <div class="text-3xl mt-2 font-bold sm:ml-3 lg:hidden block">
          PRIVACY POLICY
        </div>
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
import { ref } from 'vue';
import UBreadcrumbs from '~/components/UBreadcrumbs.vue';
import PageItems from '~/components/PageItems.vue';

useHead({
  title: 'Privacy Policy',
});

const breadCrumbs = [{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }];

const pageItems = [
  { label: 'XXX', id: '#XX' },
  { label: 'XXX', id: '#XX' },
  { label: 'XXX', id: '#XX' },
];

let date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-04-06'))
);
</script>

<style scoped>
.list-set {
  counter-reset: item;
}

.list-set > li::before {
  content: counters(item, "-") ". ";
  counter-increment: item;
}
</style>
