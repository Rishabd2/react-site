import React from "react";
import PageHeader from "./PageHeader";
import Virtual from "./Virtual";
import Days from "./Days";
import Information from "./Information";
import Footer from "./Footer";
import TeamProfile from "./TeamProfile";

function App() {
  return (
    <div>
      <nav>
        <img className="navlogo" src="./images/expo.png"></img>
        <a href="https://github.com/ecexpo">
          <img className="sociallink" src="./images/github.png"></img>
        </a>
        <a href="https://www.facebook.com/EngineeringCouncilUIUC/">
          <img className="sociallink" src="./images/facebook.png"></img>
        </a>
        <a href="https://www.instagram.com/ec_illinois/?hl=en">
          <img className="sociallink" src="./images/instagram.png"></img>
        </a>
        <a href="https://www.linkedin.com/company/illinois-expo/">
          <img className="sociallink" src="./images/linkedin.png"></img>
        </a>
      </nav>
      <PageHeader />
      <Information />
      <Days />
      <Virtual />
      <TeamProfile />
      <Footer />
      
    </div>
  );
}

export default App;


// Original Order
// <PageHeader />
// <Information />
// <InterviewLocations />
// <Volunteer />
// <Footer />
//
// New Order
// <PageHeader />
// <Information />
// <Days />
// <Virtual />
// <Footer />
