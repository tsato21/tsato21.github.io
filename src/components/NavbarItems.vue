<template>
    <li class="nav-item">
        <NuxtLink to="/about/about" class="nav-link mr-3 nav-item-text" @click.native="$emit('close')">
            About
        </NuxtLink>
    </li>
    <li class="nav-item">
        <NuxtLink to="/google-add-ons/google-add-ons" class="nav-link mr-3 nav-item-text" @click.native="$emit('close')">
            Google's Add-ons
        </NuxtLink>
    </li>
</template>

<script>
export default {
name: 'NavbarItems'
}
</script>