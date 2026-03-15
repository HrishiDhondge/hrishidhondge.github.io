import CareerSection from './components/Career/CareerSection'
import experience from './data/experience'
import education from './data/education'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hrishidhondge.github.io/',
  title: 'HD.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hrishikesh Dhondge',
  role: 'Bioinformatician',
  picture: 'https://avatars.githubusercontent.com/u/21256741',

  description:
    'Computational researcher by profession, developer by passion. Problem solver with extensive experience in Linux, SQL, and Python. Like to take on new challenges and always ready to dive into exciting projects. Currently working at the intersection of machine learning and system design.',
  // resume: 'https://example.com',
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
    image: 'CroMaSt_conceptual_model.jpeg',
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
    items: ['Python', 'Bash', 'Common Workflow Language (CWL)', 'Nextflow', 'R', 'Perl'],
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

const Career = () => {
    const hasExperience = Array.isArray(experience) && experience.length > 0
    const hasEducation = Array.isArray(education) && education.length > 0

    const isEmpty = !hasExperience && !hasEducation

    return (
        <div className="career-page" >
            {isEmpty ? (
                <div className="career-empty-block" style={{ textAlign: "center", margin: "3rem 0" }}>
                    <h2 className="career-empty-title" style={{ marginBottom: "1rem" }}>Career</h2>
                    <p className="career-empty" style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
                        🚧 This page is under construction. Check back soon!
                    </p>
                </div>
            ) : (
                <>
                    {hasExperience && (
                        <CareerSection
                            id="experience"
                            title="Experience"
                            data={experience}
                        />
                    )}

                    {hasEducation && (
                        <div style={{ marginTop: "3rem" }}>
                        <CareerSection
                            id="education"
                            title="Education"
                            data={education}
                        />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export { header, about, projects, skills, Career, contact }
