import React from "react";
import Nabar from "./Nabar";
import Bannar from "./Bannar";
import Services from "./Services";
import Skills from "./Skills";
import Project from "./Project";
// import Certifications from "./Certifications";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Nabar></Nabar>
      <Bannar />
      <Services></Services>
      <Skills />
      <Project />
      {/* <Certifications /> */}
      <Footer />
    </div>
  );
};

export default Home;
