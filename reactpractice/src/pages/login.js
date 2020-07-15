import React, { Component } from "react";
import {Col, Row, Container} from "../../components/Grid";


class Login extends Component{
    state={
        username: "",
        password: "",
    };
    
    render() {
    return(
        <Container>
          <Row>
            <Col size={"12"}>
              <h1>Please Login</h1>
            </Col>
          </Row>
          <div>
            <Row>
              <Col size={"12"}>
                <p>Email</p>
              </Col>
            </Row>
          </div>
          <Row>
            <Col size={"12"}>
              <p>Password</p>
            </Col>
          </Row>
          <Row>
            <Col size={"5"}>
              <button className='btn' type="submit">Submit</button>
            </Col>
          </Row>
        </Container>
    )
}

}

export default Login;