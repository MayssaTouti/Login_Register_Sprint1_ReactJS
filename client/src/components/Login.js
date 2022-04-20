import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


const Login = ({ setAuth }) => {


  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
   {
      setInputs({ ...inputs, [e.target.name]: e.target.value }
        );}

  const onSubmitForm = async e => {
    e.preventDefault(); 

    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();
        
      if(parseRes.jwtToken) {
        localStorage.setItem("jwtToken", parseRes.jwtToken); 
        setAuth(true); 
        toast.success("login successfully") ; 

      }else {
        setAuth(false); 
        toast.error(parseRes); 

      }
 // localStorage.setItem("jwtToken", parseRes.jwtToken);
      // setAuth(true);
    //  console.log(parseRes); 

 // console.log(jsonData); 
    } catch (err) {
      console.error(err.message);

    }
  }; 



  return (
    <section>
      <div>
        <body className="hold-transition login-page" >
          <div className="login-box">


            <div className="card">
              <div className="login-logo">
                <h1> Login </h1>
              </div>
              <div className="card-body login-card-body">
                <form onSubmit={onSubmitForm}>
                  <div className="input-group mb-3">
                    {/* /*****  input email ****** */}
                    <input type="email"
                      class="form-control"
                      name="email"
                      placeHolder="Email"
                      value={email}
                      onChange={e => onChange(e)}
                    />

                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    {/* /*****  input password  ****** */}
                    <input type="password"
                      className="form-control"
                      name="password"
                      placeHolder="Password"
                      value={password}
                      onChange={e => onChange(e)}
                    />

                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">

                    <div className="col-4">
                      <button type="submit"> Register </button>
                      {/* <button className="btn btn-primary btn-block" onClick={() => setAuth(true)} > Authentificate </button> */}

                    </div>

                  </div>
                  <Link to="/register" > Register </Link>
                </form>
                <br></br>

                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p className="mb-0">
                  <a href="register.html" className="text-center">Register a new admin</a>
                </p>

              </div>
            </div>
          </div>
        </body>
     
      </div>

    </section>
  );
}

export default Login;