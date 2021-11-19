import Image from "next/image";
import { useStore } from "pages";

// TODO: find a workarund to use next/image instead of img
/* eslint-disable @next/next/no-img-element */

const AlpacaImage = ({ category }) => {
  const chosen = useStore((state) => state.alpaca[category]);
  return (
    <div className="alpacaImage">
      <img
        className={category}
        alt={category}
        src={`/alpaca/${category}/${chosen}.png`}
        width={500}
        height={500}
      />
    </div>
  );
};

export default AlpacaImage;
