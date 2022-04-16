import React from "react";
import axios from "axios";

function Schedule(props){
    
    return (
        <div className="schedule-container">
            <div className="schedule-name">
              <div>Name Tag Collection</div>
              <div>Reverse Career Fair</div>
              <div>In-Person Career Fair</div>
              <div>Virtual Career Fair</div>
            </div>
            <div className="schedule-date">
              <div>February 7th</div>
              <div>February 7th</div>
              <div>February 8th</div>
              <div>February 11th</div>
            </div>
            <div className="schedule-location">
              <div>Grainger Library</div>
              <div>Illini Union</div>
              <div>Illini Union</div>
              <div>Handshake</div>
            </div>
          </div>
          
    )
}

export default Schedule