import { Fade } from "react-awesome-reveal";
import Container from "../container/Container";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import img1 from "../assets/Images/project1.jpg"
import img2 from "../assets/Images/project2.jpg"
import img3 from "../assets/Images/project3.jpg"
const Projects = () => {
  

  return (
    <div id="projects">
      <h2 className='text-3xl font-semibold text-center py-12'>My Recent Projects</h2>
      <Container>
      <div className="card-list grid grid-cols-1 md:grid-cols-3 gap-8">
        <Fade direction="left">
        <div className="w-2/3 md:w-full mx-auto p-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg border-2">
        <div className="image-frame rounded-lg shadow-2xl">
      <img src={img1} alt="img"/>
    </div>
          <div className="py-2 text-white">
            <h3 className="text-lg font-bold mb-2 ">Artistry Camp</h3>
            <p className="project-details text-sm mb-4">
              An E-commarce website. 
            </p>
            <h4 className="text-md font-semibold">Features:</h4>
            <ul className="project-features list-disc pl-4">
              <li className="text-sm ">User Authentications</li>
              <li className="text-sm ">Role based Dashboard</li>
              <li className="text-sm ">Payment system</li>
            </ul>
            <a href="https://artistry-camp.web.app" target="_blank" rel="noopener noreferrer" >
              <button className="flex justify-center items-center gap-2 bg-blue-900 px-4 py-1 rounded-lg border-2 mt-4 mx-auto hover:bg-blue-950"><span>Visit the site</span> <FaArrowAltCircleRight/></button>
            </a>
          </div>
        </div>
        </Fade>
        <Fade>
        <div className="w-2/3 md:w-full mx-auto p-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg border-2">
        <div className="image-frame rounded-lg shadow-2xl">
      <img src={img2} alt="img"/>
    </div>
          <div className="py-2 text-white">
            <h3 className="text-lg font-bold mb-2 ">Lego Land</h3>
            <p className="project-details text-sm mb-4">
            A Marketplace for selling Lego block toys.
            </p>
            <h4 className="text-md font-semibold">Features:</h4>
            <ul className="project-features list-disc pl-4">
              <li className="text-sm ">User Authentications</li>
              <li className="text-sm ">Real-time updates and notifications</li>
              <li className="text-sm ">Create, update, and delete tasks</li>
            </ul>
            <a href="https://lego-land-c62ff.web.app/" target="_blank" rel="noopener noreferrer" >
              <button className="flex justify-center items-center gap-2 bg-blue-900 px-4 py-1 rounded-lg border-2 mt-4 mx-auto hover:bg-blue-950"><span>Visit the site</span> <FaArrowAltCircleRight/></button>
            </a>
          </div>
        </div>
        </Fade>
        <Fade direction="right">
        <div className="w-2/3 md:w-full mx-auto p-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg border-2">
        <div className="image-frame rounded-lg shadow-2xl">
      <img src={img3} alt="img"/>
    </div>
          <div className="py-2 text-white">
            <h3 className="text-lg font-bold mb-2 ">Flavor Fusion</h3>
            <p className="project-details text-sm mb-4">
            A Recipe sharing platform built using the Full stack.
            </p>
            <h4 className="text-md font-semibold">Features:</h4>
            <ul className="project-features list-disc pl-4">
              <li className="text-sm ">User registration and profile management</li>
              <li className="text-sm ">Follow and connect with other users</li>
              <li className="text-sm ">Blogs Reading</li>
            </ul>
            <a href="https://assignment-10-client-c511c.web.app/" target="_blank" rel="noopener noreferrer" >
              <button className="flex justify-center items-center gap-2 bg-blue-900 px-4 py-1 rounded-lg border-2 mt-4 mx-auto hover:bg-blue-950"><span>Visit the site</span> <FaArrowAltCircleRight/></button>
            </a>
          </div>
        </div>
        </Fade>
       
        
      </div>
      </Container>
    </div>
  );
};

export default Projects;
