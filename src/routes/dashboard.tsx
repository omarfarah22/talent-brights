import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/talentbridge/tools';
export const Route = createFileRoute('/dashboard')({
 head: () => ({ meta: [
  { title: 'Your Demo Dashboard | TalentBridge' },
  { name: 'description', content: 'View your browser-only demo passport, assessment results, recognition pathways, and programme applications.' },
  { property: 'og:title', content: 'Your Demo Dashboard | TalentBridge' },
  { property: 'og:description', content: 'View your browser-only demo passport, assessment results, recognition pathways, and programme applications.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Dashboard,
});
