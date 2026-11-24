import { createFileRoute } from '@tanstack/react-router';
import { Home } from '@/components/talentbridge/home';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'TalentBridge — Your Skills Deserve Recognition' },
  { name: 'description', content: 'Connecting Skills to Opportunities. Explore recognition pathways, skills profiles, and learning opportunities for displaced professionals.' },
  { property: 'og:title', content: 'TalentBridge — Your Skills Deserve Recognition' },
  { property: 'og:description', content: 'Connecting Skills to Opportunities. Explore recognition pathways, skills profiles, and learning opportunities for displaced professionals.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Home,
});
