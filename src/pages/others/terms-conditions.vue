<template>
  <div>
    <UBreadcrumbs :bread-crumbs="breadCrumbs" />
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
            <div id="introduction" class="text-2xl font-bold">
              <span class="group/item">
                <NuxtLink to="#intro" @click.prevent="scrollTo('intro')">Thank you for coming to Scripts Showcase!</NuxtLink>
                <span
                  class="invisible group-hover/item:visible text-blue-300 text-base"
                >
                  #</span>
              </span>
            </div>
            <div class="my-5 ms-2">
              <p>
                The following Terms and Conditions (“Terms”) govern your access
                to and use of this Scripts ShowCase website at
                <NuxtLink
                  to="https://tsato21.github.io/"
                  class="text-lightblue underline hover:text-darkblue"
                  target="_blank"
                >
                  https://tsato21.github.io/ (“Website”)
                </NuxtLink>. The scope of these Terms extend also to all of the services
                such as the google apps script tools mentioned explicitly in
                this Website ("Services") to which I, Taiga SATO, the sole
                administrator of this Website, have the right to distribute.
                Please read these Terms carefully. By accessing this Website or
                using any of the Services, You agree to be bound by these Terms.
                You also confirm You have read and agreed to My Privacy Policy
                at
                <NuxtLink
                  to="/others/privacy-policy"
                  class="text-lightblue underline hover:text-darkblue"
                  target="_blank"
                >
                  https://tsato21.github.io/privacy-policy/
                </NuxtLink>.
              </p>
            </div>

            <div class="py-5 bg-blue-100">
              <p class="text-sm p-2">
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

          <div id="services" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#services" @click.prevent="scrollTo('services')">Services</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              This Website functions as a central point for a variety of
              open-source solutions that I maintain. The term "Service" or
              "Services" within these Terms pertains to any or all of such
              solutions specifically mentioned on this Website.
            </p>
          </div>

          <div id="use-of-services" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#use-of-services" @click.prevent="scrollTo('use-of-services')">Use of the Services</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              You may use the Services, free of charge, as long as you agree
              and comply to these Terms. Note that if You are installing the
              Services via a hosting website, You will also be bound by the
              terms of that website; for example, if You are going to use
              a Service via Google Apps Script, You must agree to the Google
              Apps Script Terms of Service.
            </p>
          </div>

          <div id="restrictions-of-use" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#restrictions-of-use" @click.prevent="scrollTo('restrictions-of-use')">Restrictions on Use</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="py-3">
            <ul class="list-disc list-inside">
              In conjunction with all other stipulations and conditions
              outlined in this page, you are prohibited from, and should not
              allow others to:
              <li class="ms-3">
                Utilize the Service for unsolicited communications or any
                unlawful or unapproved activities, or participate in unlawful
                or misleading commercial behaviors;
              </li>
              <li class="ms-3">
                Use the Service in any other way that contravenes any laws
                applicable in your jurisdiction (including, but not limited
                to, laws related to copyright).
              </li>
            </ul>
          </div>

          <div id="copyright" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#copyright" @click.prevent="scrollTo('copyright')">Copyright</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            I retain copyright to the content of this Website and all the
            Services (open-sourced), released under
            <NuxtLink
              to="https://creativecommons.org/licenses/by/4.0/"
              class="text-lightblue underline hover:text-darkblue"
              target="_blank"
              external
            >
              CC-BY-4.0
            </NuxtLink>.
          </div>

          <div id="right-to-modify" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#right-to-modify" @click.prevent="scrollTo('right-to-modify')">Right to Modify</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              I hold the authority to revise and alter these Terms. If these
              Terms are changed in a way that significantly impacts your
              rights in relation to the use of the Services, you have the
              option to discontinue your use of the Services. Your ongoing use
              of the Services following any such modifications will be deemed
              as your acceptance of these changes. You can always view the
              most recent version of the Terms at
              <NuxtLink
                to="/others/terms-conditions"
                target="blank"
                class="text-lightblue underline hover:text-darkblue"
              >
                https://tsato21.github.io/others/terms-conditions
              </NuxtLink>.
            </p>
            <p>
              I may also introduce modifications to this Website and the
              Services periodically. Any enhancements, upgrades, additions, or
              new features to the Services ("Updates") will be governed by
              these Terms.
            </p>
          </div>

          <div id="ownership-data-privacy" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#ownership-data-privacy" @click.prevent="scrollTo('ownership-data-privacy')">Ownership of Data and Privacy</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              In the relationship between You and Me, You continue to hold all
              rights, ownership, and interest in any data you process through
              the Services. This includes, but is not limited to, files,
              attachments, text, images, personally identifiable information,
              and other types of content.
            </p>
            <p>
              Should this Website or its Services collect any data, it will be
              treated in a manner that is consistent with our Privacy Policy.
            </p>
          </div>

          <div id="warranty-disclaimer" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#warranty-disclaimer" @click.prevent="scrollTo('warranty-disclaimer')">Warranty Disclaimer</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              THIS WEBSITE AND ITS SERVICES ARE OFFERED "AS IS", WITHOUT ANY
              WARRANTIES, EITHER STATED OR IMPLIED. THIS ENCOMPASSES, BUT IS
              NOT RESTRICTED TO, IMPLIED WARRANTIES OF OWNERSHIP, SUITABILITY
              FOR TRADE, ADEQUACY FOR A SPECIFIC USE, OR NON-VIOLATION OF
              RIGHTS.
            </p>
            <p>
              I DO NOT ASSURE THAT: (I) THE SERVICES WILL BE EXEMPT FROM
              VIRUSES OR OTHER DAMAGING ELEMENTS; (II) THE SERVICES WILL
              OPERATE WITHOUT INTERRUPTIONS OR ERRORS, INCLUDING DURING
              PERIODS OF ROUTINE MAINTENANCE; (III) ANY INFORMATION OR
              GUIDANCE YOU ACQUIRE IN RELATION TO THE SERVICES WILL BE PRECISE
              OR COMPLETE; OR (IV) THE OUTCOMES OF UTILIZING THE SERVICES WILL
              FULFILL YOUR EXPECTATIONS.
            </p>
          </div>

          <div id="limitation-liability" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#limitation-liability" @click.prevent="scrollTo('limitation-liability')">Limitation Liability</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              UNDER NO CIRCUMSTANCES SHALL I BE HELD RESPONSIBLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE
              DAMAGES, OR ANY OTHER DAMAGES WHATSOEVER (INCLUDING, BUT NOT
              LIMITED TO, LOSS OF DATA, LOSS OF PROFITS, INTERRUPTION OF
              BUSINESS, COMPUTER MALFUNCTION, LOSS OF BUSINESS INFORMATION),
              RESULTING FROM OR CAUSED BY YOUR USE OR INABILITY TO USE THE
              SERVICE OR THIS WEBSITE, EVEN IF I HAVE BEEN PREVIOUSLY ADVISED
              OF THE POSSIBILITY OF SUCH DAMAGES. YOUR ONLY AND EXCLUSIVE
              RESOLUTION FOR ANY DISPUTE WITH ME IN RELATION TO ANY OF THE
              SERVICE SHALL BE THE TERMINATION OF THAT SERVICE. UNDER NO
              CIRCUMSTANCES SHALL MY TOTAL LIABILITY TO YOU FOR ANY SERVICE,
              WHETHER DIRECT OR INDIRECT, EXCEED THE FEES YOU HAVE PAID FOR
              THAT SERVICE.
            </p>
            <p>
              Neither party shall be held responsible to the other party or
              any third party for any failure or delay in fulfilling its
              obligations under these Terms when such failure or delay is due
              to any cause beyond the control of the concerned party,
              including, but not limited to, acts of nature, governmental
              actions, fire, or flood, provided that once such events cease,
              the concerned party shall promptly resume or complete the
              performance of its obligations hereunder.
            </p>
          </div>

          <div id="governing-law" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#governing-law" @click.prevent="scrollTo('governing-law')">Governing Law</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              The interpretation, performance, or any breach of these Terms
              will be guided by the laws of Japan. Any questions related to
              these Terms will also be determined by the same laws. Both
              parties irrevocably agree to submit any disputes arising from
              these Terms to the jurisdiction of the local court located in
              Nakano-city, Tokyo, Japan.
            </p>
          </div>
          <div id="contact" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#contact" @click.prevent="scrollTo('contact')">Contact</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>

          <div class="my-4 ms-2">
            <p>
              If You have any questions regarding this Privacy Policy, please
              contact Me through
              <NuxtLink
                to="/contact/contact"
                target="blank"
                class="text-lightblue underline hover:text-darkblue"
              >
                the contact form
              </NuxtLink>.
            </p>
          </div>

          <div id="history" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#history" @click.prevent="scrollTo('history')">History</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>

          <div class="my-4 ms-2">
            <p>
              You can find any changes on this Privacy Policy on
              <NuxtLink
                to="https://github.com/tsato21/tsato21.github.io"
                target="blank"
                class="text-lightblue underline hover:text-darkblue"
              >
                the Github
              </NuxtLink>.
            </p>
          </div>
          <!-- </ol> -->
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
        <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed lg:mr-2">
          <div class="mb-5 pt-5">
            <p class="text-l font-bold p-1 bg-gray-400 text-white">
              <Icon name="map:book-store" /> On this page
            </p>
            <PageItems :page-items="pageItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Terms & Conditions'
})
const breadCrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Terms & Conditions' }
]

const pageItems = [
  { label: 'Introduction', id: 'introduction' },
  { label: 'Services', id: 'services' },
  { label: 'Use of the Services', id: 'use-of-services' },
  { label: 'Restrictions on Use', id: 'restrictions-of-use' },
  { label: 'Copyright', id: 'copyright' },
  { label: 'Right to Modify', id: 'right-to-modify' },
  { label: 'Ownership of Data and Privacy', id: 'ownership-data-privacy' },
  { label: 'Warranty Disclaimer', id: 'warranty-disclaimer' },
  { label: 'Limitation Liability', id: 'limitation-liability' },
  { label: 'Governing Law', id: 'governing-law' },
  { label: 'Contact', id: 'contact' },
  { label: 'History', id: 'history' }
]

const date = ref(
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date('2024-05-05'))
)

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>
</script>
