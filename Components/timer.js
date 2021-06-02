/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Timer() {
  return (
    <>
      <Card className='Card' id='Timer'>
        <Card.Body>
          <div className='cardHeader'>
            <Card.Title className='title'>Timer</Card.Title>
          </div>
          <div className='cardHeader'>
            <Card.Text className='text'>00:00</Card.Text>
          </div>
          <div className='buttonContainer'>
            <button className='primaryBtn'>
              Bonus
              <br />
              (20s)
            </button>
            <button className='primaryBtn' id='tossupBtn'>
              Tossup
              <br />
              (5s)
            </button>
            <button className='dangerBtn'>
              Clear
              <br />
              timer
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
