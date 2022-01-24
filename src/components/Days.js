import React from "react";

function Days(props){
  return (
          <div className="days">
            <h2 id="content_header">Day Information</h2>
            <div className="info">
            This semester's career fair will have one day hosted in-person, and one day hosted virtually.
            Below are the Handshake links to the fair information as well as which companies will be attending.
            </div>
            <div className="box-row">
              <a href="https://illinois.joinhandshake.com/stu/career_fairs/28603"> February 8th: <br/>In-Person Fair</a>
              <a href="https://illinois.joinhandshake.com/stu/career_fairs/28715"> February 11th: <br/>Virtual Fair</a>
            </div>
            
          </div>
        );

}

export default Days;

// Second & Third Day Cancelled
// <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=e15f5e45-20c9-4680-9a89-abe9017ed33e">September 11th: <br/>Start Up, Government, Graduate School & Non-profit</a>
// <a href="https://www.careereco.com/Fair/CandidateDashboard?fairId=de6381c0-ebea-4931-ad7b-abf4017de39c">September 10th: <br/> Full-time Employement</a>