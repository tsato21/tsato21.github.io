<template>
<footer class="shadow-sm bg-gray-400 px-5 py-8 text-white">
    <ul class="flex justify-center space-x-4">
        <li>
            <a href="https://github.com/tsato21" target="_blank" class="text-white no-underline flex items-center">
                <Icon name="grommet-icons:github" class="mr-2" /> GITHUB
            </a>
        </li>
        <li>
            <NuxtLink to="/others/terms-conditions" class="text-white no-underline flex items-center">
                <Icon name="grommet-icons:tag" class="mr-2"/> TERMS & CONDITIONS
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/others/privacy-policy" class="text-white no-underline flex items-center">
                <Icon name="grommet-icons:tag" class="mr-2"/> PRIVACY POLICY
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/about/contact/contact" class="text-white no-underline flex items-center">
                <Icon name="grommet-icons:mail" class="mr-2"/> CONTACT
            </NuxtLink>
        </li>
    </ul>
</footer>
</template>