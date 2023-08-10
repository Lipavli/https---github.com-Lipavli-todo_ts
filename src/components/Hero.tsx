import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero">
        <div className="hero__left">
          <h1>Todo it, check it, done it</h1>
          <p>and enjoy your productivity with us</p>
        </div>
        <div className="hero__right">
            <img src="./images/business-idea.png" alt="hero-img"/>
        </div>
      </div>

  );
};
export default Hero;
