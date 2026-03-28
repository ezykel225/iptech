import { useState } from 'react';

interface Props { onRegister: (u: string, p: string) => void; }

export const Register = ({ onRegister }: Props) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="auth-card">
      <h3>Create Account</h3>
      <input 
        className="auth-input"
        type="text" placeholder="New Username" 
        value={name} onChange={(e) => setName(e.target.value)}
      />
      <input 
        className="auth-input"
        type="password" placeholder="New Password" 
        value={pass} onChange={(e) => setPass(e.target.value)}
      />
      <button className="btn btn-register" onClick={() => onRegister(name, pass)}>
        Register
      </button>
    </div>
  );
};