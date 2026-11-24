export const STORAGE_KEY = 'talentbridge-demo-v1';
export type Assessment = { score: number; answers: number[] };
export type Passport = { name: string; field: string; skills: string[]; experience: string; projects: string; github: string; reference: string; categories: string[] };
export type DemoData = { passport?: Passport; mapping?: { qualification: string; country: string; field: string }; waiver?: { exam: string; skills: string }; assessment?: Assessment; applications: { name: string; email: string; programme: string; motivation: string; reference: string }[] };
export const emptyData: DemoData = { applications: [] };
export const questions = [
 { category: 'Digital literacy', question: 'Which is the safest way to protect an online account?', options: ['Reuse one password everywhere', 'Use a unique password and two-factor authentication', 'Share your password with colleagues'], correct: 1, explanation: 'Unique passwords and two-factor authentication reduce account compromise.' },
 { category: 'Communication', question: 'A colleague misunderstands your instructions. What should you do?', options: ['Repeat them more loudly', 'Ignore the misunderstanding', 'Clarify the steps and ask them to confirm their understanding'], correct: 2, explanation: 'Clear steps and active listening help establish shared understanding.' },
 { category: 'Problem-solving', question: 'What is the best first step when a project repeatedly misses deadlines?', options: ['Identify the causes and constraints', 'Add more tasks', 'Blame the team'], correct: 0, explanation: 'Understanding the root cause helps you choose an effective solution.' },
 { category: 'Basic programming', question: 'What does a loop do in a computer program?', options: ['Deletes all data', 'Repeats a set of instructions', 'Only displays an image'], correct: 1, explanation: 'Loops repeat instructions until a condition or count is reached.' },
 { category: 'Business skills', question: 'Revenue is $1,000 and total costs are $700. What is the profit?', options: ['$1,700', '$700', '$300'], correct: 2, explanation: 'Profit equals revenue minus costs: $1,000 − $700 = $300.' },
];
export function scoreAnswers(answers: number[]) { return Math.round(questions.filter((q, i) => answers[i] === q.correct).length / questions.length * 100); }
export function identifySkills(text: string) { return [...new Set(text.split(/[,;\n]/).map(s => s.trim()).filter(Boolean))]; }
export function categorizeSkills(text: string) {
 const rules = [{ label: 'Digital & technical', regex: /program|python|javascript|html|css|excel|data|digital|software|git/i }, { label: 'Communication', regex: /communicat|language|writing|present|teach/i }, { label: 'Leadership & business', regex: /manage|business|leader|budget|sales|entrepreneur/i }, { label: 'Creative & practical', regex: /design|art|craft|build|repair|project/i }];
 const matched = rules.filter(r => r.regex.test(text)).map(r => r.label); return matched.length ? matched : ['Professional & transferable skills'];
}
export const programmes = [
 { name: 'Digital Skills Certification', description: 'Build confidence with essential digital tools and workplace technology.', duration: '8 weeks', stipend: '$150 / month', eligibility: 'Basic reading skills; no prior digital experience required.', skills: 'Digital literacy, spreadsheets, online safety', category: 'Digital skills', icon: 'digital' },
 { name: 'Programming Fundamentals', description: 'Turn your curiosity into practical coding and problem-solving skills.', duration: '12 weeks', stipend: '$200 / month', eligibility: 'Basic computer skills and an interest in programming.', skills: 'HTML, JavaScript, programming logic', category: 'Technology', icon: 'code' },
 { name: 'Professional Communication', description: 'Strengthen the communication skills that open workplace doors.', duration: '6 weeks', stipend: '$100 / month', eligibility: 'Conversational English; professionals in any field.', skills: 'Writing, presenting, workplace communication', category: 'Career readiness', icon: 'communication' },
 { name: 'Business and Entrepreneurship', description: 'Develop your ideas into a sustainable small business.', duration: '10 weeks', stipend: '$175 / month', eligibility: 'An early business idea or interest in self-employment.', skills: 'Budgeting, business planning, marketing', category: 'Business', icon: 'business' },
 { name: 'Academic Qualification Bridging', description: 'Explore an academic pathway that builds on your previous education.', duration: '16 weeks', stipend: '$250 / month', eligibility: 'Previous post-secondary study; alternative evidence considered.', skills: 'Academic writing, research, study skills', category: 'Education', icon: 'education' },
];
export function completion(data: DemoData) { return [data.passport, data.mapping, data.assessment, data.waiver, data.applications.length > 0].filter(Boolean).length * 20; }
