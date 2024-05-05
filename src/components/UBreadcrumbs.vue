<template>
  <nav aria-label="breadcrumbs" class="ms-3">
    <ul class="breadcrumb-list">
      <li
        v-for="(breadCrumb, index) in breadCrumbs"
        :key="index"
        class="breadcrumb-item"
      >
        <NuxtLink
          v-if="breadCrumb.to && index !== breadCrumbs.length - 1"
          :to="breadCrumb.to"
        >
          {{ breadCrumb.label }}
        </NuxtLink>
        <span v-else-if="index === breadCrumbs.length - 1" class="last-item">
          {{ breadCrumb.label }}
        </span>
        <span v-else>
          {{ breadCrumb.label }}
        </span>
        <span v-if="index !== breadCrumbs.length - 1" class="separator">></span>
      </li>
    </ul>
  </nav>
</template>

<script setup="ts">
defineProps({
  breadCrumbs: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>
