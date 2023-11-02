import React from "react";
import '../login/login.css'
import Layout from "../Sublayout/Layout";
const Login = () => {
  return (
    <>
     <Layout>

     <div className="container">
        <div className="logbox">
        <h1 className='text-center my-2'>Login </h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
           <div className="text-center">
            
           <button type="submit" className="btn-log">
              Submit
            </button>
           </div>
          </form>
        </div>
      </div>
     </Layout>
    
    </>
  );
};

export default Login;
