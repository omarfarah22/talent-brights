import { createFileRoute } from '@tanstack/react-router';
import { Opportunities } from '@/components/talentbridge/tools';
export const Route = createFileRoute('/opportunities')({
 head: () => ({ meta: [
  { title: 'Bridging & Stipend Portal | TalentBridge' },
  { name: 'description', content: 'Explore illustrative bridging programmes, skills courses, and demo stipend applications.' },
  { property: 'og:title', content: 'Bridging & Stipend Portal | TalentBridge' },
  { property: 'og:description', content: 'Explore illustrative bridging programmes, skills courses, and demo stipend applications.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Opportunities,
});
