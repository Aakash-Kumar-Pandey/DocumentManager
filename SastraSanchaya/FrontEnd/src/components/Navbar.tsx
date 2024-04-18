import { useState } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Login from './Login'; // Import the Login component

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // Add this line

  return (
    <>
      {!showLogin && (
        <nav className="navbar">
          {/* Left Side */}
          <div className="navbar-left">
            <img src="src\assets\folders-documents-neon-icon-elements-web-set-simple-websites-design-mobile-app-info-graphics-dark-gradient-148836392-transformed-Photoroom.png-Photoroom.png" alt="SastraSanchaya Logo" className="logo" />
            <span className="website-name">SastraSanchaya</span>
          </div>
          
          {/* Right Side */}
          <div className="navbar-right">
            <button className="login-button" onClick={() => setShowLogin(true)}> {/* Add the onClick handler here */}
              <FontAwesomeIcon icon={faSignInAlt} /> 
              Login
            </button>
          </div>
        </nav>
      )}

      {/* Conditionally render the Login component */}
      {showLogin && <Login />}
    </>
  );
}

export default App;
