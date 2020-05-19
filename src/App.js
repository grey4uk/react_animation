import React, { useEffect } from "react";
import css from "./App.module.css";

const App = () => {
  let intervalID = null;

  let xx = 0;
  let yy = 0;

  const handleFront = (e) => {
    clearInterval(intervalID);
    const animate = document.getElementById("hero");
    intervalID = setInterval(() => {
      animate.style.backgroundPositionX = xx + "px";
      animate.style.backgroundPositionY = yy + "px";
      xx -= animate.clientWidth;
      if (xx < -2 * animate.clientWidth) {
        xx = 0;
      } else {
        yy = 0;
      }
    }, 200);
  };

  const handleBack = (e) => {
    clearInterval(intervalID);
    const animate = document.getElementById("hero");
    intervalID = setInterval(() => {
      animate.style.backgroundPositionX = xx + "px";
      animate.style.backgroundPositionY = yy + "px";
      xx -= animate.clientWidth;
      yy = -3 * animate.clientHeight - 6;
      if (xx < -2 * animate.clientWidth) {
        xx = 0;
      }
    }, 200);
  };

  const handleLeft = (e) => {
    clearInterval(intervalID);
    const animate = document.getElementById("hero");
    intervalID = setInterval(() => {
      animate.style.backgroundPositionX = xx + "px";
      animate.style.backgroundPositionY = yy + "px";
      xx -= animate.clientWidth;
      yy = -animate.clientHeight - 4;
      if (xx < -2 * animate.clientWidth) {
        xx = 0;
      }
    }, 200);
  };

  const handleRight = (e) => {
    clearInterval(intervalID);
    const animate = document.getElementById("hero");
    intervalID = setInterval(() => {
      animate.style.backgroundPositionX = xx + "px";
      animate.style.backgroundPositionY = yy + "px";
      xx -= animate.clientWidth;
      yy = -2 * animate.clientHeight - 4;
      if (xx < -2 * animate.clientWidth) {
        xx = 0;
      }
    }, 200);
  };

  return (
    <div className={css.container}>
      <button onClick={handleBack}>Назад</button>
      <div className={css.buttonsBlock}>
        <button onClick={handleLeft}>Вліво</button>
        <div id="hero" className={css.animate}></div>
        <button onClick={handleRight}>Вправо</button>
      </div>
      <button onClick={handleFront}>Вперед</button>
    </div>
  );
};

export default App;
