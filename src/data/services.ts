import {
  ClipboardList,
  Search,
  CalendarDays,
  Headset,
  FolderOpen,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: ClipboardList,
    title: 'Administrative Support',
    description:
      'Assistance with routine administrative tasks, information organization, documentation, and day-to-day business needs.',
  },
  {
    icon: Search,
    title: 'Research & Information Support',
    description:
      'Online research, information gathering, comparison research, and organized summaries based on client requirements.',
  },
  {
    icon: CalendarDays,
    title: 'Scheduling & Coordination',
    description:
      'Help coordinating appointments, schedules, vendors, service providers, and routine business activities.',
  },
  {
    icon: Headset,
    title: 'Customer Support Assistance',
    description:
      'Support with general customer communications, follow-ups, inquiries, and administrative workflows.',
  },
  {
    icon: FolderOpen,
    title: 'Document Organization',
    description:
      'Organizing business documents, records, digital files, forms, and other non-legal administrative materials.',
  },
  {
    icon: Briefcase,
    title: 'Business Operations Support',
    description:
      'Flexible operational assistance for entrepreneurs and small businesses that need additional day-to-day support.',
  },
];

export const serviceOptions = [
  'Administrative Support',
  'Research & Information Support',
  'Scheduling & Coordination',
  'Customer Support Assistance',
  'Document Organization',
  'Business Operations Support',
  'Other / Not Sure',
];
