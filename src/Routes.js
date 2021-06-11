import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App";
import Profilepage from "./components/Profilepage"




const Routes = () =>{

  return (
    <Router>

      <Route path="/" exact>
        <App/>
      </Route>

      <Route path="/:id">
        <Profilepage/>
      </Route>

    </Router>
    
  )
}

export default Routes;