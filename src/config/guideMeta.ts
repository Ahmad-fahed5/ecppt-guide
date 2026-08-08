export const difficultyLabels: Record<string, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export const difficultyBadge = (level: string): 'green' | 'cyan' | 'violet' =>
  level === 'beginner' ? 'green' : level === 'advanced' ? 'violet' : 'cyan';
