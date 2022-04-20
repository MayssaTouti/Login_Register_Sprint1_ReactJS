import React, { Fragment, useState , useEffect } from "react";
import Login from "./components/Login";
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import  { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

toast.configure(); 


function App() {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  
  const setAuth = (boolean) => {
    setIsAuthentificated(boolean);

  }; 
const  isAuth = async () =>
{
  try {
    const response = await fetch("http://localhost:5000/auth/verify", {

      method: "GET",
      headers: { token: localStorage.jwtToken }

    }); 

const parseRes = await response.json(); 
parseRes === true ? setIsAuthentificated(true) : 
setIsAuthentificated(false)

//console.log(parseRes); 

  } catch (err) {
    console.error(err.message); 
  }
}


useEffect(() => {
    isAuth(); 
}, []); 
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/login"
              render={props => 
                !isAuthentificated ?
                (
                <Login {...props} setAuth={setAuth} />) :
                (<Redirect to="/dashboard" />)
              } />
            <Route exact path="/register"
              render={props => !isAuthentificated ?
                (<Register {...props} setAuth={setAuth} />) :
                (<Redirect to="/login" />)} />
          
            <Route
              exact
              path="/dashboard"
              render={props =>
                isAuthentificated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

          </Switch>


        </div>



      </Router>


    </Fragment>
  );
}

export default App;
