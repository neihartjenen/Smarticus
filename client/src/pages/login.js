import React, { Component } from "react";
import {Container, Col, Row} from "../components/Grid";
import Smarticus from "../Images/Smarticus_2.png";

class Login extends Component{
    state={
        username: "",
        password: ""
    };

    verification(){
        console.log(this.state.username);
        console.log(this.state.password);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    render() {
        return(
            <Container>
                <Row>
                    <Col size={"12"}>
                        <Row>
                            <img alt={"smarticus"} src={Smarticus} style={{float:"center"}}></img>
                        </Row>
                        <Row>
                            <p style={{color:"white", fontSize:"25px"}}>Login:</p>
                            <input value={this.state.username} style={{color:"white"}} onChange={this.handleInputChange} placeholder="Username"></input>
                        </Row>
                        <Row>
                            <input value={this.state.password} style={{color:"white"}} onChange={this.handleInputChange} placeholder="Password"></input>
                        </Row>
                        <Row>
                            <button className="btn waves-effect waves-light" type="submit" name="action" >
                                Login
                                <i class="material-icons right">send</i>
                            </button>
                        </Row>
                        <Row>
                            <a href={"/signup"} style={{float:"right"}}>SignUp</a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
      }
      
}
      
export default Login;