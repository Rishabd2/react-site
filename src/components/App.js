import React from "react";
import PageHeader from "./PageHeader";
import Virtual from "./Virtual";
import Days from "./Days";
import Information from "./Information";
import Footer from "./Footer";

function App() {
  return (
    <div className="body-content">
      <nav>
        <img className="navlogo" src="./images/expo.png"></img>
        <a href="https://www.facebook.com/EngineeringCouncilUIUC/">
          <img className="sociallink" src="./images/facebook.png"></img>
        </a>
        <a href="https://www.instagram.com/ec_illinois/?hl=en">
          <img className="sociallink" src="./images/instagram.png"></img>
        </a>
        <a href="">
          <img className="sociallink" src="./images/linkedin.png"></img>
        </a>
      </nav>
      <PageHeader />
      <Information />
      <Days />
      <Virtual />
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
