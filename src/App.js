import UseClickExample from "./example/UseClickExample";
import UseConfirmExample from "./example/UseConfirmExample";
import UseHoverExample from "./example/UseHoverExample";
import UseInputExample from "./example/UseInputExample";
import UseTabsExample from "./example/UseTabsExample";
import UseTitleExample from "./example/UseTitleExample";
import UsePreventLeaveExample from "./example/UsePreventLeaveExample";
import UseBeforeLeaveExample from "./example/UseBeforeLeaveExample";
import UseFadeInExample from "./example/UseFadeInExample";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <UseInputExample />
      <UseTabsExample />
      <UseTitleExample />
      <UseClickExample />
      <UseHoverExample />
      <UseConfirmExample />
      <UsePreventLeaveExample />
      <UseBeforeLeaveExample />
      <UseFadeInExample />
    </div>
  );
}

export default App;
