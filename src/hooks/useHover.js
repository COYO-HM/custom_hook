import { useEffect, useRef } from "react";

const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("hover", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("hover", onHover);
      }
    };
  }, []);

  if (typeof onHover !== "function") {
    return;
  }

  return element;
};

export default useHover;
