
<script lang="ts" setup>

</script>


<template>
  <!-- <div class="w-full flex justify-between bg-white">
    <SideBar/>
    <div class="sub_div">
      <Header/>
      <div><slot name="content" /></div>
    </div>
  </div> -->



  <div class="flex justify-between">
      <SideBar />
      <div class="w-[88vw]">
        <Header />
        <div class="div-class">
          <div class="w-full relative">
            <slot name="content"  />
          </div>
        </div>
      </div>
    </div>

</template>


<style scoped>
  .sub_div{
    @apply flex justify-between w-[88vw];
  }

  .slot-class {
  @apply relative text-center;
}

.div-class {
  /* @apply w-[75vw] xl:w-[77vw] fixed right-[1rem] top-[5rem]; */
}
</style>