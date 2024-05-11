import React from 'react'
import './project.css';
function Projects() {
  return (
    <>
      <section className='body'>
      <div className="main">
        <h3 className='heading'>Projects</h3>
      <div className="container">
          <ul className='oddul'>
            <li className='oddli'>
              <h3 className='title'>Portfolio</h3>
              <p>Expertly designed and implemented a captivating portfolio project utilizing HTML, CSS, and React, meticulously managed and version-controlled with Git. Currently in the final stages of refining for seamless local deployment as a dynamic website.</p>
              <span className='circle'></span>
              <span className='date'>May 2024</span>
            </li>
          </ul>
          <ul className='evenul'>
            <li className='evenli'>
              <h3 className='title'>Fake News detection (academic)</h3>
              <p>Traning model to detect true news and fake news. Published on national conference. Technologies used AI,ML</p>
              <span className='circle'></span>
              <span className='date'>Jan-March 2023</span>
            </li>
          </ul>
          <ul className='oddul'>
            <li className='oddli'>
              <h3 className='title'>Crude oil Price Prediction (academic)</h3>
              <p>Traning model to detect true news and fake news. Published on national conference. Technologies used AI,ML</p>
              <span className='circle'></span>
              <span className='date'>Jan-March 2023</span>
            </li>
          </ul>
          <ul className='evenul'>
            <li className='evenli'>
              <h3 className='title'>Blood Bank</h3>
              <p>Furthermore, actively developing a dynamic Blood Bank application using HTML, CSS, JavaScript, and React, demonstrating ongoing proficiency in front-end development. Employing version control with Git to manage progress and ensure seamless collaboration.</p>
              <span className='circle'></span>
              <span className='date'>May 2024</span>
            </li>
          </ul>
        </div>
      </div>
      </section>
    </>
  )
}

export default Projects