const EmployessList = [
  {
    name: "Google",
    location: "USA",
    employees: [
      {
        name: "Alice",
        role: "Frontend Developer",
        experience: 3,
        skills: ["React", "Tailwind", "TypeScript"],
        projects: [
          { title: "Search UI", year: 2022 },
          { title: "Gmail Redesign", year: 2023 },
        ],
      },
      {
        name: "Bob",
        role: "Backend Developer",
        experience: 5,
        skills: ["Node.js", "Express", "MongoDB"],
        projects: [{ title: "Google Drive API", year: 2021 }],
      },
    ],
  },
  {
    name: "Microsoft",
    location: "India",
    employees: [
      {
        name: "Charlie",
        role: "Full Stack Developer",
        experience: 4,
        skills: ["React", "Node.js", "Azure"],
        projects: [{ title: "Teams Chat", year: 2022 }],
      },
      {
        name: "David",
        role: "UI/UX Designer",
        experience: 2,
        skills: ["Figma", "Adobe XD"],
        projects: [{ title: "Office 365 Redesign", year: 2023 }],
      },
    ],
  },
];

export default EmployessList;
