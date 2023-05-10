// Write Code here
// Write Code here
import { useState } from "react";
const PlayPause = () => {
  const [isPaused, setIsPaused] = useState(true);
  const handleButton = () => {
    setIsPaused((prev) => !prev);
  };
  return (
    <>
      <h1>{isPaused ? "The state is paused" : "The state is playing"}</h1>
      <button onClick={handleButton}>{isPaused ? "Paused" : "Playing"}</button>
    </>
  );
};
export default PlayPause;