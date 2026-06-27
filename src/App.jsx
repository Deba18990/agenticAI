import { useState } from 'react';

const validCredentials = {
  username: 'user',
  password: 'pass123',
};

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === validCredentials.username && password === validCredentials.password) {
      setIsLoggedIn(true);
      setError('');
      setUsername('');
      setPassword('');
    } else {
      setError('Username or password is incorrect.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setError('');
  };

  return (
    <div className="app-shell">
      <div className="card">
        <h1>React Login</h1>
        {isLoggedIn ? (
          <div className="welcome-panel">
            <p>Welcome back, <strong>{validCredentials.username}</strong>!</p>
            <button className="button button-logout" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter username"
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                required
              />
            </label>
            {error && <p className="error-message">{error}</p>}
            <button className="button button-login" type="submit">
              Log In
            </button>
            <p className="hint">Try: user / pass123</p>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
