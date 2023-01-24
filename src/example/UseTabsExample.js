import useTabs from "../hooks/useTabs";

const MENU_LIST = [
  { tab: "Section 1", content: "This is 'Section 1'" },
  { tab: "Section 2", content: "This is 'Section 2'" },
];

const UseTabsExample = () => {
  const { currentItem, changeItem } = useTabs(0, MENU_LIST);

  return (
    <div id="example">
      <h1>UseTabs</h1>
      <div style={{ display: "flex" }}>
        {MENU_LIST.map((menu, idx) => (
          <button onClick={() => changeItem(idx)}>{menu.tab}</button>
        ))}
      </div>
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabsExample;
