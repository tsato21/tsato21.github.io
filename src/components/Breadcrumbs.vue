<template>
    <nav aria-label="breadcrumb" class="py-2">
        <ol class="breadcrumb flex">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item" :class="{ 'font-bold': index === breadcrumbs.length - 1 }">
                <a v-if="!crumb.active" :href="crumb.to">{{ crumb.text }}</a>
                <span v-else>{{ crumb.text }}</span>
            </li>
        </ol>
    </nav>
</template>
  
<script setup>
defineProps({
    breadcrumbs: {
        type: Array,
        required: true
    }
});
</script>
  
<style scoped>
.breadcrumb-item + .breadcrumb-item::before {
    content: " > ";
}
.font-bold {
    font-weight: bold;
}
</style>