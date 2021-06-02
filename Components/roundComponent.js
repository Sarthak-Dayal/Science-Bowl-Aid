/** @format */
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function RoundComponent(props) {
  const { width, _ } = useWindowSize();
  const setNum = props.set;
  const roundNum = props.round;

  return (
    <div>
      <Document
        file={`https://cors-anywhere.herokuapp.com/https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-${setNum}/round${roundNum}.pdf`}>
        <Page pageNumber={1} width={width} />
        <Page pageNumber={2} width={width} />
        <Page pageNumber={3} width={width} />
        <Page pageNumber={4} width={width} />
        <Page pageNumber={5} width={width} />
        <Page pageNumber={6} width={width} />
        <Page pageNumber={7} width={width} />
        <Page pageNumber={8} width={width} />
        <Page pageNumber={9} width={width} />
        <Page pageNumber={1} width={width} />
        <Page pageNumber={10} width={width} />
        <Page pageNumber={11} width={width} />
        <Page pageNumber={12} width={width} />
        <Page pageNumber={13} width={width} />
      </Document>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
