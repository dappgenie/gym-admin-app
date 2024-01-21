<template>
    <!-- by using definePageMeta we can choose the layout in the page -->
    <main class="slot-class !bg-secondary-100 dark: !bg-secondary-900">
      <div class="flex justify-between">
        <SideBar />
        <div class="flex flex-row justify-between">
          <Header />
          <div class="div-class">
            <UrlPath />
            <div class="w-full relative">
              <slot />
            </div>
          </div>
        </div>
      </div>
      <!-- Placeholder for dynamically inserting content into the layout -->
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
  