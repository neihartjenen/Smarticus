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
          <form style={styles.form} onSubmit={this.handleOnSubmit}>
          <h4>Welcome Back!</h4>
          <div className='form-group row'>
            <input className='input' type='text' placeholder='New User'/>
          </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder='Password'/>
          </div>
          <div className='form-group row'>
            <button className='btn' type='submit'>Register Now</button>
          </div>
          <div className='form-group row'>
          </div>
        </form>
        );
      }
    }
    
    export default Register;
    
      