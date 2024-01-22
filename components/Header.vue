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
  <div class="header-class py-7  whitespace-nowrap truncate flex-row fixed justify-between flex">
    <div class="flex">
      <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Member Name" trailing-icon="i-heroicons-chevron-down-20-solid" />
      </UDropdown>
      <UInput color="gray" variant="outline" placeholder="Search" />
      <UButton>Go</UButton>

    </div>
    <div>

    </div>
    <div>
      <UDropdown :items="items1" mode="hover" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Gym Owner Name" trailing-icon="i-heroicons-chevron-down-20-solid" />
      </UDropdown>
    </div>
  </div>
</template>



<style scoped>
.header-class {
 @apply w-full;
}
</style>