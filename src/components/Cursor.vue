<template>
  <div id="cursor" ref="cursor" class="sm:block hidden" />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

// This creates a reactive reference named 'cursor' that will hold an HTMLElement or null.
const cursor = ref<HTMLElement | null>(null)

// The onMounted hook is a lifecycle hook that runs after the component has been mounted in the DOM.
onMounted(() => {
  // This function updates the position of the 'cursor' element to match the position of the mouse cursor.
  const updateCursorPosition = (e: MouseEvent) => {
    // If 'cursor' is not null (i.e., if it refers to an actual element), update the element's position.
    if (cursor.value) {
      cursor.value.style.left = `${e.pageX}px`
      cursor.value.style.top = `${e.pageY}px`
    }
  }

  // This adds an event listener that calls 'updateCursorPosition' whenever the mouse is moved.
  document.addEventListener('mousemove', updateCursorPosition)

  // The onBeforeUnmount hook is a lifecycle hook that runs just before the component is unmounted from the DOM.
  onBeforeUnmount(() => {
    // This removes the event listener when the component is about to be unmounted, to prevent memory leaks.
    document.removeEventListener('mousemove', updateCursorPosition)
  })
})
</script>
