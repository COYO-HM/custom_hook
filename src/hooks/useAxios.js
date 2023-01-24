import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [trigger, setTrigger] = useState(0);
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => setState({ ...state, loading: false, error }));
    return () => {};
  }, [trigger]);

  if (!opts.url) {
  }

  return { ...state, refetch };
};

export default useAxios;
