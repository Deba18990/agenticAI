import { Link } from 'react-router-dom';

function DashboardPage({ onLogout }) {
  return (
    <div className="app-shell">
      <div className="card dashboard-card">
        <h1>Dashboard</h1>
        <p>You have successfully logged in.</p>
        <div className="dashboard-actions">
          <Link className="button button-login" to="/">
            Go to Login
          </Link>
          <button className="button button-logout" onClick={onLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
