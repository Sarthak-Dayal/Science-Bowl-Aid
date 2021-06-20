/** @format */

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import EndAudio from "./sound";
let timer = "N/A";

export default function Timer() {
  const [time, setTime] = useState("00:00");

  function startTimer(duration) {
    let now = new Date();
    let end = new Date();
    end.setSeconds(end.getSeconds() + duration);
    timer = setInterval(() => {
      if (end >= now) {
        let current = new Date();
        current.setMinutes(end.getMinutes() - now.getMinutes());
        current.setSeconds(end.getSeconds() - now.getSeconds());
        setTime(
          current.getSeconds() < 10
            ? "0" +
                current.getSeconds() +
                ":" +
                (1000 - current.getMilliseconds()).toString().substring(0, 2)
            : current.getSeconds() +
                ":" +
                (1000 - current.getMilliseconds()).toString().substring(0, 2)
        );
        now = new Date();
      } else timeEnd();
    }, 1);
  }

  function timeEnd() {
    playSound();
    clearInterval(timer);
    setTime("00:00");
    timer = "N/A";
  }

  function clearTimer() {
    if (timer != "N/A") clearInterval(timer);
    timer = "N/A";
    setTime("00:00");
  }

  return (
    <>
      <Card className='Card' id='Timer'>
        <Card.Body>
          <div className='cardHeader'>
            <Card.Title className='title'>Timer</Card.Title>
          </div>
          <div className='cardHeader'>
            <Card.Text className='text'>{time}</Card.Text>
          </div>
          <div className='buttonContainer'>
            <button
              className='primaryBtn'
              onClick={() => {
                stopSound();
                clearTimer();
                startTimer(20);
              }}>
              Bonus
              <br />
              (20s)
            </button>
            <button
              className='primaryBtn'
              id='tossupBtn'
              onClick={() => {
                stopSound();
                clearTimer();
                startTimer(5);
              }}>
              Tossup
              <br />
              (5s)
            </button>
            <button
              className='dangerBtn'
              onClick={() => {
                stopSound();
                clearTimer();
              }}>
              Clear
              <br />
              timer
            </button>
          </div>
        </Card.Body>
      </Card>
      <EndAudio />
    </>
  );
}

function playSound() {
  let aud = document.getElementById("timerEnd");
  aud.play();
}

function stopSound() {
  let aud = document.getElementById("timerEnd");
  if (aud.play) aud.pause();
}
