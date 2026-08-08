export const kbSectionSlugs = [
  'foundations',
  'info-gathering',
  'web',
  'exploitation',
  'linux-privesc',
  'windows-privesc',
  'active-directory',
  'lateral-movement',
  'pivoting',
  'powershell',
  'methodology',
  'reporting',
] as const;

export type KbSectionSlug = (typeof kbSectionSlugs)[number];

export interface KbSection {
  slug: KbSectionSlug;
  /** Full name used on pages and cards. */
  label: string;
  /** Compact name used in the sidebar. */
  shortLabel: string;
  description: string;
  icon: string;
  /** Roadmap phase this section belongs to. */
  phase: number;
  order: number;
}

export const kbSections: KbSection[] = [
  {
    slug: 'foundations',
    label: 'Foundations',
    shortLabel: 'Foundations',
    description:
      'Core networking, Linux, and lab fundamentals you need before touching a target.',
    icon: 'book-open',
    phase: 0,
    order: 0,
  },
  {
    slug: 'info-gathering',
    label: 'Information Gathering & Scanning',
    shortLabel: 'Info Gathering',
    description:
      'Passive and active reconnaissance, host discovery, Nmap methodology, and enumeration.',
    icon: 'crosshair',
    phase: 1,
    order: 1,
  },
  {
    slug: 'web',
    label: 'Web Application Security',
    shortLabel: 'Web Security',
    description:
      'Web enumeration and the practical vulnerabilities you will actually test for.',
    icon: 'globe',
    phase: 3,
    order: 2,
  },
  {
    slug: 'exploitation',
    label: 'Exploitation',
    shortLabel: 'Exploitation',
    description:
      'Validating findings, Metasploit, payloads, and gaining a foothold in authorized labs.',
    icon: 'zap',
    phase: 4,
    order: 3,
  },
  {
    slug: 'linux-privesc',
    label: 'Linux Privilege Escalation',
    shortLabel: 'Linux PrivEsc',
    description:
      'Systematic Linux privilege escalation from initial enumeration to root.',
    icon: 'terminal',
    phase: 5,
    order: 4,
  },
  {
    slug: 'windows-privesc',
    label: 'Windows Privilege Escalation',
    shortLabel: 'Windows PrivEsc',
    description:
      'Windows privilege escalation paths: services, tokens, and credentials.',
    icon: 'monitor',
    phase: 6,
    order: 5,
  },
  {
    slug: 'active-directory',
    label: 'Active Directory',
    shortLabel: 'Active Directory',
    description:
      'Active Directory fundamentals, enumeration, and the core attack concepts.',
    icon: 'database',
    phase: 7,
    order: 6,
  },
  {
    slug: 'lateral-movement',
    label: 'Lateral Movement',
    shortLabel: 'Lateral Movement',
    description:
      'Moving through the network once you hold credentials or sessions.',
    icon: 'git-branch',
    phase: 8,
    order: 7,
  },
  {
    slug: 'pivoting',
    label: 'Pivoting & Port Forwarding',
    shortLabel: 'Pivoting',
    description:
      'Reaching segmented networks through SSH, SOCKS, Chisel, and Ligolo-ng.',
    icon: 'layers',
    phase: 9,
    order: 8,
  },
  {
    slug: 'powershell',
    label: 'PowerShell',
    shortLabel: 'PowerShell',
    description:
      'PowerShell for enumeration, command execution, and remote administration.',
    icon: 'activity',
    phase: 10,
    order: 9,
  },
  {
    slug: 'methodology',
    label: 'Methodology',
    shortLabel: 'Methodology',
    description:
      'How to think during an assessment: workflows, checklists, and decision trees.',
    icon: 'compass',
    phase: 11,
    order: 10,
  },
  {
    slug: 'reporting',
    label: 'Reporting',
    shortLabel: 'Reporting',
    description:
      'Evidence collection and writing clear, professional pentest reports.',
    icon: 'file',
    phase: 12,
    order: 11,
  },
];

export const kbSectionMap: Record<KbSectionSlug, KbSection> = Object.fromEntries(
  kbSections.map((section) => [section.slug, section]),
) as Record<KbSectionSlug, KbSection>;

export function kbSectionLabel(slug: string): string {
  return kbSectionMap[slug as KbSectionSlug]?.label ?? slug;
}

export function kbSectionIcon(slug: string): string {
  return kbSectionMap[slug as KbSectionSlug]?.icon ?? 'book';
}
