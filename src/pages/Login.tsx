import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import '../styles/style.css';
import loginBG from '../assets/images/BG/LoginBG.jpg';

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Submission logic removed. Implement network call here when needed.
  }

  return (
    <div className="login-container">
      {/* Left sidebar - background image */}
      <div className="login-l-sidebar">
        <img src={loginBG} alt="Background" />
      </div>

      {/* Right sidebar - login form */}
      <div className="login-r-sidebar">
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

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
