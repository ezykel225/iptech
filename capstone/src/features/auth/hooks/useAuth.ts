import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) setUser(savedUser);
  }, []);

  const register = (username: string, pass: string) => {
    if (!username || !pass) return alert("Fill in all fields");
    
    const users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    // Check if username exists
    if (users.find((u: any) => u.username === username)) {
      alert("Username already taken!");
      return;
    }

    users.push({ username, pass });
    localStorage.setItem('mockUsers', JSON.stringify(users));
    alert("Registered successfully!");
  };

  const login = (username: string, pass: string) => {
    const users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    const found = users.find((u: any) => u.username === username && u.pass === pass);

    if (found) {
      localStorage.setItem('currentUser', username);
      setUser(username);
      return true;
    }
    alert("Invalid username or password!");
    return false;
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return { user, login, register, logout };
};