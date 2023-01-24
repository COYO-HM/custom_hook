import useClick from "../hooks/useClick";

const UseClickExample = () => {
  const onClickTitle = () => console.log("onClickedTitle");
  const title = useClick(onClickTitle);

  return (
    <div id="example">
      <h1>UseClick</h1>
      <h4 ref={title}>HELLO</h4>
    </div>
  );
};

export default UseClickExample;
