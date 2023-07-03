import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiStripe, SiFirebase, SiNetlify, SiVercel } from 'react-icons/si';
import { RiVipCrown2Line } from 'react-icons/ri';
import Container from '../container/Container';
import { Fade } from 'react-awesome-reveal';
import Wave from 'react-wavify';

const Skills = () => {
  return (
    <div id="skills">
       <h2 className='text-3xl font-semibold text-center py-12'>My Skills</h2>
      <Container>
     <Fade>
     <div className="icon-list grid grid-cols-2 md:grid-cols-5 justify-items-center gap-4">
       <Fade direction='left'>
       <div className="pb-4 ">
          <FaHtml5 className="icon text-4xl text-orange-500" />
          <p className="skill-name text-lg font-semibold">HTML5</p>
        </div>
       </Fade>
        <Fade direction='down'>
        <div className="pb-4 ">
          <FaCss3Alt className="icon text-4xl text-blue-500" />
          <p className="skill-name text-lg font-semibold">CSS3</p>
        </div>
        </Fade>
       <Fade>
       <div className="pb-4 ">
          <FaJs className="icon text-4xl text-yellow-500" />
          <p className="skill-name text-lg font-semibold">JavaScript</p>
        </div>
       </Fade>
        <Fade direction='right'>
        <div className="pb-4 ">
          <FaNodeJs className="icon text-4xl text-green-500" />
          <p className="skill-name text-lg font-semibold">Node.js</p>
        </div>
        </Fade>
        <Fade direction='up'>
        <div className="pb-4 ">
          <FaDatabase className="icon text-4xl text-gray-500" />
          <p className="skill-name text-lg font-semibold">Database</p>
        </div>
        </Fade>
       <Fade direction='up'>
       <div className="pb-4 ">
          <SiExpress className="icon text-4xl text-black" />
          <p className="skill-name text-lg font-semibold">Express.js</p>
        </div>
       </Fade>
        <Fade direction='down'>
        <div className="pb-4 ">
          <SiMongodb className="icon text-4xl text-green-500" />
          <p className="skill-name text-lg font-semibold">MongoDB</p>
        </div>
        </Fade>
       <Fade direction='left'>
       <div className="pb-4 ">
          <FaReact className="icon text-4xl text-blue-400" />
          <p className="skill-name text-lg font-semibold">React</p>
        </div>
       </Fade>
       <Fade direction='right'>
       <div className="pb-4 ">
          <SiStripe className="icon text-4xl text-blue-700" />
          <p className="skill-name text-lg font-semibold">Stripe</p>
        </div>
       </Fade>
       <Fade>
       <div className="pb-4 ">
          <SiFirebase className="icon text-4xl text-yellow-500" />
          <p className="skill-name text-lg font-semibold">Firebase</p>
        </div>
       </Fade>
        <Fade direction='left'>
        <div className="pb-4 ">
          <SiNetlify className="icon text-4xl text-blue-600" />
          <p className="skill-name text-lg font-semibold">Netlify</p>
        </div>
        </Fade>
        <Fade direction='down'>
        <div className="pb-4 ">
          <SiVercel className="icon text-4xl text-black" />
          <p className="skill-name text-lg font-semibold">Vercel</p>
        </div>
        </Fade>
        <Fade direction='right'>
        <div className="pb-4 ">
          <RiVipCrown2Line className="icon text-4xl text-yellow-500" />
          <p className="skill-name text-lg font-semibold">MERN Stack</p>
        </div>
        </Fade>
      </div>
     </Fade>
      </Container>
      <Wave mask="url(#mask)" fill="#1277b0" options={{
          height: 20,
          amplitude: 25,
          speed: 0.15,
          points: 7
        }} style={{ transform: 'rotate(180deg)' }}>
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0" stopColor="white" />
      <stop offset="0.5" stopColor="black" />
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave>
    </div>
  );
};

export default Skills;
