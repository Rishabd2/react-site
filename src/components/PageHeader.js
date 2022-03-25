import React from "react";

//TODO: Store background images locally
//TODO: Make calendar not hard coded
function PageHeader(props){
  return (
    <div className="wave-info">
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage: `url(
                ${"http://front-end-noobs.com/jecko/img/wave-top.png"}
              )`
            }}
          />
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage: `url(
                ${"http://front-end-noobs.com/jecko/img/wave-mid.png"}
              )`
            }}
          />
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage: `url(
                ${"http://front-end-noobs.com/jecko/img/wave-bot.png"}
              )`
            }}
          />
        </div>
      </div>
      <div className="info-facts">
          <img src="./images/expo.png"></img>
          <div className="main-logo">
            Illinois Engineering <span className="orange">Career Fair</span>
          </div>
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
        </div>
    </div>
  );
}
export default PageHeader;