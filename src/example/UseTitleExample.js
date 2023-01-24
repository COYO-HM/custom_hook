import useInput from "../hooks/useInput";
import useTitle from "../hooks/useTitle";

const UseTitleExample = () => {
  const title = useInput("");
  const titleUpdater = useTitle("Loading...");

  return (
    <div id="example">
      <h1>UseTitle</h1>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "1fr 150px",
        }}
      >
        <input {...title} placeholder="Input Title" />
        <button onClick={() => titleUpdater(title.value)}>CHANGE TITLE</button>
      </div>
    </div>
  );
};
export default UseTitleExample;
