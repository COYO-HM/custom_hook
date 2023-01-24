import useNotification from "../hooks/useNotification";

const UseNotificationExample = () => {
  const triggerNoti = useNotification("Notification", {
    body: "Open Notification Success",
  });

  return (
    <div id="example">
      <h1>UseNotification</h1>
      <button onClick={triggerNoti}>NOTI</button>
    </div>
  );
};

export default UseNotificationExample;
