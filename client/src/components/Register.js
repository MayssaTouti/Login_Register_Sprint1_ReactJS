import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = ({ setAuth }) => {
  //laset version 
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    nom: ""
  });
  const { email, password, nom } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name] : e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();

    try {
      const body = { email, password, nom };
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
           "Authorization": "token", 
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      
      if (parseRes.jwtToken) {

        localStorage.setItem("jwtToken", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register  successfully");

      } else {
        setAuth(false);
        toast.error(parseRes);

      }





   
     // console.log(parseRes); 
    } catch (err) {
      console.error(err.message);
    }
  };



  return (
    <Fragment>
      <body className="hold-transition register-page">
        <div className="register-box">
          <div className="card"> <div class="register-logo">
            <a href="/"><b>Sign</b>UP</a>
          </div>
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>

              <form onSubmit={onSubmitForm}>
                <div className="input-group mb-3">
                  {/********  input name ********* */}

                  <input
                    type="text"
                    name="nom"
                    value={nom}
                    placeholder="name"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                  />

                </div><br></br>

                <div className="input-group mb-3">
                  {/********  input email ********* */}
                  <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                  />

                </div><br></br>

                <div className="input-group mb-3">
                  {/********  input password ********* */}
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                  />

                </div><br></br>
                <div className="input-group mb-3">
                  {/********  input confirm password ********* */}


                </div><br></br>

                <div className="row">
                  <div className="col-8">

                  </div>
                  <div className="col-4">
                    <button className="btn btn-success btn-block">Submit</button>
                  </div>

                </div>
                <Link to="/login"> Login</Link>
              </form>


              <a href="/login" className="text-center">I already have a membership</a>
            </div>
          </div>
        </div>
      </body>
     
    </Fragment>
  );
};
export default Register;