import useInput from "../hooks/useInput";

const UseInputExample = () => {
  const inputValueValidator = (value) => {
    return value.length < 10;
  };

  const inputValue = useInput("Example", inputValueValidator);

  return (
    <div id="example">
      <h1>UseInput</h1>
      <input placeholder="Input Anything" {...inputValue} />
    </div>
  );
};

export default UseInputExample;
