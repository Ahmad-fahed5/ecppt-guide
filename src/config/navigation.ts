import { kbSections } from './knowledgeBase';

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const headerNav: NavItem[] = [
  { title: 'Dashboard', href: '/' },
  { title: 'Roadmap', href: '/roadmap' },
  { title: 'Knowledge Base', href: '/guides' },
  { title: 'Methodology', href: '/methodology' },
  { title: 'Toolbox', href: '/toolbox' },
  { title: 'Exam Prep', href: '/exam-prep' },
];

const kbNavItems: NavItem[] = kbSections.map((section) => ({
  title: section.shortLabel,
  href: `/guides/${section.slug}`,
  icon: section.icon,
}));

export const sidebarGroups: NavGroup[] = [
  {
    title: 'Start here',
    items: [
      { title: 'Dashboard', href: '/', icon: 'grid' },
      { title: 'Roadmap', href: '/roadmap', icon: 'route' },
    ],
  },
  {
    title: 'Knowledge base',
    items: kbNavItems,
  },
  {
    title: 'Practice',
    items: [
      { title: 'Methodology', href: '/methodology', icon: 'compass' },
      { title: 'Toolbox', href: '/toolbox', icon: 'wrench' },
      { title: 'Playbooks', href: '/playbooks', icon: 'clipboard-check' },
      { title: 'Cheat Sheets', href: '/cheat-sheets', icon: 'grid' },
      { title: 'Reporting', href: '/reporting', icon: 'file' },
    ],
  },
  {
    title: 'Exam preparation',
    items: [
      { title: 'Exam Preparation', href: '/exam-prep', icon: 'graduation-cap' },
      { title: 'Practical Insights', href: '/insights', icon: 'lightbulb' },
    ],
  },
  {
    title: 'Personal',
    items: [
      { title: 'My Notes', href: '/my-notes', icon: 'pen' },
      { title: 'Progress', href: '/progress', icon: 'gauge' },
      { title: 'Lab Tracker', href: '/lab-tracker', icon: 'flask' },
    ],
  },
];

export function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}
