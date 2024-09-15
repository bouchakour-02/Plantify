import React from 'react';
import '../VideoSection.css'; // Import the CSS for styling

const VideoSection = () => {
  const videos = [
    {
      
      src: "459222064_8380883581968236_4328062113777510821_n.mp4", // Replace with your video URL
      title: "How to Save Tomato Seeds",
      duration: "01:21",
    },
    {
      src: "nawara-1.mp4",
      title: "Did you know you can grow the same?",
      duration: "00:58",
    },
    {
      src: "nawara-2.mp4",
      title: "Looks amazing",
      duration: "00:33",
    },
    {
      src: "nawara-3.mp4",
      title: "More Gardening Tips",
      duration: "00:39",
    },
  ];

  return (
    <div className="video-section">
      <h2>Looking for growing tips?</h2>
      <p>Find us on your favorite platforms for exclusive tips, tricks, and more.</p>

      <div className="video-carousel">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              width="280"
              height="500"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-info">
              <p>{video.title}</p>
              <span>{video.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
