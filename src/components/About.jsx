import { Fade } from 'react-awesome-reveal';
import Wave from 'react-wavify';
import Container from '../container/Container';

const About = () => {
  return (
    <div id="about" className='text-justify'>
     <Container>
     <Fade triggerOnce>
        <h2 className='text-3xl font-semibold text-center py-12'>About Me</h2>
        <p>
          I am a MERN stack developer specializing in building dynamic web applications using Node.js and Express.
          With a strong foundation in JavaScript, I have hands-on experience in developing RESTful APIs and
          server-side applications.
        </p>
        <p>
          My frontend skills revolve around HTML, CSS, and JavaScript, and I am proficient in using modern
          frontend frameworks like React to create interactive and responsive user interfaces.
        </p>
        <p>
          I am passionate about crafting efficient and scalable solutions and continuously learning new technologies
          to stay updated in the ever-evolving field of web development.
        </p>
      </Fade>
     </Container>
      <Wave mask="url(#mask)" fill="#1277b0" options={{
          height: 20,
          amplitude: 25,
          speed: 0.15,
          points: 7
        }} >
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

export default About;
