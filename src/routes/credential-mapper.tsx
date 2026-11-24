import { createFileRoute } from '@tanstack/react-router';
import { Mapper } from '@/components/talentbridge/tools';
export const Route = createFileRoute('/credential-mapper')({
 head: () => ({ meta: [
  { title: 'Credential Mapper | TalentBridge' },
  { name: 'description', content: 'Explore illustrative qualification recognition pathways and alternatives for missing academic documents.' },
  { property: 'og:title', content: 'Credential Mapper | TalentBridge' },
  { property: 'og:description', content: 'Explore illustrative qualification recognition pathways and alternatives for missing academic documents.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Mapper,
});
