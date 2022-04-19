import React from "react";
import Schedule from './Schedule'

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
          <img src="./images/expo_header-min.png"></img>
          <div className="main-logo">
            Illinois Engineering <span className="orange">Career Fair</span>
          </div>
          <Schedule />
      </div>
    </div>
  );
}
export default PageHeader;