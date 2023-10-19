import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Undergrad Data Science Student",
          "Open Source Contributor",
          "Data Science Enthusiast",
          "Frontend Developer",
          "Machine Learning Developer",
          "Part Time Photographer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
