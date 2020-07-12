import React, { Component } from "react";
import Header from "../header";
import {Container, Col, Row} from "../Grid";
import Footer from "../footer";

class Question extends Component{
  state={
      Quesiton: "",
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
  return(
      <Container>
        {/* <Header>{this.state.Quesiton}</Header> */}
        <Row>
          <Col size={"12"}>
            {this.state.PossibleAnswers.map(answer => 
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>{answer}</span>
                </label>
              </p>
            
            )
            }
          </Col>
        </Row>
          {/* <Footer>{this.state.Answer}</Footer> */}
      </Container>
  )
}

}

export default Question;