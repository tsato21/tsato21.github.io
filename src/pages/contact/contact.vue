<template>
  <div>
    <UBreadcrumbs :bread-crumbs="breadCrumbs" />
    <div class="flex justify-center">
      <div class="flex flex-col items-start">
        <div class="text-3xl mt-2 font-bold sm: ml-5">
          Contact
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd_lsjQP6Ay5xL_EqbBc5_ppoK42R_Auehu23aCuhJ6zrtC_Q/viewform?embedded=true"
          width="640"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >Loading…</iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UBreadcrumbs from '~/components/UBreadcrumbs.vue'

const breadCrumbs = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about/about' },
  { label: 'Contact' }
]

useHead({
  title: 'About'
})
</script>

<style scoped>
.bottom-shadow {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
