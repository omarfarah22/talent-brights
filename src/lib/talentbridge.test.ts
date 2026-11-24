import { describe, it, expect } from 'vitest';
import { scoreAnswers, completion, identifySkills, categorizeSkills } from './talentbridge';
describe('TalentBridge demo rules', () => {
 it('scores the five multiple-choice answers', () => { expect(scoreAnswers([1,2,0,1,2])).toBe(100); expect(scoreAnswers([0,0,0,0,0])).toBe(20); expect(scoreAnswers([])).toBe(0); });
 it('calculates progress from completed demo activities', () => { expect(completion({ applications: [] })).toBe(0); expect(completion({ applications: [], assessment: { score: 80, answers: [] } })).toBe(20); });
 it('identifies only user-provided skills and categorizes transparently', () => { expect(identifySkills('Python, communication, Python')).toEqual(['Python','communication']); expect(categorizeSkills('Python and communication')).toEqual(['Digital & technical', 'Communication']); });
});
