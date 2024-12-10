import React, { useEffect } from "react";

const PatientVideos = () => {
  const feedId = process.env.NEXT_PUBLIC_CURATOR_FEED_ID;

//   useEffect(() => {
//     // Dynamically load the Curator.io script
//     const script = document.createElement("script");
//     script.src = `https://cdn.curator.io/published/${feedId}.js`;
//     script.async = true;
//     script.onload = () => console.log("Curator.io script loaded successfully!");
//     script.onerror = () => console.error("Failed to load Curator.io script.");
//     document.body.appendChild(script);

//     // Cleanup to remove the script when the component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [feedId]);
useEffect(() => {
    if (!feedId) {
      console.error("Feed ID is missing.");
      return;
    }
  
    // Dynamically load the Curator.io script
    const script = document.createElement("script");
    script.src = `https://cdn.curator.io/published/${feedId}.js`;
    script.async = true;
    script.onload = () => {
      console.log("Curator.io script loaded successfully!");
      if (!document.querySelector("#curator-feed")) {
        console.error("Curator.io container not found.");
      }
    };
    script.onerror = () => console.error("Failed to load Curator.io script.");
    document.body.appendChild(script);
  
    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, [feedId]);
      

  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">
        Patient's Recovery Videos
      </h2>
      <div id="curator-feed" className="curator-feed">
        <a
          href="https://curator.io"
          target="_blank"
          rel="noopener noreferrer"
          className="crt-logo crt-tag text-gray-500"
        >
          Powered by Curator.io
        </a>
      </div>
    </section>
  );
};

export default PatientVideos;
