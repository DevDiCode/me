import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, resume, social } = about

  return (
    <section id='about' className='section about'>
      <div className='about__content'>
        {name && (
          <h1 className='about__heading'>
            Hi, I’m <span className='about__name'>{name}</span>.
          </h1>
        )}

        {role && <h2 className='about__role'>{role}</h2>}

        <div className='about__description'>
          <p>
            I’m a <strong>Backend Engineer and DevOps enthusiast</strong> with over 3 years of
            experience building scalable, data-driven systems and automating cloud infrastructure.
            I specialize in developing <strong>Python-based microservices</strong>, working with
            <strong> cloud-native frameworks</strong>, and designing
            <strong> event-driven architectures</strong> on AWS.
          </p>

          <p>
            My work has supported platforms serving over <strong>40,000 users</strong> and
            processing <strong>10TB+ of critical data</strong> — blending backend engineering
            with practical DevOps impact. I’ve designed and deployed
            <strong> event-based, rules-driven infrastructure</strong> using
            <strong> Terraform, AWS CDK, and CloudFormation</strong>.
          </p>

          <p>
            Whether it’s deploying infrastructure as code, automating CI/CD pipelines, or building
            resilient APIs, I enjoy solving backend and DevOps challenges with clean, scalable
            solutions. I’m certified in <strong>AWS and Terraform</strong>, and currently
            sharpening my skills with <strong>Docker, Kubernetes</strong>, and observability
            tooling. I’m actively exploring <strong>DevOps, cloud, and platform engineering
            roles</strong> where I can build impactful systems and grow with high-performing
            teams.
          </p>

        </div>

        <div className='about__contact'>
          {resume && (
              <a href={resume} className='btn btn--outline' target='_blank' rel='noreferrer'>
                Resume
              </a>
          )}

          {social?.github && (
              <a
                  href={social.github}
                  aria-label='GitHub'
                  className='link link--icon'
                  target='_blank'
                  rel='noreferrer'
              >
                <GitHubIcon/>
              </a>
          )}

          {social?.linkedin && (
              <a
                  href={social.linkedin}
                  aria-label='LinkedIn'
                  className='link link--icon'
                  target='_blank'
                  rel='noreferrer'
              >
                <LinkedInIcon/>
              </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
