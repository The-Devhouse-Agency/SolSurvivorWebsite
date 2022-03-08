import React from 'react';
import VideoSource from "../images/trailer.mp4"
import Logo from "../images/logo1.png"
import Poster from "../images/videoPoster.PNG"
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
        className='video'
        muted autoPlay playsInline loop preload="auto" 
        poster={Poster}
         >
          <source type="video/mp4" src="https://ampcreative.s3.us-east-2.amazonaws.com/Image_from_iOS__1__AdobeCreativeCloudExpress.mp4"  />
            Your browser does not support the video tag.
      </video>
      <img
      src={Logo}
      className='img-responsive logo'
      alt="Sol Survivor"
    />
    
        </div>
        
    </>
  )
}

export default BackgroundVideo