import React, { useEffect, useState } from "react";

const Timer = () => {
  let start=0;
  let end =5;
  const [time, setTime] = useState();

  const clickHandler = (event) => {
    setTime(start);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        return prevTime + 1;
      });
    }, 1000);

    if (time === end) {
      setTime()
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
      // console.log("Interval Cleared");
    };
  }, [time]);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Timer</h1>
        {!time ? <h2>0 s</h2> : <h2>{time} s</h2>}
        <button onClick={clickHandler}>Start Again</button>
      </div>
    </>
  );
};

export default Timer;