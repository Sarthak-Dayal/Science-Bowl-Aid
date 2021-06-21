/** @format */
import { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import RoundComponent from "../Components/roundComponent";
import Timer from "../Components/timer";
import Scorer from "../Components/scorer";
import Draggable from "react-draggable";
import Head from "next/head";

export default function App() {
  const [setNum, setSetNum] = useState(1);
  const [roundNum, setRoundNum] = useState(1);
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const set = urlParams.get("set");
    const round = urlParams.get("round");

    if (set >= 1 && set <= 12 && round >= 1 && round <= 17) {
      if (!(round > 15 && (set === 2 || set === 5 || set === 6))) {
        setSetNum(set);
        setRoundNum(round);
      } else {
        setSetNum(1);
        setRoundNum(1);
        window.location = `/app/?set=1&round=1`;
      }
    } else {
      setSetNum(1);
      setRoundNum(1);
      window.location = `/app/?set=1&round=1`;
    }
  });

  return (
    <div>
      <Head></Head>
      <div className='container'>
        <Navbar />
        <RoundComponent set={setNum} round={roundNum} />
        <Draggable>
          <div
            style={{ position: "fixed", left: "86vw", top: "70px" }}
            className='draggable'>
            <Timer className='timer' />
          </div>
        </Draggable>
        <Draggable>
          <div
            style={{ position: "fixed", left: 20, top: "86vh" }}
            className='draggable'>
            <Scorer team={1} />
          </div>
        </Draggable>
        <Draggable>
          <div
            style={{ position: "fixed", left: "80vw", top: "86vh" }}
            className='draggable'>
            <Scorer team={2} />
          </div>
        </Draggable>

        <div
          style={{ position: "fixed", left: "1vw", bottom: "3vh" }}
          className='mobile-only'>
          <Timer className='timer' />
        </div>
        <div
          style={{ position: "fixed", right: "1vw", bottom: "11.8vh" }}
          className='mobile-only'>
          <Scorer team={1} />
        </div>
        <div
          style={{ position: "fixed", right: "1vw", bottom: "2vh" }}
          className='mobile-only'>
          <Scorer team={2} className='Scorer' />
        </div>
      </div>
    </div>
  );
}
