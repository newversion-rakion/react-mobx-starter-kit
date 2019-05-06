import React, { Component } from 'react'
import classes from './Login.module.scss'

class Login extends Component {
  render() {
    return(
      <div className={classes.loginPage}>
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col-sm-6'>
              <form>
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email address</label>
                  <input type='email' className='form-control' placeholder='Enter email' />
                </div>

                <div className='form-group'>
                  <label htmlFor='exampleInputPassword1'>Password</label>
                  <input type='password' className='form-control' placeholder='Password' />
                </div>

                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
