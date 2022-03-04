import React from 'react';
import VideoSource from "../images/trailer.mp4"
import Logo from "../images/logo1.png"
const BackgroundVideo = ({ videoSource, children }) => {
  // const video = React.useRef(null);
  // React.useEffect(() => {
  //   console.log(video.current.style);
  //   video.current.style.filter = "blur(10px)";
 
 
  // }, []);
  return (
      <>
     
      <div className='videoHeader'>
        
      
        <video
        //   style={{ filter: `blur(2px)`, WebkitFilter: `blur(2px)` }}
        playsinline
        autoPlay="autoplay"
        loop="loop"
        muted
        // ref={video}
        
        className='video' >
          {/* TODO make it accept multiple media types */}
          <source src={VideoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      <img
      src={Logo}
      className='img-responsive logo'
      alt="Sol Survivor"
    />
    
        </div>
        
      {/* <span id="video-bottom"></span> */}
    </>
  )
}

export default BackgroundVideo