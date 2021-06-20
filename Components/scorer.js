/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

const Scorer = (props) => {
  let [score, setScore] = useState(0);
  let teamNum = props.team;

  return (
    <div id='Scorer'>
      <h3>Score - Team {teamNum}</h3>
      <div id='scorerContainer'>
        <button
          onClick={() => {
            setScore(score - 4);
          }}
          className='dangerBtn'>
          -4
        </button>
        <button
          onClick={() => {
            setScore(score - 10);
          }}
          className='dangerBtn'
          id='reduceTen'>
          -10
        </button>
        <p className='score'>{score}</p>
        <button
          onClick={() => {
            setScore(score + 4);
          }}
          className='primaryBtn'
          id='increaseFour'>
          +4
        </button>
        <button
          onClick={() => {
            setScore(score + 10);
          }}
          className='primaryBtn'
          id='increaseTen'>
          +10
        </button>
      </div>
    </div>
  );
};

export default Scorer;

Scorer.propTypes = {
  team: PropTypes.number.isRequired,
};
