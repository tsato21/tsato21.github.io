<template>
  <div id="terms-conditions" class="text-2xl font-bold">
    <span class="group/item">
      <NuxtLink to="#terms-conditions" @click.prevent="scrollTo('terms-conditions')">Terms and Conditions</NuxtLink>
      <span class="invisible group-hover/item:visible text-blue-300 text-base">#</span>
    </span>
  </div>
  <div class="py-3">
    <p class="text-lg mt-4">
      Please note that your use of this website is subject to the
      <NuxtLink
        to="/others/terms-conditions"
        class="text-lightblue underline hover:text-darkblue"
      >
        Terms and Conditions.
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>

</script>
