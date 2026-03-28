import { useState } from 'react';

interface Props { onLogin: (u: string, p: string) => void; }

export const Login = ({ onLogin }: Props) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="auth-card">
      <h3>Sign In</h3>
      <input 
        className="auth-input"
        type="text" placeholder="Username" 
        value={name} onChange={(e) => setName(e.target.value)}
      />
      <input 
        className="auth-input"
        type="password" placeholder="Password" 
        value={pass} onChange={(e) => setPass(e.target.value)}
      />
      <button className="btn btn-login" onClick={() => onLogin(name, pass)}>
        Login
      </button>
    </div>
  );
};