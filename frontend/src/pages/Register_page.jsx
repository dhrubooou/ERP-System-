import "../styles/Register_page.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    employeeId: "",
    department: "",
    role: "",
    address: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
      employeeId: "",
      department: "",
      role: "",
      address: "",
    });
    setTermsAccepted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData, "Terms Accepted:", termsAccepted);
    // Handle form submission logic here
  };

  return (
    <div className="register-container">
      <div className="register-card-wrapper">
        
        {/* Brand/Header block inside card */}
        <div className="register-header">
          <div className="register-brand">
            <svg className="register-brand-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="register-brand-text">NEXUS ERP</span>
          </div>
          <h2>Create New Account</h2>
          <p>Please fill in the information below to register your profile within the enterprise system.</p>
        </div>

        <form className="register-form-v2" onSubmit={handleSubmit} onReset={handleReset}>
          
          {/* STEP 1: Personal Profile */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-step">1</span>
              Personal Profile
            </h3>
            <div className="form-grid-2">
              
              <div className="input-field-container">
                <label htmlFor="firstName">First Name</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field-container">
                <label htmlFor="lastName">Last Name</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field-container">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field-container">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

            </div>
          </div>

          {/* STEP 2: Security & Credentials */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-step">2</span>
              Account Credentials
            </h3>
            <div className="form-grid-3">
              
              <div className="input-field-container">
                <label htmlFor="username">Username</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="johndoe_nexus"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field-container">
                <label htmlFor="password">Password</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Min. 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-field-container">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Verify your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

            </div>
          </div>

          {/* STEP 3: ERP Information */}
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-step">3</span>
              Organizational Context
            </h3>
            <div className="form-grid-3">
              
              <div className="input-field-container">
                <label htmlFor="employeeId">Employee ID</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    placeholder="EMP-2026-88"
                    value={formData.employeeId}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-field-container">
                <label htmlFor="department">Department</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </span>
                  <select 
                    id="department" 
                    name="department" 
                    value={formData.department} 
                    onChange={handleChange}
                  >
                    <option value="">Select Department</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales">Sales</option>
                    <option value="IT">IT</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
              </div>

              <div className="input-field-container">
                <label htmlFor="role">Role</label>
                <div className="input-with-icon-v2">
                  <span className="input-icon-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </span>
                  <select 
                    id="role" 
                    name="role" 
                    value={formData.role} 
                    onChange={handleChange}
                  >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Full-width Address Textarea */}
            <div className="input-field-container textarea-container">
              <label htmlFor="address">Address</label>
              <div className="textarea-with-icon">
                <span className="input-icon-v2 top-aligned-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="Street, City, State, ZIP Code"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="terms-checkbox-v2">
            <label className="checkbox-wrapper-v2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
                className="custom-checkbox-input-v2"
              />
              <span className="checkbox-design-v2"></span>
              <span className="checkbox-label-v2">
                I agree to the <a href="#" className="inline-link" onClick={(e) => e.preventDefault()}>Terms & Conditions</a> and <a href="#" className="inline-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.
              </span>
            </label>
          </div>

          {/* Actions & Buttons */}
          <div className="register-actions-row">
            <button className="reset-action-btn" type="reset">
              Reset Form
            </button>
            <button className="register-submit-btn" type="submit">
              <span>Create Account</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </button>
          </div>

        </form>

        <div className="register-footer">
          <span className="footer-text">Already registered?</span>
          <Link to="/" className="footer-link">Secure Log In</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;
