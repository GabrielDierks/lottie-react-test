import React from "react";
import "./App.css";
import { useLottie, Lottie } from "react-lottie-hook";
import winking from "./animations/reactLogo.json";

const App = () => {
  const [lottieRef, { isStopped, isPaused }, controls] = useLottie({
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false,
    },
    animationData: winking,
  });

  const onPlay = React.useCallback(() => {
    controls.play();
  }, [controls]);

  const onPause = React.useCallback(() => {
    controls.pause();
  }, [controls]);

  const onStop = React.useCallback(() => {
    controls.stop();
  }, [controls]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Lottie lottieRef={lottieRef} height={200} width={200} />
          <button
            style={
              isStopped ? { display: "none" } : { display: "inline-block" }
            }
            onClick={isPaused ? onPlay : onPause}
          >
            {isPaused ? "play" : "pause"}
          </button>
          <button
            style={
              isStopped ? { background: "#33cc33" } : { background: "red" }
            }
            onClick={isStopped ? onPlay : onStop}
          >
            {isStopped ? "start" : "stop"}
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
