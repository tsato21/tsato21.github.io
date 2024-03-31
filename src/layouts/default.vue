<template>
    <div class="flex flex-col min-h-screen relative">
        <header class="shadow-sm bg-white p-4 relative">
            <nav class="flex justify-between items-center">
                <h4>
                    <NuxtLink to="/" class="text-xl font-bold text-primary text-black no-underline">
                        Tiger's Scripts Showcase
                    </NuxtLink>
                </h4>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container-lg flex-grow">
            <slot />
        </div>

        <footer class="shadow-sm bg-white p-4">
            <ul class="flex justify-center space-x-4">
                footer
            </ul>
        </footer>
    </div>
</template>

<script setup lang="ts">
</script>

<style>

</style>