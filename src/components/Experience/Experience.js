import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css' // Can keep using Projects.css unless you want to rename

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='projects__grid'>
        {experience.map((item) => (
          <ProjectContainer key={uniqid()} project={item} />
        ))}
      </div>
    </section>
  )
}

export default Experience
