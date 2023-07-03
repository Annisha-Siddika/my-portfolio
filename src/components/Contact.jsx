
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { BsFillSendFill} from 'react-icons/bs';
import Container from '../container/Container';
import { Fade } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
    
        emailjs.sendForm('service_deli96q', 'template_zm5x0pj', form.current, 'TijlBqS_DbLEddnu6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <div id='contact' className='py-12'>
      <Container>
      <h2 className='text-3xl font-semibold text-center pt-8 pb-4'>Contact me</h2>
      <h4 className="text-lg mb-8 text-center">Get in touch with me for any inquiries</h4>

      <div className="md:flex justify-between items-center pt-12">
        <div className="w-1/2 mx-auto">
          <Fade direction='left'>
          <div className="mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <p>Bir El Djir, Oran, Algeria</p>
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:contact@example.com">annisha2112@gmail.com</a>
          </div>
          <div className="mb-4 flex items-center">
            <FaPhone className="mr-2" />
            <p>+213 699 277 042</p>
          </div>
          <div className="mb-4 flex items-center">
            <FaWhatsapp className="mr-2" />
            <p>+880 1930-170440</p>
          </div>
          <div className="mb-4 flex items-center">
            <FaLinkedin className="mr-2" />
            <a href="https://www.linkedin.com/in/annisha-siddika-286331280/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          </Fade>
        </div>

       
        <div className="w-1/2 mx-auto pt-8 md:pt-0">
         
          <form ref={form} onSubmit={sendEmail}>
            <input className="w-full mb-4 px-4 py-2 border border-gray-300 rounded text-blue-900" type="text" name="from_name" placeholder="Your Name" required />
            <input className="w-full mb-4 px-4 py-2 border border-gray-300 rounded text-blue-900" type="email" name="from_email" placeholder="Your Email" required />
            <textarea className="w-full mb-4 px-4 py-2 border border-gray-300 rounded text-blue-900" name="message" placeholder="Your Message" required></textarea>
            <button className="bg-blue-900 hover:bg-blue-950 border-2 text-white py-2 px-4 rounded flex items-center gap-2" type="submit"><span>Send Message </span><BsFillSendFill/></button>
          </form>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Contact;
