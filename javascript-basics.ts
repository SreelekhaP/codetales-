import { Tale } from '../../types';

export const javascriptBasicsTale: Tale = {
  id: 'javascript-basics',
  title: 'JavaScript Journey: The Enchanted Kingdom',
  description: 'Begin your coding adventure in the magical realm where JavaScript powers everyday miracles.',
  difficulty: 'beginner',
  language: 'javascript',
  tags: ['basics', 'fundamentals', 'variables', 'functions'],
  chapters: [
    {
      id: 'variables',
      title: 'The Magical Containers',
      story: `In the bustling marketplace of DataTown, young apprentice Maya discovered magical containers that could hold anything - numbers floating like starlight, words woven from pure energy, and even true/false crystals that glowed with decision. These containers, known as 'variables', would become her first step into the world of coding magic.`,
      concept: 'Variables are containers for storing data. They can hold different types of values like numbers, strings, and booleans.',
      code: `// Creating magical containers
let starPower = 100;
const wizardName = "Maya";
var isApprentice = true;

// Transforming the magic
starPower += 50;
console.log(\`\${wizardName} has \${starPower} star power!\`);`,
      hints: [
        'Think of variables as labeled boxes that can hold different things',
        'The let keyword creates a container that can be changed later',
        'const creates a container that cannot be changed'
      ]
    }
  ]
};