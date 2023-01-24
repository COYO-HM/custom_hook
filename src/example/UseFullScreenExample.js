import { useState } from "react";
import useFullScreen from "../hooks/useFullScreen";

const UseFullScreenExample = () => {
  const [isFull, setIsFull] = useState(false);
  const onFullS = (isFull) => {
    setIsFull(isFull);
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);

  return (
    <div id="example">
      <h1>UseFullScreen</h1>
      <div ref={element}>
        {isFull && <button onClick={exitFull}>X</button>}
        <img
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          alt="grape"
          width="250px"
        />
      </div>
      {!isFull && <button onClick={triggerFull}>MAKE FULLSCREEN</button>}
    </div>
  );
};

export default UseFullScreenExample;
