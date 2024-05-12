import React from 'react';
import './Academics.css';
import image1 from './assests/ug.png';
import image2 from './assests/hsc.png';
import image3 from './assests/sec.png';
function Academic() {
  return (
    <>
      

    <div id='mainbody'>
      <div className='wrapper'>
        <div className='card'>
          <img src={image1} alt={'err'} />
          <div className='info'>
            <h1>Bachelor's Degree</h1>
            <h3>Adhiyamaan College of Engineering</h3>
            <p>CGPA 8.24</p>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='card'>
          <img src={image2} alt={'err'} />
          <div className='info'>
            <h1>Higher Secondary Education</h1>
            <h3>Sri Vijay Vidyalaya Matric Hr.Sec.School</h3>
            <p>Percentage 65.83</p>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='card'>
          <img src={image3} alt={'err'} />
          <div className='info'>
            <h1>Secondary Education</h1>
            <h3>ST.Joseph Matric Hr.Sec.School</h3>
            <p>percentage 92.20</p>
          </div>
        </div>
      </div>
    </div>
    

    </>
  )
}

export default Academic