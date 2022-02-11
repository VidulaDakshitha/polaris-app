import React, { Component } from "react";
import {  BrowserRouter as Router, Route, Routes,Redirect } from "react-router-dom";

import "./App.css";


// Pages
const Authentication = React.lazy(() => import("./views/authentication/authentication.js"));
const Setup = React.lazy(() => import("./views/setup/setup.js"));



class App extends Component {
  loading():void{

  }
  render() {
    return (
       <Router >




      <Routes>
            <Route
              path="/setup"
       
               element={
                  <React.Suspense fallback={<>...</>}>
               <Setup  />
               </React.Suspense>
               }
              // render={(props) => <Setup {...props} />}
            ></Route>
          
       
           </Routes>


          <Routes>
         <Route
              path="/"
            
               element={
                  <React.Suspense fallback={<>...</>}>
               <Authentication  />
                  </React.Suspense>
               }
              // render={(props) => <Authentication {...props} />}
            ></Route>
            </Routes>

    </Router>
    );
  }
}

export default App;