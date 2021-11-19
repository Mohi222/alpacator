import { categories } from "config";

import AlpacaImage from "./AlpacaImage";

const Alpaca = ({ innerRef }) => {
  return (
    <div className="alpaca" ref={innerRef}>
      {categories.map((category) => (
        <AlpacaImage key={category} category={category} />
      ))}
    </div>
  );
};

export default Alpaca;
