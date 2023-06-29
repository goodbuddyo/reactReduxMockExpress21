const topics=[
  {
    id: 1,
    title: "Top 10 Benefits of Website Accessibility",
    slug: "top-10-benefits-of-website-accessibility",
    authorId: 1,
    category: "Web Accessibility"
  },
  {
    id: 2,
    title: "WCAG Checklist",
    slug: "wcag-checklist",
    authorId: 1,
    category: "Web Accessibility"
  },
  {
    id: 3,
    title: "7 Benefits of Website Usability Testing",
    slug: "7-benefits-of-website-usability-testing",
    authorId: 1,
    category: "Usability"
  },
  {
    id: 4,
    title: "The principles of website usability",
    slug: "the-principles-of-website-usability",
    authorId: 1,
    category: "Usability"
  },
  {
    id: 5,
    title: "10 website housekeeping tasks to do during a quiet period",
    slug: "10-website-housekeeping-tasks-to-do-during-a-quiet-period",
    authorId: 1,
    category: "Housekeeping"
  },
  {
    id: 6,
    title: "SEO Housekeeping Tasks You Should Carry Out Regularly",
    slug: "seo-housekeeping-tasks-you-should-carry-out-regularly",
    authorId: 1,
    category: "SEO"
  },
  {
    id: 7,
    title: "10 Key Benefits Of SEO For Your Business",
    slug: "10-key-benefits-of-seo-For-your-business",
    authorId: 1,
    category: "SEO"
  },
  {
    id: 8,
    title: "Cybersecurity Tools",
    slug: "cybersecurity-tools",
    authorId: 1,
    category: "Cyber Security"
  },
  {
    id: 9,
    title: "20 free cybersecurity tools you should know about",
    slug: "20-free-cybersecurity-tools-you-should-know-about",
    authorId: 1,
    category: "Cyber Security"
  },
  {
    id: 10,
    title: "7 best website performance test tools in 2023",
    slug: "7-best-website-performance-test-tools-in-2023",
    authorId: 1,
    category: "Performance"
  }
];

const authors=[
  {id: 1,name: "John Doe"},
  {id: 2,name: "Ann Onymous"},
  {id: 3,name: "Silence Dogood"}
];

const newTopic={
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports={
  newTopic,
  topics,
  authors
};
