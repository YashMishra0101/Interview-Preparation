console.log("Working");

const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//forEach
for (let i = 0; i <= companies.length; i++) {
  console.log(companies[i]);
}
