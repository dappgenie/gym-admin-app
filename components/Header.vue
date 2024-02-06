<script lang="ts" setup>
const items = [
  [{
    label: 'Profile',
  }]
]
const items1 = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
  }], [{
    label: 'Documentation',
  }, {
    label: 'Changelog',
  }, {
    label: 'Status',
  }], [{
    label: 'Sign out',

  }]
]

</script>


<template>
  <div class="header-class py-7  whitespace-nowrap truncate flex-row fixed  flex justify-end">

    <div class="flex space-x-2 justify-end text-primary float-right">
      <UIcon class="h-7 w-7" name="i-heroicons-magnifying-glass" />
      <UIcon class="h-7 w-7" name="i-heroicons-plus-circle" />
      <UIcon class="h-7 w-7" name="i-heroicons-user-circle" />
      <UIcon name="i-heroicons-light-bulb" />

    </div>
  </div>
</template>



<style scoped>
/* * {
  border: red solid 1px
} */

.header-class {
  @apply w-[inherit] bg-white shadow-md rounded-lg;
}
</style>