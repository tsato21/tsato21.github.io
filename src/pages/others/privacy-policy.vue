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
          PRIVACY POLICY
        </div>
        <div class="mb-2 p-5 bottom-shadow">
          <!-- contents -->
          <p>
            Your privacy holds utmost significance to Me. This Privacy Policy
            delineates the types of personal information that is gathered and
            how it is utilized.
          </p>
          <br>
          <p>
            Above all, rest assured that I will never disclose Your email
            address or any other personal details to anyone without Your
            explicit permission.
          </p>
        </div>
        <div class="py-1">
          <section>
            <div class="mb-3">
              <div id="definition" class="text-2xl font-bold">
                <span class="group/item">
                  <NuxtLink to="#definition" @click.prevent="scrollTo('definition')">1. Definition</NuxtLink>
                  <span
                    class="invisible group-hover/item:visible text-blue-300 text-base"
                  >  #</span>
                </span>
              </div>
            </div>
          </section>
          <div class="ms-2">
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>I</strong> and <strong>Me</strong> refer to
                <NuxtLink
                  to="https://github.com/tsato21"
                  class="text-lightblue underline hover:text-darkblue"
                  target="_blank"
                  external
                >
                  Taiga SATO
                </NuxtLink>, the sole administrator of this Website.
              </li>
              <li>
                <strong>Website</strong> refers to this website at
                <NuxtLink
                  to="https://tsato21.github.io/"
                  class="text-lightblue underline hover:text-darkblue"
                  target="_blank"
                >
                  https://tsato21.github.io/
                </NuxtLink>.
              </li>
              <li>
                <strong>Services</strong> collectively denotes this Website
                along with the tools explicitly outlined on this Website, over
                which I hold distribution rights.
              </li>
              <li>
                <strong>You</strong> and <strong>Your</strong> refers to the
                users or viewers of the Services.
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-3">
          <div id="data-collection" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#data-collection" @click.prevent="scrollTo('data-collection')">2. Data Collection</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>

          <div id="github" class="text-xl font-bold my-5">
            <span class="group/item">
              <NuxtLink to="#github" @click.prevent="scrollTo('github')">2-1. Github</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #
              </span>
            </span>
          </div>

          <div class="my-5 ms-2">
            <p>
              Other than the data collection explained below, GitHub may
              collect user data in accordance with its own privacy policy.
              For more details, please refer to
              <NuxtLink
                to="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                target="blank"
                class="text-lightblue underline hover:text-darkblue"
                external
              >
                GitHub's privacy policy
              </NuxtLink>.
            </p>
          </div>
        </div>

        <div class="mb-3">
          <div id="google-analytics" class="text-xl font-bold">
            <span class="group/item">
              <NuxtLink to="#google-analytics">2-2. Google Analytics</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #
              </span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              Google Analytics is a tool I'm considering to use to gain
              insights into how visitors interact with this Website. It
              utilizes cookies and web beacons to report on site trends
              without personally identifying individual visitors. It tracks
              the number of installations of the Services hosted on the
              Chrome Web Store and Google Workspace Marketplace that I am
              thinking to publish some of my Services in. For more
              information on how Google uses data when you use sites or apps
              that utilize Google Analytics, please refer to
              <NuxtLink
                to="https://policies.google.com/technologies/partner-sites"
                target="blank"
                class="text-lightblue underline hover:text-darkblue"
                external
              >
                HOW GOOGLE USES INFORMATION FROM SITES OR APPS THAT USE OUR
                SERVICES
              </NuxtLink>.
            </p>
          </div>
        </div>

        <div class="mb-3">
          <div id="cookies-web-beacons" class="text-xl font-bold">
            <span class="group/item">
              <NuxtLink to="#cookies-web-beacons" @click.prevent="scrollTo('cookies-web-beacons')">2-3. Cookies and Web Beacons</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #
              </span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              If you prefer to disable cookies, you have the option to do
              this through your individual browser settings. Guidance on how
              to do this can be located on the respective websites of each
              browser. Please note that as we are considering the use of
              Google Analytics, which utilizes cookies and web beacons,
              disabling cookies may impact how you are able to interact with
              our website and the services we may offer.
            </p>
          </div>
        </div>

        <div class="mb-3">
          <div id="contact-information" class="text-xl font-bold">
            <span class="group/item">
              <NuxtLink to="#contact-information" @click.prevent="scrollTo('contact-information')">2-4. Contact Information</NuxtLink>
              <span
                class="invisible group-hover/item:visible text-blue-300 text-base"
              >
                #</span>
            </span>
          </div>
          <div class="my-5 ms-2">
            <p>
              When You
              <NuxtLink
                to="/contact/contact"
                target="blank"
                class="text-lightblue underline hover:text-darkblue"
              >
                contact Me
              </NuxtLink>, I will utilize Your provided name and email address solely
              for the purpose of responding to Your inquiry. Rest assured,
              Your information will not be shared with any third parties. By
              default, all correspondence, including Your emails and My
              responses, will be stored indefinitely. If You prefer for
              these correspondences to be removed, You may request so by
              specifying which communications You would like to be deleted.
            </p>
          </div>
        </div>

        <div class="mb-3">
          <div id="contact" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#contact" @click.prevent="scrollTo('contact')">3. Contact</NuxtLink>
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
        </div>

        <div class="mb-3">
          <div id="history" class="text-2xl font-bold">
            <span class="group/item">
              <NuxtLink to="#history" @click.prevent="scrollTo('history')">4. History</NuxtLink>
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
        </div>
        <div class="my-5">
          <p>
            <Icon name="material-symbols:calendar-month-sharp" /> Last updated:
            {{ date }}
          </p>
        </div>
      </div>

      <!-- Third part -->
      <div
        class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2"
      >
        <div class="text-3xl mt-2 font-bold sm:ml-3 lg:hidden block">
          PRIVACY POLICY
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
  title: 'Privacy Policy'
})

const breadCrumbs = [{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]

const pageItems = [
  {
    label: 'Definition',
    id: 'definition'
  },
  {
    label: 'Data Collection',
    id: 'data-collection',
    subItems: [
      { label: 'Github', id: 'github' },
      { label: 'Google Analytics', id: 'google-analytics' },
      { label: 'Cookies and Web Beacons', id: 'cookies-web-beacons' },
      { label: 'Contact Information', id: 'contact-information' }
    ]
  },
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
