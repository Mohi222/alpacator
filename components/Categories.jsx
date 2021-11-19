import { categories } from "config";
import { useStore } from "pages";
import shallow from "zustand/shallow";

import List from "./List";

const Categories = () => {
  const [category, setCategory] = useStore(
    (state) => [state.category, state.setCategory],
    shallow,
  );
  const clickHandler = (e, item) => {
    e.preventDefault();
    setCategory(item);
  };
  return <List items={categories} current={category} onClick={clickHandler} />;
};

export default Categories;
