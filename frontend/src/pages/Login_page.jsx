import { useState } from "react";
import "../styles/Login_page.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Later:
    // axios.post("http://localhost:5000/api/login", formData)
  };

  return (
    <div className="login-container">
      <div className="login-split-layout">
        
        {/* Left Branding & Illustration Panel */}
        <div className="login-brand-panel">
          <div className="brand-overlay"></div>
          <div className="brand-content">
            <div className="brand-logo-container">
              <svg className="brand-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="brand-name">NEXUS ERP</span>
            </div>

            <div className="hero-text-section">
              <h1 className="hero-title">Next-Gen Enterprise Management</h1>
              <p className="hero-subtitle">
                Unify your workforce, finance, supply chain, and operations inside one beautiful, real-time portal.
              </p>
            </div>

            {/* Simulated Live Analytics Widget */}
            <div className="live-widget-card">
              <div className="widget-header">
                <span className="widget-indicator"></span>
                <span className="widget-title">Live System Status</span>
                <span className="widget-tag">99.98% uptime</span>
              </div>
              <div className="widget-body">
                <div className="metric-row">
                  <span className="metric-label">Active Users</span>
                  <div className="metric-progress-container">
                    <div className="metric-progress-bar" style={{ width: "78%" }}></div>
                  </div>
                  <span className="metric-value">1,482</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Server Load</span>
                  <div className="metric-progress-container">
                    <div className="metric-progress-bar load-bar" style={{ width: "34%" }}></div>
                  </div>
                  <span className="metric-value">34%</span>
                </div>
              </div>
            </div>

            {/* Core Features list */}
            <ul className="brand-features">
              <li className="feature-item">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>Enterprise Grade End-to-End Encryption</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
                <span>Automated Forecasting & Insights</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="login-form-panel">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Secure Sign In</h2>
              <p>Welcome back! Enter your credentials to access your ERP portal.</p>
            </div>

            <form onSubmit={handleSubmit} className="actual-login-form">
              
              {/* Email Address */}
              <div className="input-group-v2">
                <label className="field-label">Email Address</label>
                <div className="input-with-icon">
                  <span className="input-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="input-group-v2">
                <label className="field-label">Password</label>
                <div className="input-with-icon">
                  <span className="input-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your security password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="eye-icon">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="eye-icon">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot options */}
              <div className="form-actions-row">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="custom-checkbox-input"
                  />
                  <span className="checkbox-design"></span>
                  <span className="checkbox-label">Keep me logged in</span>
                </label>
                <a href="#" className="forgot-password-link">Forgot Password?</a>
              </div>

              {/* Login Button */}
              <button className="submit-action-btn" type="submit">
                <span>Sign In To Portal</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12,5 19,12 12,19"/>
                </svg>
              </button>

            </form>

            <div className="form-footer">
              <span className="footer-text">New to Nexus ERP?</span>
              <Link to="/register" className="footer-link">Create an account</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
