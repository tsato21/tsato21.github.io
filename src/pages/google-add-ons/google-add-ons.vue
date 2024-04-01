<template>
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div>
        This is the page for google ad-ons.
    </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue';

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Google Add-ons', active: true },
];
</script>