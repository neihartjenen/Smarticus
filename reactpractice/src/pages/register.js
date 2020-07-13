import React, { Component } from "react";

class Register extends Component{
    state={
        email: "",
        password: "",
        first_name:"",
        last_name:"",
    };
    
    render() {
        return (
            <div>
              <NavBar
                 title="Register"
               />
               <form>
               <TextField
                 hintText="Enter your First Name"
                 floatingLabelText="First Name"
                 onChange = {(event,newValue) => this.setState({first_name:newValue})}
                 />
               <br/>
               <TextField
                 hintText="Enter your Last Name"
                 floatingLabelText="Last Name"
                 onChange = {(event,newValue) => this.setState({last_name:newValue})}
                 />
               <br/>
               <TextField
                 hintText="Enter your Email"
                 type="email"
                 floatingLabelText="Email"
                 onChange = {(event,newValue) => this.setState({email:newValue})}
                 />
               <br/>
               <TextField
                 type = "password"
                 hintText="Enter your Password"
                 floatingLabelText="Password"
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               </form>
               <button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
        );
      }
    }
    
    export default Register;
    
      