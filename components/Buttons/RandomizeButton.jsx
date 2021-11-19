import { categories, choices } from "config";
import { useStore } from "pages";

const RandomizeButton = () => {
  const setAlpaca = useStore((state) => state.setAlpaca);
  const randomizeHandler = () => {
    const randomAlpaca = {};
    categories.forEach((category) => {
      const categoryChoices = choices[category];
      const randomChoice = Math.floor(Math.random() * categoryChoices.length);
      randomAlpaca[category] = categoryChoices[randomChoice];
    });
    setAlpaca(randomAlpaca);
  };
  return <button onClick={(e) => randomizeHandler()}>Randomize</button>;
};

export default RandomizeButton;
