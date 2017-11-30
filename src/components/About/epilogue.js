import React from "react";

const Epilogue = () => {
  return (
    <div className="epilogue">
      <div className="about">
        <span>Front-end Developer</span>
        <span>zzolain</span>
        <a href="mailto:zzolain@gmail.com">zzolain@gmail.com</a>
      </div>
      <div className="about__contacts">
        <p>
          <a href="https://github.com/zzolain">Github</a>
        </p>
        <p>
          <a href="https://www.facebook.com/zzolain">Facebook</a>
        </p>
      </div>
      <div className="quote">
        <p>
          You can’t connect the dots looking forward;
          <br /> you can only connect them looking backwards.
          <br /> So you have to trust that the dots will somehow
          <br /> connect in your future.
        </p>
        <span>- Steve Jobs -</span>
      </div>
    </div>
  );
};

export default Epilogue;
