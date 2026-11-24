import { createFileRoute } from '@tanstack/react-router';
import { Waivers } from '@/components/talentbridge/tools';
export const Route = createFileRoute('/exam-waivers')({
 head: () => ({ meta: [
  { title: 'Exam Waiver Recommendations | TalentBridge' },
  { name: 'description', content: 'Explore preliminary prior-learning and exam exemption recommendations, not official waiver decisions.' },
  { property: 'og:title', content: 'Exam Waiver Recommendations | TalentBridge' },
  { property: 'og:description', content: 'Explore preliminary prior-learning and exam exemption recommendations, not official waiver decisions.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Waivers,
});
