import useScroll from "../hooks/useScroll";

const UseScrollExample = () => {
  const { y } = useScroll();
  return (
    <div id="example" style={{ position: "fixed" }}>
      <h1 style={{ color: y > 100 ? "red" : "white" }}>UseScroll</h1>
    </div>
  );
};

export default UseScrollExample;
