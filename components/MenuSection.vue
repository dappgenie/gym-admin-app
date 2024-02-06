    
<script lang="ts" setup>
interface MenuSectionProps {
  labelName: string
}

const props = defineProps<MenuSectionProps>()


interface AccordionItem {
  label: string;
  defaultOpen?: boolean;
  content: {
    title: string;
    link: string;
  }[];
}

const items: AccordionItem[] = [
{ label: 'Item 1', defaultOpen:true, content: [{ title: 'Content can also', link: '/login' }, { title: 'Content can also', link: '/login' }] },
  { label: 'Item 2', content: [{ title: 'Content can also', link: '/login' }, { title: 'Content can also', link: '/login' }] },
  // ...other items
];

</script>
<template>
  <div class=" text-white ">
    <div>{{ labelName }}</div>
    <div>
      <UAccordion :items="items">
        <template #default="{ item, index, open }">
          <UButton color="gray" variant="ghost" class=" text-white " 
            :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
  
            <span class="truncate"> {{ item.label }}</span>
  
            <template #trailing>
              <UIcon name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 ms-auto transform transition-transform duration-200" :class="[open && 'rotate-90']" />
            </template>
          </UButton>
        </template>
        <template #item="{ item }">
          <!-- <div v-for="data of item">
  
          </div> -->
          <a v-for="data of item.content" class="flex flex-col" :key="data.title" :href="data.link">
            <!-- <a v-for="data of item.content" class="flex flex-col" :key="data"> -->
            {{ data.title }}
          </a>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<style></style>