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
            Hi, I’m a Full-Stack Developer and Mechatronics Engineer, bla bla
            bla Hi, I’m a Full-Stack Developer and Mechatronics Engineer, bla
            bla bla Hi, I’m a Full-Stack Developer and Mechatronics Engineer,
            bla bla bla Hi, I’m a Full-Stack Developer and Mechatronics
            Engineer, bla bla bla
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
