// Import the necessary libraries
import Head from 'next/head';

// Create the Footer component
const Footer = () => {
  return (
    <>
      <Head>
        {/* Include external stylesheets */}
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
      </Head>

      {/* Footer component */}
      <footer className="relative pt-8 pb-6" style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)' }}>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">

  <a href="https://www.linkedin.com/company/ihub-anubhuti/mycompany/" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-blueGray-800 hover:bg-blueGray-900 hover:text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fab fa-linkedin"></i>
    </button>
  </a>
  <a href="https://twitter.com/AnubhutiIhub" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-lightBlue-400 hover:bg-blueGray-800 hover:text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fab fa-twitter"></i>
    </button>
  </a>
  <a href="https://www.facebook.com/ihubanubhuti.iiitd" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-lightBlue-600 hover:bg-blueGray-800 hover:text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fab fa-facebook-square"></i>
    </button>
  </a>
  <a href="https://www.instagram.com/ihub_anubhuti_iiitd/" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-pink-400 hover:bg-blueGray-800 hover:text-pink-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fab fa-instagram"></i>
    </button>
  </a>

  <a href="mailto:info@ihub-anubhuti-iiitd.org">
    <button className="bg-white text-red-500 hover:bg-blueGray-800 hover:text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fas fa-envelope"></i>
    </button>
  </a>
  <a href="https://maps.app.goo.gl/gqXQHtn1wR7KzUGC7" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-green-500 hover:bg-blueGray-800 hover:text-green-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fas fa-map-marker-alt"></i>
    </button>
  </a>

  <h6 className="text-medium mt-6  text-white">
    Email: info@ihub-anubhuti-iiitd.org
  
  </h6>
  <h7 className="text-medium  mt-0  text-white">

    Contact: +911126907335
  </h7>


</div>


            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                    <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="./">Home</a>
                    </li>
                    <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="./ResearchandInnovation">Research & Innovation</a>
                    </li>
                    <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="./Events">Events</a>
                    </li>
                    <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="./Collaboration">Collaboration</a>
                    </li>
                    
                </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2"></span>
                <ul className="list-unstyled pt-6">
                    <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="./People">People</a>
                    </li>
                    <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="./Career">Career</a>
                    </li>
                    <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="./Tender">Tender</a>
                    </li>
                    <li>
                    {/* <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="./auth/login">login</a> */}
                    </li>
                    {/* <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                    </li>

                     */}
                </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              © Copyright iHub Anubhuti. All Rights Reserved<br></br>Designed and Developed by
              <a href="https://www.linkedin.com/in/anshul-goswami-83844b211/" target="_blank" rel="noopener noreferrer" className=" px-1 underline">
                 Anshul
              </a>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;