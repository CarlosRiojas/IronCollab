import React from 'react';
import SignupCard from "../SignCard"


function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <h3>Please SignUp</h3>
      <SignupCard />
      <div>
        <h3>or Login</h3>
        <a name="" id="" className="btn btn-primary" href="/login" role="button">Login</a>
      </div>
    </div>
  );
}

export default Home;
