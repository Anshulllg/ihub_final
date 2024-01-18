// import React, { useEffect, useRef, useState } from 'react';

// const Video = () => {
//   const videoRef = useRef();
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       const videoElement = videoRef.current;

//       // Use the video element directly instead of creating a new one
//       videoElement.src = 'https://drive.google.com/uc?export=download&id=1tJgxOYOl8TMMeuoFYIg9_CUY1eTskqaB';
//       videoElement.muted = true; // Mute the video
//       videoElement.autoplay = true; // Autoplay the video
//       setVideo(videoElement);
//     }
//   }, []);

//   return (
//     <div className="">
//       <div className='h-9/12'>

//       </div>
     
//     </div>
//   );
// };

// export default Video;
import React, { useEffect, useRef, useState } from 'react';

const Video = () => {
  const videoRef = useRef();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      // Use the video element directly instead of creating a new one
      videoElement.src = 'https://drive.google.com/uc?export=download&id=1tJgxOYOl8TMMeuoFYIg9_CUY1eTskqaB';
      videoElement.muted = true; // Mute the video
      videoElement.autoplay = true; // Autoplay the video
      setVideo(videoElement);
    }
  }, []);

  return (
    <div className="">
      <div className='h-9/12'>

      </div>
     
    </div>
  );
};

export default Video;
