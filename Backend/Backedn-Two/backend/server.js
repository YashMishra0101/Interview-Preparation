import express from "express"; // this is called module js import when we use this so we have to add this "type": "module" in the package.json
//const express = require('express')--this is called common js import

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const developerInfo = [
  {
    name: "John Doe",
    country: "USA",
    experience: "5",
    salary: "14999",
    previousCompany: "TCS",
    currentPosition: "Frontend Developer",
    skills: ["React", "JavaScript", "CSS"],
    id: 1,
  },
  {
    id: 2,
    name: "Jane Smith",
    country: "India",
    experience: 4,
    currentPosition: "Full Stack Developer",
    salary: "15,00,000 INR",
    previousCompany: "InnoTech Solutions",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    name: "Mike Johnson",
    country: "Germany",
    experience: 6,
    currentPosition: "Backend Developer",
    salary: "75,000 EUR",
    previousCompany: "CodeWorks GmbH",
    skills: ["Node.js", "Express", "MySQL"],
  },
  {
    id: 4,
    name: "Sara Lee",
    country: "Canada",
    experience: 3,
    currentPosition: "React Developer",
    salary: "70,000 CAD",
    previousCompany: "MapleTech",
    skills: ["React", "TypeScript", "Redux"],
  },
  {
    id: 5,
    name: "Akira Tanaka",
    country: "Japan",
    experience: 7,
    currentPosition: "Full Stack Developer",
    salary: "9,000,000 JPY",
    previousCompany: "Nippon Soft",
    skills: ["Vue.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 6,
    name: "Lucas Silva",
    country: "Brazil",
    experience: 5,
    currentPosition: "Backend Developer",
    salary: "200,000 BRL",
    previousCompany: "SambaTech",
    skills: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 7,
    name: "Emma Wilson",
    country: "UK",
    experience: 4,
    currentPosition: "Frontend Developer",
    salary: "55,000 GBP",
    previousCompany: "BrightSoft",
    skills: ["Angular", "JavaScript", "CSS"],
  },
  {
    id: 8,
    name: "Chen Wei",
    country: "China",
    experience: 6,
    currentPosition: "Full Stack Developer",
    salary: "400,000 CNY",
    previousCompany: "DragonTech",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 9,
    name: "Olivia Martinez",
    country: "Spain",
    experience: 5,
    currentPosition: "Backend Developer",
    salary: "60,000 EUR",
    previousCompany: "CodeEspaña",
    skills: ["Python", "Django", "PostgreSQL"],
  },
  {
    id: 10,
    name: "David Kim",
    country: "South Korea",
    experience: 3,
    currentPosition: "Frontend Developer",
    salary: "50,000 USD",
    previousCompany: "SeoulTech",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
];

app.get("/", (req, res) => {
  res.send("Server is working");
});
app.get("/api/developers", (req, res) => {
  res.json(developerInfo);
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
