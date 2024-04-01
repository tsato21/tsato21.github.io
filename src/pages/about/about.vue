<template>
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div>
        About page
    </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue';

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'About', active: true },
];
</script>