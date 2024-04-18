// Login.tsx

import React from 'react';
import './Login.css'; 

const OrangeSquare: React.FC = () => {
  return <div className="orange shape"></div>;
};

const BlueSquare: React.FC = () => {
  return <div className="blue shape"></div>;
};

const Login: React.FC = () => {
  return (
    <div className="background">
      <OrangeSquare />
      <BlueSquare />
      <form>
        <h3>SastraSanchaya</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button>Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
