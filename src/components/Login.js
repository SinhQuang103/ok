import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'Admin' && password === 'Admin') {
            navigate('/admin'); // Redirect to admin page
        } else if (username === 'USN' && password === 'PWS') {
            navigate('/'); // Redirect to home page
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login">
            <div className="login-box">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <div className="login-button" onClick={handleLogin}>
                    Login
                </div>
            </div>
        </div>
    );
};

export default Login;
