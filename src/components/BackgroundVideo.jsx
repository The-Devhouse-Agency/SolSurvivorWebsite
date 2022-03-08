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
      <div dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="https://devhouse-web-images.s3.us-east-2.amazonaws.com/SolSurvivorVideo.mp4"
          class="video"
        />,
      ` }}></div>
      

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