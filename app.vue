<script setup lang="ts">
// const color = useColorMode()
// onMounted(()=>{
//     color.preference = color.value === 'dark' ? 'light' : ''  // Toggles between dark and light color preference
// })
</script>
<template>
    <!-- <NuxtWelcome /> -->

    <VitePwaManifest />
    <NuxtLayout>
        <!-- <Hello /> -->
        <NuxtPage />
    </NuxtLayout>
</template>
<style>
html,
body,
#__nuxt {
    margin: 0;
    padding: 0;
    background: #ebeaea;
}

html.dark {
    background: #0e1424;
    color: white;
}
</style>