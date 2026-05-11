import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

export function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Захардкоджені дані
    if (login === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      alert('Wrong credentials!');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input type="text" placeholder="Login" onChange={e => setLogin(e.target.value)} className={styles.input} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className={styles.input} />
        <button type="submit" className={styles.btn}>Login</button>
      </form>
    </div>
  );
}