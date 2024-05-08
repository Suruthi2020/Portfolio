import React,{useState,useEffect} from 'react';
import './home.css';
import img1 from './assests/college.jpg'
function Homepage() {


  const [opacity, setOpacity] = useState(0.35);

  useEffect(() => {
    // Set opacity to 0.35 after 1 second
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 1000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

    return (
      <>
      
      


<div id='body'>
  <img id='img1'
        src={img1}
        
        alt={'err'}
        style={{ opacity: opacity, transition: 'opacity 1s' }}
      />

      <div id='para'  style={{ opacity: opacity, transition: 'opacity 1s' }}>
          <p id='parap'>    
              As a passionate and dedicated front-end developer, I bring a blend of technical expertise and creative flair to the table. With proficiency in HTML, CSS, JavaScript, React, and Bootstrap, I'm equipped to craft immersive and dynamic user experiences on the web
<br /><br />
              My foundation in HTML and CSS ensures pixel-perfect design implementation, while my mastery of JavaScript enables me to bring interactivity and functionality to life. Leveraging the power of React, I excel in building scalable and efficient web applications, utilizing its component-based architecture to create modular and maintainable codebases.
          <br /><br />
          Moreover, my familiarity with Bootstrap allows me to expedite development processes without compromising on design quality, ensuring responsiveness and consistency across various devices and screen sizes.
          </p>
      </div>
</div>
      

      
      </>
    );
  }

export default Homepage;