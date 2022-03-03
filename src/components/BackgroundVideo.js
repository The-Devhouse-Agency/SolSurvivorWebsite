import React from 'react';
import VideoSource from "../images/Environment_Zombie_EarlyCapture.mp4"

const BackgroundVideo = ({ videoSource, children, blur }) => {
  // const video = React.useRef(null);
  // React.useEffect(() => {
  //   console.log(video.current.style);
  //   video.current.style.filter = "blur(10px)";
  videoSource = "public\img\Environment_Zombie_EarlyCapture.mp4"
  // }, []);
  return (
      <>
      <div className='videoHeader'>

      
        <video
        //   style={{ filter: `blur(2px)`, WebkitFilter: `blur(2px)` }}
        autoPlay="autoplay"
        loop="loop"
        muted
        // ref={video}
        
        className='video' >
          {/* TODO make it accept multiple media types */}
          <source src={VideoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
          <div className='logo'></div>
        {children}
        </div>
      {/* <span id="video-bottom"></span> */}
    </>
  )
}

export default BackgroundVideo