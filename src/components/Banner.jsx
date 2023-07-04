import { useContext } from 'react';
import Wave from 'react-wavify';
import { ThemeContext } from '../ThemeContext';
import { TypeAnimation } from 'react-type-animation';
import Container from '../container/Container';
import { Fade } from "react-awesome-reveal";


const Banner = () => {
    const { theme } = useContext(ThemeContext);
    const bannerBgColor = theme === 'light' ? 'bg-[#28c1f0b7]' : 'bg-[#0a2b59]';
    const textColor = theme === 'dark' ? '#ffffff' : '#000000';


  const textStyle = {
    fontSize: '1.5em',
    display: 'inline-block',
    color: textColor
  };
  return (

    <div>
       
        <div id="banner" className={` ${bannerBgColor}`}>
        <Container>
    <div className='md:flex justify-between items-center '>
 <div className=' md:w-1/2 mx-auto'>
 <Fade direction="left">
 <h2 className='text-3xl mx-auto text-center pt-20 md:pt-0 pb-6'>Hi, I am <span
  className="bg-gradient-to-r from-blue-500 to-emerald-500 text-transparent bg-clip-text font-extrabold"
  style={{
    WebkitTextStroke: '1px black',
    WebkitTextFillColor: 'transparent'
  }}
>
  Annisha Siddika
</span> 
</h2>
 </Fade>
   <div className='inline text-xl md:text-3xl pl-12'> I am </div> 
         <TypeAnimation
      sequence={[
        'Frontend Developer',
        2000, 
        'MERN Developer',
        2000,
        'Coding enthusiast',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={textStyle}
      repeat={Infinity}
    />
    
 </div>
    <div className='md:w-1/2 mx-auto'>
    <Fade direction='right'>
    <img src="https://i.ibb.co/pXt72Cc/hi.gif" alt="" className='rounded-full p-8 h-96 w-96' />
    </Fade>
    </div>
    </div>
    <Fade direction='up'>
    <p className='text-lg pb-6'>Welcome to my portfolio! I am passionate about creating exceptional digital experiences. Through a combination of design, development, and creativity, I strive to bring ideas to life. Explore my work and get in touch to collaborate on exciting projects.</p>
    </Fade>
    <div className='w-40 mx-auto'>
    <a href="https://drive.google.com/uc?export=download&id=1P_vjMlxBfDh_gt0HZKCJrmr5l3a7BMJA">
       <button className="border-r-blue-700 border-b-blue-700 border-4 bg-blue-900 px-2 py-1 font-bold shadow-xl mb-6 rounded-lg">Download Resume</button>
       </a> 
       </div>
    </Container>
        </div>
        
        {theme === 'dark' ? <Wave
        fill='#0a2b59'
        paused={false}
        options={{
          height: 20,
          amplitude: 25,
          speed: 0.15,
          points: 7
        }}
        style={{ transform: 'rotate(180deg)' }}
      /> : <Wave
      fill='#28c1f0b7'
      paused={false}
      options={{
        height: 20,
        amplitude: 25,
        speed: 0.15,
        points: 7
      }}
      style={{ transform: 'rotate(180deg)' }}
    />}
      
      
    </div>
  );
};

export default Banner;
