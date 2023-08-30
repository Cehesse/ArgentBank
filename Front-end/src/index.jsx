//REACT
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//SASS
import "./sass/main.scss";

//PAGES
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import User from "./pages/User"

//LAYOUT
import Header from "./layout/Header"
import Footer from "./layout/Footer"
 
//ROUTE
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/user" element={<User />} />
          </Routes>
      <Footer />
      </div>
    </Router>
  </React.StrictMode>
);