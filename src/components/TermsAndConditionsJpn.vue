<template>
  <div id="terms-conditions" class="text-2xl font-bold">
  <span class="group/item">
    <NuxtLink to="#terms-conditions" @click.prevent="scrollTo('terms-conditions')">利用規約</NuxtLink>
    <span class="invisible group-hover/item:visible text-blue-300 text-base">#</span>
  </span>
</div>
  <div class="py-3">
    <p class="text-lg mt-4">
      このウェブサイトの利用は、<NuxtLink
        to="/others/terms-conditions"
        class="text-lightblue underline hover:text-darkblue"
      >
        利用規約
      </NuxtLink>に基づいて行われることにご注意ください。(*注: 英語で記載)
    </p>
  </div>
</template>

<script setup lang="ts">

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>

</script>
