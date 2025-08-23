const education = [
  {
    id: 1,
    title: "PhD in Computational Biology",
    company: "Université de Lorraine, Nancy",
    date: "Oct 2019 - Jul 2023",
    description: [
      'The work carried out during my PhD thesis has enabled a better understanding of the RNA binding capacity of RRM domains, solving the issues of data inconsistencies among different domain databases.',
      <p>
        Read my PhD thesis:{" "}
        <a
          href="https://hal.science/tel-04219324v1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "Blue", textDecoration: "none" }}
        >
          🔗 PhD Thesis (HAL)
        </a>
      </p>
    ],
    skills: ["RRM", "Protein domains", "Interactions", "Method development"]
  },
  {
    id: 2,
    title: "Research Visiting Fellow",
    company: "Vrije Universiteit Brussel, Belgium",
    date: "Mar 2021 - Jul 2021",
    description: [
      'Developed a pipeline in Python to compute local structural descriptors of proteins from 3D structures.',
    ],
    skills: ["RRM", "Structure alignment", "Python", "Pipeline development"]
  },
  {
    id: 3,
    title: "M.Sc. Bioinformatics",
    company: "Pondicherry University, Puducherry",
    date: "Jul 2017 - May 2019",
    description: [
      <p><b>Project Title:</b> The use of modified nucleotides to increase the storage density in the DNA‑based
data storage system</p>,
    ],
    skills: ["Bioinformatics", "Data Structure and Algorithms", "PERL", "R", "Systems Biology"]
  },
  {
    id: 4,
    title: "Intern",
    company: "Bose Institute, Kolkata", //Swami Ramanand Teerth Marathwada University, Nanded
    date: "May 2018 - Jul 2018",
    description: 'Worked on Bayesian inference for Fluoroquinolone Resistant Mycobacterium tuberculosis WGS data',
    skills: ["Genomics", "PERL", "variant calling"]
  },
  {
    id: 5,
    title: "B.Sc. Bioinformatics",
    company: "MGM's college of CS & IT, Nanded", //Swami Ramanand Teerth Marathwada University, Nanded
    date: "Jul 2014 - May 2017",
    description: '',
    skills: ["Bioinformatics", "Databases", "Sequence alignment", "Docking"]
  },
]

export default education
