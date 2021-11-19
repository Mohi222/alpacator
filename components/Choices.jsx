import { categories, choices } from "config";
import { useStore } from "pages";
import shallow from "zustand/shallow";

import List from "./List";

const Choices = () => {
  const category = useStore((state) => state.category);
  const alpaca = useStore((state) => state.alpaca);
  const setAlpaca = useStore((state) => state.setAlpaca);

  const clickHandler = (e, item) => {
    e.preventDefault();
    console.log(alpaca[category]);

    const newAlpaca = { ...alpaca };
    newAlpaca[category] = item;
    setAlpaca(newAlpaca);
  };
  return (
    <List
      items={choices[category]}
      current={alpaca[category]}
      onClick={clickHandler}
    />
  );
};

export default Choices;
