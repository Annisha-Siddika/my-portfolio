const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-emerald-900 py-4 text-center text-white">
        <p className=" text-sm">
          &copy; {currentYear} Annisha Siddika. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;