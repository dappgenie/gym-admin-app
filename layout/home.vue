<template>
  <!-- by using definePageMeta we can choose the layout in the page -->
  <main class="slot-class h-full w-20% bg-[red]">
    <div>
      <Header />
      <div class="flex justify-between">
          <!-- <SideBar /> -->

        <div class="w-full ">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
  
<style scoped>
/* *{
  border: red solid 1px
} */
.slot-class {
  @apply text-center;
}

.div-class {
  @apply w-[75vw] xl:w-[77vw] fixed right-[1rem] top-[5rem];
}
</style>
  