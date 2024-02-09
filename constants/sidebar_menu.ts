
interface AccordionItem {
  label: string;
  defaultOpen?: boolean;
  content: {
    title: string;
    link: string;
  }[];
}

export const  MarketingAccordionItem=[
  {
  label: 'Communication',
  defaultOpen : true,
  content: [
    {    title: 'E-mail',   link: '/mail',   },
    {  title: 'SMS',  link: '/SMS',},
    {  title: 'Push Notification', link: '/Push Notification', }
   ]
  },
  {
  label: 'Engagement',
  content: [
    {    title: 'Offers',   link: '/Offers',   },
   ]
  },
  {
  label: 'Data',
  content: [
    {    title: 'Unqualified Data',   link: '/mail',   },
    {  title: 'Custom Mailer List',  link: '/SMS',},
   ]
  },
]

export const  ClientsAccordionItem=[
  {
  label: 'Validity Based',
  defaultOpen : true,
  content: [
    {    title: 'All Clients',   link: '/clients',   },
    {  title: 'Active Clients',  link: '/active-lients',},
    {  title: 'Inactive Clients', link: '/inactive-clients', }
   ]
  },
  {
  label: 'Purchased Type Based',
  content: [
    {    title: 'Memberships',   link: '/memberships',   },
    {    title: 'Single Sessions/1 Day Pass',   link: '/single-sessions-or-1-day-pass',   },
    {    title: 'Events',   link: '/events',   },
    {    title: 'Turfs',   link: '/turfs',   },
    {    title: 'Store',   link: '/store',   },
   ]
  },
  {
  label: 'Service Category',
  content: [
    {    title: 'General',   link: '/general',   },
    {    title: 'Personal Training',   link: '/personal-training',   },
    {    title: 'Group Training',   link: '/group-training',   },
    {    title: 'Nutrition Counselling',   link: '/nutrition-counselling',   },
    {    title: 'Teachers Training',   link: '/teachers-training',   },
    {    title: 'Workshops / Events',   link: '/workshops-or-events',   },
    {    title: 'Trial',   link: '/trial',   },
    {    title: 'PT Trial',   link: '/pt-trial',   },
   ]
  },
  {
  label: 'Behavior Based',
  content: [
    {    title: 'Referrers',   link: '/referrers',   },
    {    title: 'Irregular Member',   link: '/irregular-member',   },
    {    title: 'One-Time Purchasers',   link: '/one-time-purchasers',   },
   ]
  },
  {
  label: 'Gender Based',
  content: [
    {    title: 'Male',   link: '/male',   },
    {    title: 'Female',   link: '/female',   },
    {    title: 'Not Specified',   link: '/not-specified',   },
   ]
  },
  {
  label: 'Geography Based',
  content: [
    {    title: 'Multi-Club Clients',   link: '/multi-club-clients',   },
   ]
  },
  {
  label: 'Custom Groups',
  content: [
    {    title: 'Batches',   link: '/batches',   },
    {    title: 'Add Batches',   link: '/add-batches',   },
   ]
  },
  {
  label: 'Archived',
  content: [
    {    title: 'Archived Clients',   link: '/archived-clients',   },
   ]
  },
]

export const  TrainingAccordionItem=[
  {
  label: 'Training',
  defaultOpen : true,
  content: [
    {    title: 'PT Dashboard',   link: '/pt-dashboard',   },
    {  title: 'Exercise Library',  link: '/exercise-library',},
    {  title: 'Meal Plan Templates',  link: '/meal-plan-templates',},
    {  title: 'Assessment Templates',  link: '/assessment-templates',},
   ]
  },
]

export const  ReportsAccordionItem=[
  {
  label: 'General Reports',
  defaultOpen : true,
  content: [
    {    title: 'Central Report',   link: '/central-report',   },
    {    title: 'Biometric',   link: '/biometric',   },
    {    title: 'Vaccination Report',   link: '/vaccination-report',   },
    {    title: 'Insurance Report',   link: '/insurance-report',   },
   ]
  },
  {
  label: 'Marketing',
  content: [
    {    title: 'Offers',   link: '/Offers',   },
    {    title: 'Discount Code',   link: '/discount-code',   },
    {    title: 'Lead Source',   link: '/lead-source',   },
    {    title: 'Referral',   link: '/referral',   },
    {    title: 'SMS Report',   link: '/sms-report',   },
    {    title: 'Loyalty Point Usage',   link: '/loyalty-point-usage',   },
   ]
  },
  {
  label: 'Sales',
  content: [
    {    title: 'DSR Report',   link: '/dsr-report',   },
    {    title: 'Revenue',   link: '/revenue',   },
    {    title: 'Expected Revenue',   link: '/expected-revenue',   },
    {    title: 'Revenue Vs Target',   link: '/revenue-vs-target',   },
    {    title: 'Revenue -  Month Till Date',   link: '/revenue-month-till-date',   },
    {    title: 'Service Sales',   link: '/service-sales',   },
    {    title: 'Service Type',   link: '/service-type',   },
   ]
  },
  {
  label: 'Appointments & Trials',
  content: [
    {    title: 'Unqualified Data',   link: '/mail',   },
    {  title: 'Custom Mailer List',  link: '/SMS',},
   ]
  },
  {
  label: 'Finance',
  content: [
    {    title: 'Unqualified Data',   link: '/mail',   },
    {  title: 'Custom Mailer List',  link: '/SMS',},
   ]
  },
  {
  label: 'Client Management',
  content: [
    {    title: 'Unqualified Data',   link: '/mail',   },
    {  title: 'Custom Mailer List',  link: '/SMS',},
   ]
  },
  {
  label: 'Staff',
  content: [
    {    title: 'Unqualified Data',   link: '/mail',   },
    {  title: 'Custom Mailer List',  link: '/SMS',},
   ]
  },
  {
  label: 'Inventory',
  content: [
    {    title: 'Unqualified Data',   link: '/mail',   },
    {  title: 'Custom Mailer List',  link: '/SMS',},
   ]
  },
  {
  label: 'Expense',
  content: [
    {    title: 'Unqualified Data',   link: '/mail',   },
    {  title: 'Custom Mailer List',  link: '/SMS',},
   ]
  },
  {
  label: 'Training',
  content: [
    {    title: 'Unqualified Data',   link: '/mail',   },
    {  title: 'Custom Mailer List',  link: '/SMS',},
   ]
  },
]

