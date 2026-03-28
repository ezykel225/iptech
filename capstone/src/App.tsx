import { useAuth } from './features/auth/hooks/useAuth';
import { Login } from './features/auth/components/login';
import { Register } from './features/auth/components/register';
import './App.css';

function App() {
  const { user, login, register, logout } = useAuth();

  if (user) {
    return (
      <div className="home-screen">
        <h1>Welcome back, {user}!</h1>
        <button onClick={logout} className="btn btn-logout">Logout</button>
      </div>
    );
  }

  return (
    <div className="portal-container">
      <h1 className="portal-title">Secured Guard Portal</h1>
      <Login onLogin={login} />
      <div className="divider">OR</div>
      <Register onRegister={register} />
    </div>
  );
}

export default App;