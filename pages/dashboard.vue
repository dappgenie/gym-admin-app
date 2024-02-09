
<script lang="ts" setup>
const color = useColorMode()
onMounted(()=>{
  color.preference = color.value === 'dark' ? 'light' : ''  // Toggles between dark and light color preference
})
// definePageMeta({
//   layout: 'home'
// })
</script>


<template>
  <PageLayout>
    <template #content>
      <div class="m-auto h-full bg-[red]">d</div>
    </template>
  </PageLayout>
</template>


<style scoped>
/* * {
  border: red solid 1px;
} */
</style>