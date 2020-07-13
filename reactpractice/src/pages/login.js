import React, { Component } from "react";


class Login extends Component{
    state={
        username: "",
        password: "",
    };
    
    render() {
        return (
          <div>
              <div>
              <Navbar
                 title="Login"
               />
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                 />
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   />
                 <br/>
                 <button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             </div>
          </div>
        );
      }
    }
      
      export default Login;