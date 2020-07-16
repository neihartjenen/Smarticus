import React from "react";
import {Col, Row} from "../Grid";
import useSound from 'use-sound';
import wrongSfx from '../../Sound/wrong.mp3';
import rightSfx from '../../Sound/right.mp3';

function Format(props){
  const [wrong] = useSound(wrongSfx);
  const [right] = useSound(rightSfx);
  const isTrue = false;
  // console.log("Inside component",props.question);
    return (
        <div>
          <Row>
              <Col size={"12"}>
                  <p>
                      {props.question}
                  </p>
              </Col>
          </Row>
          <Row>
          {}
              {props.answers.map(answerSub => 
                answerSub.map((answer) =>(
                  <Col size={"6"}>
                    <a className="waves-effect waves-light btn-large" style={{margin:"10px"}} onClick={() => props.changeQuestion(answer, props.correct) ? right() : wrong()}>{answer}</a>
                  </Col>
                ))
              )
              }
          </Row>
          <Row>
              <Col size={"10"}>
                  <p>
                    {/* Score */}
                  </p>
              </Col>
              <Col size={"2"}>
              <a className="waves-effect waves-light btn-large" onClick={() => alert(props.hint)} style={{margin:"10px"}}>Hint</a>
              </Col>
          </Row>
      </div>
    )
}

export default Format;