import useFadeIn from "../hooks/useFadeIn";

const UseFadeInExample = () => {
  const fadeInh1 = useFadeIn(5, 2);
  const fadeInDiv = useFadeIn();

  return (
    <div id="example">
      <h1 {...fadeInh1}>UseFadeIn</h1>
      <div {...fadeInDiv}>TEST</div>
    </div>
  );
};

export default UseFadeInExample;
