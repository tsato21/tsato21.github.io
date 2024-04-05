<template>
    <div>
        <UBreadcrumb :links="links"/>
        <div class="text-3xl pt-5 mt-2 font-bold">Google Add-ons</div>
    </div>
</template>

<script setup lang="ts">
import UBreadcrumb from '@/components/UBreadcrumbs';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Google Add-ons'}
];
useHead({
    title: "Google Add-ons"
});
</script>