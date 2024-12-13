export interface Chapter {
  id: string;
  title: string;
  story: string;
  concept: string;
  code: string;
  exercise?: string;
}

export const chapters: Chapter[] = [
  {
    id: 'variables',
    title: 'The Magic of Variables',
    story: `In the mystical land of Syntaxia, young wizard apprentice Ada discovered that she could store magical essences in special crystals. Each crystal could hold different types of magic - numbers, words, or even true/false energies. These crystals were what the ancient wizards called 'variables'.`,
    concept: 'Variables are containers for storing data values. They can hold numbers, strings, booleans, and more.',
    code: `// Creating magical crystals (variables)
let magicPower = 100;
let wizardName = "Ada";
let isExperienced = false;

// Changing the stored magic
magicPower = magicPower + 50;
wizardName = "Grand Wizard Ada";
isExperienced = true;`,
    exercise: 'Create a variable to store your wizard name and another to track your magic points.'
  },
  {
    id: 'functions',
    title: 'The Spellcaster\'s Scrolls',
    story: `Deep in the libraries of the Crystal Tower, Ada found ancient scrolls containing reusable spells. These scrolls, known as 'functions', allowed wizards to package complex magic into simple, reusable incantations.`,
    concept: 'Functions are reusable blocks of code that perform specific tasks. They can take inputs (parameters) and return outputs.',
    code: `function castFireball(power: number) {
  return power * 1.5;
}

function healingSpell(health: number, bonus: number) {
  return health + bonus;
}`,
    exercise: 'Create a function that combines two spells into a more powerful one.'
  }
];`