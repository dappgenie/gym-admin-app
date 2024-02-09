<script setup lang="ts">
import  {ClientsAccordionItem,MarketingAccordionItem,ReportsAccordionItem,TrainingAccordionItem}  from '~/constants/sidebar_menu'
import LOGO from '~/public/assets/dappgenie_logo.png'

  const links = 
  [{
    label: 'Dashboard',
    icon: 'i-heroicons-bars-4',
  },
  {
    label: 'Enquiries',
    icon: 'i-heroicons-phone',
    
  },
  {
    label: 'Marketing',
    icon: 'i-heroicons-megaphone',
    accordionItem:MarketingAccordionItem
  },
  {
    label: 'Clients',
    icon: 'i-heroicons-users',
    accordionItem:ClientsAccordionItem
    
  },
  {
    label: 'Training',
    icon: 'i-heroicons-clock',
    accordionItem:TrainingAccordionItem
    
  },
  {
    label: 'Staff',
    icon: 'i-heroicons-user',
    
  },
  {
    label: 'Reports',
    icon: 'i-heroicons-clipboard-document-list',
    accordionItem:ReportsAccordionItem
    
  },
  {
    label: 'Setup',
    icon: 'i-heroicons-cog-6-tooth',
    
  },
]

interface AccordionItem {
  label: string;
  defaultOpen?: boolean;
  content: {
    title: string;
    link: string;
  }[];
}

const route = useRoute();
const router = useRouter();
const divActivate = ref(false)
const labelName = ref('')
const accordionData = ref<AccordionItem>()
const target = ref<HTMLDivElement>()

onClickOutside(target, () => {
  // if (props.onClickOutside)
  //   emit('close')
  divActivate.value = false
})

const activateDivFunction=(link:any)=>{
  if(link.accordionItem){
    divActivate.value = !divActivate.value
    labelName.value=link.label
    accordionData.value=link.accordionItem
  }
  
}
</script>

<template>
  <div class="flex justify-start   ">
    <div class="main-div flex  justify-around bg-[#3C3C3C]  fixed">
      <div class="h-[22vh]  items-center text-center flex">
        <img class="m-auto" :src="LOGO" alt="Logo">
      </div>
      <div>
        <UVerticalNavigation :ui="{
          wrapper:
            ' space-y-1  ',
          base: ' block flex lg:leading-6 before:hidden !hover:text-[black]',
          padding: '',
          rounded: 'rounded-md',
          font: '',
          ring: '',
          inactive:
            'border-transparent  hover:text-gray-0  text-secondary-50 '
        }" :links="links" class="flex justify-between flex-col items-center text-center ">
          <template  #icon="{ link }">

            <div class="flex justify-between items-center m-auto">
              <div class="nav-item " @click="activateDivFunction(link)">
                <UIcon class="icon-style " :name="link.icon" />
                <span class="group-hover:text-primary ">{{ link.label }}</span>
              </div>
              <UIcon v-if="link.accordionItem" class="icon-style duration-300 ease-in-out" 
              :class="!divActivate ? 'rotate-0' : 'rotate-180'"  name="i-heroicons-chevron-right" />
            </div>
          </template>
          <template  #default>

            <div >
              <div class="   invisible" >
                <!-- <UIcon class="icon-style " :name="link.icon" /> -->
                <!-- <span class="group-hover:text-primary ">{{ link.label }}</span> -->
              </div>
            </div>
          </template>
        </UVerticalNavigation>
      </div>
    </div>
    <!-- <div ref="target" v-if="divActivate" class="bg-[yellow] max-w-[220px] w-[200px] transition fade-in duration-200 hover:ease-in h-full left-36 fixed">
      114
    </div> -->
    <transition name="fade">
      <div v-if="divActivate" ref="target" class="bg-[#292929] 	div-class shadow-md h-full left-36 fixed">
        <MenuSection :accordion-item="accordionData" :label-name="labelName"/>
      </div>
    </transition>
  </div>
</template>

<!-- class="font-bold text-white duration-300 ease-in-out"
:class="isOpen ? 'rotate-0' : 'rotate-180'" -->

<style scoped>
.main-div {
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  box-shadow: 1px 4px 3.8px 0px rgba(0, 0, 0, 0.25);
  @apply h-[100vh] overflow-hidden text-start whitespace-nowrap  truncate justify-start flex-col rounded-lg space-y-1 w-[14vw];
}

.nav-item {
  @apply flex items-center w-full text-white flex-col cursor-pointer rounded-md p-3 text-sm lg:text-base font-semibold;
}




.div-class {
  @apply max-w-[220px] w-[200px] delay-150 z-[1];
}





.icon-style {
  /* margin-right: 0.5rem; */
  color: white;
  height: 1.75rem;
  width: 1.75rem;
}
</style>
