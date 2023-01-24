import useHover from "../hooks/useHover";

const UseHoverExample = () => {
  const onHoverTitle = () => console.log("onHoveredTitle");
  const title = useHover(onHoverTitle);

  return (
    <div id="example">
      <h1>UseHover</h1>
      <h4 ref={title}>HELLO</h4>
    </div>
  );
};

export default UseHoverExample;
