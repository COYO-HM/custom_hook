import useBeforeLeave from "../hooks/useBeforeLeave";

const UseBeforeLeaveExample = () => {
  const begForLife = () => console.log("Plz don't leave.");

  useBeforeLeave(begForLife);

  return (
    <div id="example">
      <h1>UseBeforeLeave</h1>
    </div>
  );
};

export default UseBeforeLeaveExample;
