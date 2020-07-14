import React, { Component } from "react";


class Login extends Component{
    state={
        username: "",
        password: "",
    };
    
    render() {
        return (
            <form style={styles.form} onSubmit={this.handleOnSubmit}>
            <h4>Welcome Back!</h4>
            <div className='form-group row'>
              <input className='input' type='text' placeholder='Email'/>
            </div>
            <div className='form-group row'>
              <input className='input' type='password' placeholder='Password'/>
            </div>
            <div className='form-group row'>
              <button className='btn' type='submit'>Log In</button>
            </div>
            <div className='form-group row'>
            </div>
          </form>
        );
      }
    }
      
      export default Login;