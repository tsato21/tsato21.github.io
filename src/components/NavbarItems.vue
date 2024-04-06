<template>
    <li class="nav-item">
        <NuxtLink to="/about/about" class="nav-link mr-3 nav-item-text" @click.native="$emit('close')">
            About
        </NuxtLink>
    </li>
    <li class="nav-item">
        <NuxtLink to="/gas-tools/gas-tools" class="nav-link mr-3 nav-item-text" @click.native="$emit('close')">
            GAS Tools
        </NuxtLink>
    </li>
</template>