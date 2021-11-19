const ListItem = ({ name, current, onClick }) => {
  return (
    <li
      onClick={(e) => onClick(e, name)}
      className={current === name ? "active" : "item"}
    >
      {name}
    </li>
  );
};

export default ListItem;
