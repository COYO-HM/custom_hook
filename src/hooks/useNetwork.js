import { useState, useEffect } from "react";

// useNetwork: navigator가 online 또는 offline이 되는 걸 막아준다.
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange !== "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

export default useNetwork;
