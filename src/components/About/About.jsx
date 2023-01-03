import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__container-img">
          <img src="./pepe.jpg" alt="" />
        </div>
        <div className="about__container-info">
          <div className="about__container-info__name">
            Jose Andres Gavilanes
          </div>
          <div className="about__container-info__description">
            Hello World! I am Pepe, a young leader who is always open to new
            opportunities to exploit his potential and work with a great
            purpose, helping millions of people and seeking greatness in
            everything he does. Since I was a child I have been passionate about
            how technology can change people's lives, in my case it all started
            when I was 7 years old, disassembling my electronic toys, and has
            progressed until I became the person I am, who is passionate about
            learning new things daily and leaving the world better than he found
            it. I have 6 years of experience leading teams.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
