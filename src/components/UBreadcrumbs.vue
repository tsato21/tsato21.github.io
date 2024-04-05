<template>
    <nav aria-label="breadcrumbs">
        <ul class="breadcrumb-list">
            <li v-for="(link, index) in links" :key="index" class="breadcrumb-item">
                <NuxtLink v-if="link.to && index !== links.length - 1" :to="link.to">
                    {{ link.label }}
                </NuxtLink>
                <span v-else-if="index === links.length - 1" class="last-item">
                    {{ link.label }}
                </span>
                <span v-else>
                    {{ link.label }}
                </span>
                <span v-if="index !== links.length - 1" class="separator">></span>
            </li>
        </ul>
    </nav>
</template>

  
  <script setup="ts">
  defineProps({
    links: {
      type: Array,
      required: true
    }
  });
  </script>
  
<style scoped>

</style>
  