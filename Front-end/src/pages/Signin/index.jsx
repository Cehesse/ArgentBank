import React from "react";
import { useState } from 'react';
//COMPONENTS

//FCT
function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
 ;}


    return (
      <div className="pages">
        <main className="bg-dark">
          <section className="section-sign-in">
            <i className="fa fa-user-circle section-sign-in_icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
              <div className="section-sign-in_input-wrapper">
                <label htmlFor="email">Username</label>
                <input 
                  type="text" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="section-sign-in_input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className="section-sign-in_input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className="section-sign-in_button" id="connect" type="submit" >
                <span>Sign In</span>
              </button>
            </form>
    {/*         <div className="input-error">
              {error && <p>{error}</p>}
            </div> */}
          </section>
        </main>
      </div>
    )
  }

  export default Signin