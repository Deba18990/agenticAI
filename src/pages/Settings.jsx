import { Link } from 'react-router-dom';

function Settings({ onLogout }) {
  return (
    <div className="app-shell">
      <div className="card">
        <h1>Settings</h1>
        <p className="sidebar-note">This area is restricted to signed-in users.</p>
        <div className="dashboard-actions">
          <Link className="button button-login" to="/dashboard">
            Back to Dashboard
          </Link>
          <button className="button button-logout" onClick={onLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
