import UseClickExample from "./example/UseClickExample";
import UseInputExample from "./example/UseInputExample";
import UseTabsExample from "./example/UseTabsExample";
import UseTitleExample from "./example/UseTitleExample";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <UseInputExample />
      <UseTabsExample />
      <UseTitleExample />
      <UseClickExample />
    </div>
  );
}

export default App;
