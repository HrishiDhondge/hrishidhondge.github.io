import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className="skills__grid">
        {skills.map((category) => (
          <div key={uniqid()} className='skills__row'>
            <div className="skills__category">
              <h3>{category.category}</h3>
            </div>
            <div className="skills__items">
              <ul className='skills__list'>
                {category.items.map((skill) => (
                  <li key={uniqid()} className='skills__list-item btn btn--plain'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
