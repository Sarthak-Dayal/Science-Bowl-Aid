/** @format */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function RoundComponent(props) {
  const { width, _ } = useWindowSize();
  const setNum = props.set;
  const roundNum = props.round;
  const w = width <= 640 ? 608 : width * 0.95;
  const linkMap = {
    1: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-1/round${roundNum}.pdf`,
    2: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-2/round${roundNum}.pdf`,
    3: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-3/Round-${roundNum}C.pdf`,
    4: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-4/Round${roundNum}.pdf`,
    5: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-5/Round${roundNum}.pdf`,
    6: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-6/Sample6_ROUND${roundNum}.pdf`,
    7: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-7/ROUND-${roundNum}.pdf`,
    8: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-8/Round-${roundNum}-A.pdf`,
    9: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-${setNum}/RegionalHS_${roundNum}.pdf`,
    10: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-${setNum}/${roundNum}A_HS_Reg_2016.pdf`,
    11:
      roundNum <= 2
        ? `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-${setNum}/HS_${roundNum}.pdf`
        : `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-${setNum}/HS_${roundNum}A.pdf`,
    12: `https://science.osti.gov/-/media/wdts/nsb/pdf/HS-Sample-Questions/Sample-Set-${setNum}/2018-HSRound-${roundNum}.pdf`,
  };
  return (
    <div>
      <Document file={`https://www.heroku.com/aqueous-lake-06261/${linkMap[setNum]}`}>
        <Page pageNumber={1} width={w} />
        <Page pageNumber={2} width={w} />
        <Page pageNumber={3} width={w} />
        <Page pageNumber={4} width={w} />
        <Page pageNumber={5} width={w} />
        <Page pageNumber={6} width={w} />
        <Page pageNumber={7} width={w} />
        <Page pageNumber={8} width={w} />
        <Page pageNumber={9} width={w} />
        <Page pageNumber={1} width={w} />
        <Page pageNumber={10} width={w} />
        <Page pageNumber={11} width={w} />
        <Page pageNumber={12} width={w} />
        <Page pageNumber={13} width={w} />
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

RoundComponent.propTypes = {
  set: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
};
