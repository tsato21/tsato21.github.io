<template>
  <div ref="cursor" id="cursor"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const cursor = ref<HTMLElement | null>(null);

onMounted(() => {
  const updateCursorPosition = (e: MouseEvent) => {
    if (cursor.value) {
      cursor.value.style.left = `${e.pageX}px`;
      cursor.value.style.top = `${e.pageY}px`;
    }
  };

  document.addEventListener('mousemove', updateCursorPosition);

  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', updateCursorPosition);
  });
});
</script>