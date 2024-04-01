<template>
    <li class="nav-item">
        <NuxtLink to="/" class="nav-link mr-3" @click.native="$emit('close')">
            Home
        </NuxtLink>
    </li>
    <li class="nav-item">
        <NuxtLink to="/about" class="nav-link mr-4" @click.native="$emit('close')">
            About
        </NuxtLink>
    </li>
    <!-- Add more links here -->
</template>

<script>
export default {
name: 'NavbarItems'
}
</script>