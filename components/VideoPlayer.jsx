"use client"


import React, { useEffect, useState } from 'react';

const VideoPlayer = ({ videoName }) => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await fetch(
          `https://upload-video-3pkk.onrender.com/uploads/videos/${videoName}`
        );

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const videoBlob = await res.blob();
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoSrc(videoUrl);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    }

    fetchVideo();
  }, [videoName]);

  return (
    <div>
      <h2>Video Player</h2>
      {videoSrc ? (
        <video controls width="640" height="360">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
       <video controls autoPlay muted width="640" height="360">
        <source src='/oops-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
       </video>
      )}
    </div>
  );
};

export default VideoPlayer;
