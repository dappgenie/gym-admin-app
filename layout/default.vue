<!-- <template>
    <main class="slot-class !bg-secondary-100 dark: !bg-secondary-900">
      <div class="flex absolute bottom-0 justify-between">
        <div class="flex flex-row justify-between">
          <SideBar />
          <div class="div-class">qqq
            <div class="w-full relative">
              <slot />
            </div>
          </div>
        </div>
      </div>
   
    </main>
  </template>
  
  <style scoped>
  .slot-class {
    @apply relative text-center;
  }
  
  .div-class {
    @apply w-[75vw] xl:w-[77vw] fixed right-[1rem] top-[5rem];
  }
  </style>
   -->

<template>
  <!-- by using definePageMeta we can choose the layout in the page -->
  <main class="slot-class h-full  bg-[red]">
    <div>
      <div class="w-20%">
        <Header />
      </div>
      <div class="flex w-80% justify-between">
        <SideBar />

        <div class="w-full ">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
    
<style scoped>
* {
  border: red solid 1px
}

.slot-class {
  @apply text-center;
}

.div-class {
  @apply w-[75vw] xl:w-[77vw] fixed right-[1rem] top-[5rem];
}
</style>
    