<template>
  <div id="attributes" class="text-2xl font-bold">
    Attributes
  </div>
  <div class="py-3 text-lg">
    <ul class="list-disc list-inside space-y-2">
      <li>
        The original icon of this tool is created by
        <a
          :href="attributes.href"
          :title="attributes.title"
          target="_blank"
          class="text-lightblue underline hover:text-darkblue"
        >
          {{ attributes.hyperLinkedDescription }} </a>, modified by
        <a
          href="https://github.com/tsato21"
          target="_blank"
          class="text-lightblue underline hover:text-darkblue"
        >tsato21</a>.
      </li>
      <li>
        The banner of this tool is made by
        <a
          href="https://www.canva.com/"
          target="_blank"
          class="text-lightblue underline hover:text-darkblue"
        >
          Canva</a>, using the above icon.
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  attributes: {
    type: Object as () => {
      href: string;
      title: string;
      hyperLinkedDescription: string;
    },
    required: true
  }
})
</script>
