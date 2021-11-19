import { toPng } from "html-to-image";
import { useStore } from "pages";

const DownloadButton = () => {
  const alpacaRef = useStore((state) => state.alpacaRef);
  const downloadHandler = () => {
    if (alpacaRef.current === null) {
      return;
    }

    toPng(alpacaRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-alpaca.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <button onClick={(e) => downloadHandler()}>Download</button>;
};

export default DownloadButton;
