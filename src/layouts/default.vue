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
                <li><a href="https://github.com" target="_blank" class="text-black no-underline">GITHUB</a></li>
                <li><a href="/terms" class="text-black no-underline">TERMS & CONDITIONS</a></li>
                <li><a href="/privacy" class="text-black no-underline">PRIVACY POLICY</a></li>
                <li><a href="/contact" class="text-black no-underline">CONTACT</a></li>
            </ul>
        </footer>
    </div>
</template>

<script setup lang="ts">
</script>

<style>

</style>