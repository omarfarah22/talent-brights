import { createFileRoute } from '@tanstack/react-router';
import { AssessmentPage } from '@/components/talentbridge/tools';
export const Route = createFileRoute('/assessment')({
 head: () => ({ meta: [
  { title: 'Skills Assessment | TalentBridge' },
  { name: 'description', content: 'Try a five-question practical demo assessment and add your results to your skills passport.' },
  { property: 'og:title', content: 'Skills Assessment | TalentBridge' },
  { property: 'og:description', content: 'Try a five-question practical demo assessment and add your results to your skills passport.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: AssessmentPage,
});
