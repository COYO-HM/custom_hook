import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  const [currentdIdx, setCurrentIdx] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return { currentItem: allTabs[currentdIdx], changeItem: setCurrentIdx };
};

export default useTabs;
