
<script lang="ts" setup>

</script>


<template>
  <div class="w-full flex justify-between bg-white">
    <SideBar/>
    <div class="sub_div">
      <Header/>
      <slot name="content" />
    </div>
  </div>
</template>


<style scoped>
  .sub_div{
    @apply flex justify-between w-[88vw];
  }
</style>