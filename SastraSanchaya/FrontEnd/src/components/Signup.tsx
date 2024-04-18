import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faBuilding, faSignInAlt, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';

const Signup = () => {
    // State variables for form fields
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [organization, setOrganization] = useState('Personal');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform signup logic here
        console.log("Signup form submitted!");
        // You can send form data to backend or perform any necessary actions
    }

    return (
        
        <div className="signup-container">
            <div className="signup-image">
                <img src="https://c4.wallpaperflare.com/wallpaper/801/537/155/pen-ink-paper-letter-wallpaper-preview.jpg" alt="Signup" />
            </div>
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <FontAwesomeIcon icon={faUser} className="flaticon-icon" />
                            Name:
                        </label>
                        <input type="text" id="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNo">
                            <FontAwesomeIcon icon={faPhone} className="flaticon-icon" />
                            Phone No:
                        </label>
                        <input type="tel" id="phoneNo" value={phoneNo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <FontAwesomeIcon icon={faEnvelope} className="flaticon-icon" />
                            Email:
                        </label>
                        <input type="email" id="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group password-wrapper">
                        <label htmlFor="password">
                            <FontAwesomeIcon icon={faLock} className="flaticon-icon" />
                            Password:
                        </label>
                        <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="password-toggle" onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    <div className="form-group password-wrapper">
                        <label htmlFor="confirmPassword">
                            <FontAwesomeIcon icon={faLock} className="flaticon-icon" />
                            Confirm Password:
                        </label>
                        <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
                        <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organization">
                            <FontAwesomeIcon icon={faBuilding} className="flaticon-icon" />
                            Organization:
                        </label>
                        <select id="organization" value={organization} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOrganization(e.target.value)}>
                            <option value="Personal">Personal</option>
                            <option value="IBM">IBM</option>
                            <option value="ITER">ITER</option>
                            <option value="KIIT">KIIT</option>
                        </select>
                    </div>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSignInAlt} className="signup-icon" />
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
