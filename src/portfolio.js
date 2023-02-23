const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://LouisTang07.github.io',
  title: 'LT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Louis Tang',
  role: 'Developer',
  description:
    'Have a passion for programming, interested in algorithm and logic, good at math. Willing to learn, easy to work with, well organized, like to take the initiative. Patient, thorough, good-natured, energetic. Utilize strong interpersonal and communication skills. Effectively set priorities in order to meet operational deadlines and long-term goals while maintaining accuracy in documentation, accounts and reports.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'NB Community Harvest Gardens website',
    description:
      'NB Community Harvest Gardens(NBCHG) is a non-profit association. Website creation through a content management system will help manage administrative accounts and upload gardening resources and content to the NBCHG team who are having difficulty sharing helpful information online and are easily accessible to end users. With the new website, public users will be able to search through content to find materials as videos, documents, photos, and text that are beneficial to them in an intuitive way. ',
    stack: ['PHP', 'JavaScript', 'CSS/HTML'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  /*
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  */
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'C#',
  'Java',
  'SQL',
  'Git',
  'Python',
  'PHP',
  'Linux',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tl721@hotmail.com',
}

export { header, about, projects, skills, contact }
