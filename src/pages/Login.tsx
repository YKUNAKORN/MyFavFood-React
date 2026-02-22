import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import loginBG from '../assets/images/BG/LoginBG.jpg';

interface LoginForm {
  email: string;
  password: string;
}

interface LoginResponse {
  token?: string;
  message?: string;
}

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      const data: LoginResponse = await response.json();

      if (!response.ok) {
        setError(data.message ?? 'Login failed');
        return;
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/overview');
      } else {
        setError('Failed to receive token.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      {/* Left sidebar - background image */}
      <div className="l-sidebar">
        <img src={loginBG} alt="Background" />
      </div>

      {/* Right sidebar - login form */}
      <div className="r-sidebar">
        <div className="login-form">
          <h1 className="title">MyFavFood</h1>
          <h4>Login</h4>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <p>Email</p>
              <label htmlFor="email">
                <i className="bi bi-envelope icon"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@mail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="input-group">
              <p>Password</p>
              <label htmlFor="password">
                <i className="bi bi-lock icon"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="* * * * * * * * * * * * * * *"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
