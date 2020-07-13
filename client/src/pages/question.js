import React, { Component } from "react";
import {Col, Row, Container} from "../components/Grid"
import Format from "../components/Question"

class Question extends Component{
    state={
        questions:[]
    };

render() {
    return(
        <Container>
            <Format/>
        </Container>
    )
}

}

export default Question;