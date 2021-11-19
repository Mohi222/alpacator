import ListItem from "./ListItem";

const List = ({ items, current, onClick }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item} name={item} current={current} onClick={onClick} />
      ))}
    </ul>
  );
};

export default List;
