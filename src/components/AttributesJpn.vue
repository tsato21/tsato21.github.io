<template>
  <div id="attributes" class="text-2xl font-bold">
    <span class="group/item">
      <NuxtLink to="#attributes" @click.prevent="scrollTo('attributes')"
        >表記</NuxtLink
      >
      <span class="invisible group-hover/item:visible text-blue-300 text-base"
        >#</span
      >
    </span>
  </div>
  <div class="py-3 text-lg">
    <ul class="list-disc list-inside space-y-2">
      <li>
        このツールのオリジナルアイコンは
        <a
          :href="attributes.href"
          :title="attributes.title"
          target="_blank"
          class="text-lightblue underline hover:text-darkblue"
        >
          {{ attributes.hyperLinkedDescription }} </a
        >によって作成され、
        <a
          href="https://github.com/tsato21"
          target="_blank"
          class="text-lightblue underline hover:text-darkblue"
          >tsato21</a
        >によって修正されています。
      </li>
      <li>
        このツールのバナーは、上記のアイコンを使用して、
        <a
          href="https://www.canva.com/"
          target="_blank"
          class="text-lightblue underline hover:text-darkblue"
        >
          Canva</a
        >によって作成されました。
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  attributes: {
    type: Object as () => {
      href: string;
      title: string;
      hyperLinkedDescription: string;
    },
    required: true,
  },
});

const scrollTo = inject('scrollTo') as (id: string) => Promise<void>;
</script>
