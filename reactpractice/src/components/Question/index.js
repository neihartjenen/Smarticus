import React, { Component } from "react";
import Header from "../header";
import {Container, Col, Row} from "../Grid";
import Footer from "../footer";

class Question extends Component{
  state={
      Question: "",
      Answer: "",
      PossibleAnswers: []
  };

  HandleChange(){
    this.setState({
      Question: "Finish the sentence: ",
      Answer: "This sentence is already finished",
      PossibleAnswers: ["Meat", "pizza", "something isn't right here", "I don't even know"]
    })
  }

  componentDidMount(){
    console.log("handled Change");
    this.HandleChange();
  }

render() {
  console.log(this.state.Question)
  return(
    <div>
        <Row>
            <Col size={"12"}>
                <p>
                    {this.state.Question}
                </p>
            </Col>
        </Row>
        <Row>
          <Col size={"12"}>
            {this.state.PossibleAnswers.map((answer,i) => 
              <p key={i}>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>{answer}</span>
                </label>
              </p>
            
            )
            }
          </Col>
        </Row>
        <Row>
            <Col size={"12"}>
                <p>
                    {this.state.Answer}
                </p>
            </Col>
        </Row>
        </div>
  )
}

}

export default Question;