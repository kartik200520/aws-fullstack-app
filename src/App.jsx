import { useState } from "react";
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(isSignup ? "Signup clicked!" : "Login clicked!");
  };

  return (
    <div className="app">
      <div className="auth-container">
        <div className="brand">
          <div className="brand-icon">☁</div>
          <h2>AWSCloud</h2>
        </div>

        <div className="auth-card">
          <h1>{isSignup ? "Create Account" : "Welcome Back"}</h1>

          <p className="subtitle">
            {isSignup
              ? "Create your account to get started"
              : "Login to access your cloud dashboard"}
          </p>

          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {!isSignup && (
              <div className="forgot-password">
                <button type="button">
                  Forgot Password?
                </button>
              </div>
            )}

            <button className="submit-btn" type="submit">
              {isSignup ? "Create Account" : "Login"}
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <p className="switch-text">
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              className="switch-btn"
              type="button"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? " Login" : " Sign Up"}
            </button>
          </p>
        </div>

        <p className="footer">
          Powered by AWS Cloud Services
        </p>
      </div>
    </div>
  );
}

export default App;