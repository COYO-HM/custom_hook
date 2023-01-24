import usePreventLeave from "../hooks/usePreventLeave";

const UsePreventLeaveExample = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div id="example">
      <h1>UsePreventLeave</h1>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <button onClick={enablePrevent}>PROTECT</button>
        <button onClick={disablePrevent}>UNPROTECT</button>
      </div>
    </div>
  );
};

export default UsePreventLeaveExample;
