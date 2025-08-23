const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hrishidhondge.github.io/cleanfolio',
  title: 'HD.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hrishikesh Dhondge',
  role: 'Bioinformatician',
  picture: 'https://avatars.githubusercontent.com/u/21256741',

  description:
    'Computational researcher by profession, developer by passion. Problem solver with extensive experience in Linux, SQL, and Python. Like to take on new challenges and always ready to dive into exciting projects.',
  resume: 'https://example.com',
  social: {
    linkedin: 'http://linkedin.com/in/hrishikesh-dhondge',
    github: 'https://github.com/HrishiDhondge',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'CroMaSt Workflow',
    description:
      'CroMaSt (Cross Mapper of domain Structural instances) is an automated iterative workflow to clarify the assignment of protein domains to a given domain type of interest, based on their 3D structure and by cross-mapping of domain structural instances between domain databases.',
    stack: ['Bash', 'Python', 'CWL', '3D-structure', 'Protein Domains'],
    sourceCode: 'https://github.com/HrishiDhondge/CroMaSt.git',
    livePreview: 'https://doi.org/10.48546/WORKFLOWHUB.WORKFLOW.390.2',
    image: 'https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/bioinformaticsadvances/3/1/10.1093_bioadv_vbad081/1/vbad081f3.jpeg?Expires=1758845441&Signature=Bczej6t-OFV8~xGa7K1uKNCWaXxy9ukTfEKYsMPaeuuIa3AaM52KIF8yFY4lpkg2s5v1F8NG92leBseTQhTsBG6ihPwyr~P7OE7OOhyDDGor7tP9AnxaOPoqM-a4dFqP7EDf7ovtDv6gHDJdO~1t0b5DGAB9D1eNJE9Gonnu5zzQoxueFbPN6bHGUBYJTIJsRvbRCQAwrr3Cd2pCG4C~mO4FydYclYAiSJvn-ePF~IC7i9PNQhRhbarJCazBJF-yFallRN913Yn8dEeK0BNpWJ2YqOPY8FGUqQ6-mBC6q0Z6WIckC2sdilICu51-rITNJy3wSlp5jseYJm3gLSb-0g__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA',
  },
  {
    name: 'InteR3M Database',
    description:
      'InteR3M is a database about the structures and sequences of RNA Recognition Motifs (RRMs) and their interactions with RNA. The database contains a total of 400,892 RRM domain instances from 256,266 unique proteins and from 19 different Pfam families.',
    stack: ['PosgtreSQL', 'Python', 'Docker', 'Protein-RNA interactions'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://inter3mdb.loria.fr/',
    // image: 'https://inter3mdb.loria.fr/image/InteR3M_homepage.png', 
    image: 'https://inter3mdb.loria.fr/image/relational_model.svg',
  },
  {
    name: 'UniPDB Mapper',
    description:
      'UniPDB Mapper is a Python package designed for ID and residue mapping between UniProt and PDB databases.',
    stack: ['Python', 'package', 'cross-map', 'Protein sequence cross-mapping'],
    sourceCode: 'https://github.com/HrishiDhondge/unipdb_mapper.git',
    livePreview: 'https://unipdb-mapper.readthedocs.io/',
    image: 'https://raw.githubusercontent.com/HrishiDhondge/unipdb_mapper/main/docs/logo.png'
  },
]

const skills = [
  {
    category: 'Programming',
    items: ['Python', 'Bash', 'R', 'Perl', 'Common Workflow Language (CWL)'],
  },
  {
    category: 'Back-end',
    items: ['PostgreSQL', 'REST API', 'Django'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'Singularity', 'Jira', 'Slurm']
  },
  {
    category: 'Data Science & Machine Learning',
    items: ['Statistics', 'Data Modeling', 'Scikit‑learn', 'PyTorch', 'TensorFlow']
  },
  {
    category: 'Documentation frameworks',
    items: ['Markdown', 'Latex', 'Jekyll', 'Sphinx']
  },
  {
    category: 'Data management',
    items: ['Data Stewardship Wizard (DSW)', 'FAIR data practices', 'EDAM Ontology', 'Data Curation and Integration']
  },
  {
    category: 'Genomics',
    items: ['NGS data analysis', 'comparative genomics', 'basecalling', 'variant calling', 'detection of modified bases']
  },
  {
    category: 'Molecular dynamic simulation',
    items: ['GROMACS', 'AMBER', 'NAMD', 'VMD', 'CPPTRAJ', 'MDanalysis']
  },
  {
    category: 'Molecular modelling',
    items: ['PyMol', 'MODELLER', 'AlphaFold']
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'yourid@mail.com',
}

export { header, about, projects, skills, contact }
