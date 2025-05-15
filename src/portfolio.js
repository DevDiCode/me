const header = {
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: "SDP"
}

const about = {
  name: 'Satya Penmetsa',
  role: 'Backend & DevOps Engineer',
  description:
    'A passionate Software Engineer with 3+ years of experience building scalable, data-driven backend systems and automating cloud infrastructure.\n' +
      '\n' +
      'I specialize in developing Python-based microservices, event-driven data pipelines, and secure cloud-native applications on AWS. My work has supported platforms serving over 40,000 users and processing 10TB+ of critical data — blending backend craftsmanship with practical impact.\n' +
      '\n' +
      'I’m also certified in AWS Solutions Architecture and Terraform, and actively sharpening my DevOps skills through tools like Docker, Kubernetes, and GitHub Actions.\n' +
      '\n' +
      'Whether it\'s deploying infrastructure as code, building robust APIs, or working closely with cross-functional teams in Agile environments, I’m committed to writing clean, reliable code and solving real-world problems at scale.\n' +
      '\n' +
      'Currently, I’m exploring roles in backend engineering, DevOps, and cloud infrastructure, where I can contribute to high-impact systems and continue growing alongside fast-moving teams.',
  resume: 'https://itsdileep.com/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/itsdileep',
    github: 'https://github.com/DevDiCode',
  },
}

const experience = [
  {
    name: 'Software Engineer @ MSRB (via Arshil LLC)',
    description: [
      'Developed EMMA platform services and APIs to support 40K+ professionals.',
      'Automated 10TB+ data pipelines using Lambda, Step Functions, and EventBridge.',
      'Led CI/CD and Infrastructure as Code (IaC) automation using CloudFormation and AWS CDK.',
    ],
    stack: [
      'Python', 'API Gateway', 'Lambda', 'Step Functions', 'EventBridge',
      'DataSync', 'SQS', 'SES', 'CloudFormation', 'DynamoDB', 'AWS CDK'
    ],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Software Engineer @ Agrowave',
    description: [
      'Designed key features for Kisaan app used by 5,000+ farmers.',
      'Built secure APIs and automated infrastructure with Terraform.',
      'Documented services using Postman and Confluence.',
      'Achieved 90% test coverage using Python unittest.',
      'Implemented authentication with Cognito.',
    ],
    stack: [
      'Python', 'Lambda', 'API Gateway', 'Terraform', 'Cognito',
      'Postman', 'Jira', 'Confluence', 'Unittest'
    ],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Software Developer Intern @ Arshil LLC',
    description: [
      'Created API documentation using Postman and Confluence.',
      'Provisioned AWS infrastructure with CloudFormation.',
      'Collaborated in Agile sprints with senior developers.',
    ],
    stack: ['CloudFormation', 'Postman', 'Jira', 'Confluence', 'AWS'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  'Python', 'Dynamodb', "NoSQL",'AWS', 'Terraform', 'Docker', "Kubernetes",
  'Jenkins', 'PostgreSQL', 'CI/CD', "Django", "RESTapi"
]

const contact = {
  email: 'satyadileep.work@gmail.com'
}

export { header, about, experience, skills, contact }