import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  // useEffect(()=>{
  //   init(textRef.current, { showCursor: true,backDelay: 1500,backSpeed: 60, strings: ["Developer","Designer"]});

  // },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="https://github.com/safak/youtube/blob/react-portfolio/public/assets/man.png?raw=true" alt="" /> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sameer</h1>
          <h3>
            FrontEnd Developer
            {/* <span ref={textRef}></span> */}
          </h3>
        </div>
        <a href="#portfolio">
          <img
            src="https://github.com/safak/youtube/blob/react-portfolio/public/assets/arrow.png?raw=true"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
