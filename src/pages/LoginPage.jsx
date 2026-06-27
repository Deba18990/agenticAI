function LoginPage({ onLogin, error }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    onLogin(username, password);
  };

  return (
    <div className="app-shell">
      <div className="card">
        <h1>React Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Username
            <input name="username" type="text" placeholder="Enter username" required />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Enter password" required />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button className="button button-login" type="submit">
            Log In
          </button>
          <p className="hint">Try: user / pass123</p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
