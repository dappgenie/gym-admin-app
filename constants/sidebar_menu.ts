
interface AccordionItem {
  label: string;
  defaultOpen?: boolean;
  content: {
    title: string;
    link: string;
  }[];
}

export const links = 
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
    links:[{ title: 'Content can also', link: '/login' },{ title: 'Content can also', link: '/login' }]

  },
  {
    label: 'Clients',
    icon: 'i-heroicons-users',
    
  },
  {
    label: 'Training',
    icon: 'i-heroicons-clock',
    
  },
  {
    label: 'Staff',
    icon: 'i-heroicons-user',
    
  },
  {
    label: 'Reports',
    icon: 'i-heroicons-clipboard-document-list',
    
  },
  {
    label: 'Setup',
    icon: 'i-heroicons-cog-6-tooth',
    
  },
]