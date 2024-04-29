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
          TERMS & CONDITIONS
        </div>
        <div class="mb-5 p-5">
          <!-- contents -->
          <div class="mb-3">
            <div class="text-2xl font-bold border-b-2 pb-3" id="introduction">
              Thank you for coming to Scripts Showcase!
            </div>
            <div class="py-3">
              <p>
                The following Terms and Conditions (“Terms”) govern your access
                to and use of this Scripts ShowCase website at
                https://tsato21.github.io/ (“Website”). The scope of these Terms
                extend also to the google apps script tools mentioned explicitly
                in this Website ("Services") to which I, Taiga SATO, the sole
                administrator of this Website, have the right to distribute.
                Please read these Terms carefully. By accessing this Website or
                using any of the Services, You agree to be bound by these Terms.
                You also confirm You have read and agreed to My Privacy Policy
                at https://tsato21.github.io/privacy-policy/.
              </p>
            </div>

            <div class="py-5 bg-light-blue-400">
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
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold border-b-2 pb-3" id="services">
              Services
            </div>
            <div class="py-3">
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
          </div>

          <div class="mb-3">
            <div
              class="text-2xl font-bold border-b-2 pb-3"
              id="use-of-services"
            >
              Use of the Services
            </div>
            <div class="py-3">
              <p>
                You may use the Services, free of charge, as long as you agree
                and comply to these Terms. Note that if You are installing the
                Services via a hosting website, You will also be bound by the
                terms of that website; for example, if You are going to install
                a Service via the Chrome Web Store, You must agree to the Google
                Chrome Web Store Terms of Service.
              </p>
            </div>
          </div>

          <div class="mb-3">
            <div
              class="text-2xl font-bold border-b-2 pb-3"
              id="restriction-of-services"
            >
              Restrictions on Use
            </div>
            <div class="py-3">
              <ul class="list-disk list-inside">
                In addition to all other terms and conditions contained herein,
                You shall not and shall not permit others to:
                <li>
                  use the Service for spamming or any other illegal or
                  unauthorized purpose or engage in illegal or deceptive trade
                  practices;
                </li>
                <li>
                  otherwise use the Service in violation of any laws in Your
                  jurisdiction (including but not limited to copyright laws).
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold border-b-2 pb-3" id="copyright">
              Copyright
            </div>
            <div class="py-3">
              <p>
                You may use the Services, free of charge, as long as you agree
                and comply to these Terms. Note that if You are installing the
                Services via a hosting website, You will also be bound by the
                terms of that website; for example, if You are going to install
                a Service via the Chrome Web Store, You must agree to the Google
                Chrome Web Store Terms of Service.
              </p>
            </div>
          </div>
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
          TERMS & CONDITIONS
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
  title: 'Terms & Conditions',
});
const breadCrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Terms & Conditions' },
];

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

<style scoped></style>
