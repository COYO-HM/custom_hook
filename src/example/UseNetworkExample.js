import useNetwork from "../hooks/useNetwork";

const UseNetworkExample = () => {
  const handleNetwork = (online) => {
    console.log(online ? "NORMAL" : "WARN: Offline");
  };
  const navigateStatus = useNetwork(handleNetwork);

  return (
    <div id="example">
      <h1>UseNetwork</h1>
      <div>{navigateStatus ? "Online" : "Offline"}</div>
    </div>
  );
};

export default UseNetworkExample;
