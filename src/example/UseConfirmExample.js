import useConfirm from "../hooks/useConfirm";

const UseConfirmExample = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div id="example">
      <h1>UseConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirmExample;
