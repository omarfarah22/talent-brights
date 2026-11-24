import { createFileRoute } from '@tanstack/react-router';
import { SkillsPassport } from '@/components/talentbridge/tools';
export const Route = createFileRoute('/skills-passport')({
 head: () => ({ meta: [
  { title: 'AI Skill Passport | TalentBridge' },
  { name: 'description', content: 'Create a transparent demo digital skills passport from your experience, projects, and practical skills.' },
  { property: 'og:title', content: 'AI Skill Passport | TalentBridge' },
  { property: 'og:description', content: 'Create a transparent demo digital skills passport from your experience, projects, and practical skills.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: SkillsPassport,
});
