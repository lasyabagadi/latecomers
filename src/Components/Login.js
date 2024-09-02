import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Login() {

    const [data, setData] = useState({
        email:"",
        password:""
      });

      const handleSubmit = (event) => {
        event.preventDefault();
        const api = 'http://localhost:4000/api/login'
            axios.post(api,data).then((response) => {
                console.log(response.data)
                // alert(response.status)
                alert(response.data.message)
                if(response.status==200){
                  window.location.href='/dashboard';
                }            
            })
    
            .catch(error => {
              console.log(error.response)
    
              if(error.response.status==401)
              {
                alert(error.response.data.message)
              }
              else{
                alert(error)
              }
            });
      };

  return (
    <>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" onChange={(e) =>setData({...data, email: e.target.value })}/>
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword" type="password" placeholder="Password" onChange={(e) =>setData({...data, password: e.target.value })}/>
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="password.html">Forgot Password?</a>
                                                {/* <Link to='/dashboard' className="btn btn-primary" href="index.html">Login</Link> */}
                                                <input type='submit' className='three'/>
                                               
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>
  )
}
