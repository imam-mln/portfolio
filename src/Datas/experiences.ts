interface Data {
  id: number;
  title: string;
  company: string;
  start: string;
  end: string;
  type: string; 
}

export const Experiences: Data[] = [
  { id: 1, title: "Data Management", company: "PT Telkom Witel Cirebon", type: "Intern", start: "07/2019", end: "09/2019" },
  { id: 2, title: "Aplication Admin", company: "Rumah Digital Majalengka", type: "Freelance", start: "04/2022", end: "08/2022" },
  { id: 3, title: "IT Staff", company: "PT BRI Cirebon Kartini", type: "Intern", start: "06/2022", end: "09/2022" },
  { id: 4, title: "Web Developer", company: "", type: "Freelance", start: "03/2023", end: "Present" },
];

