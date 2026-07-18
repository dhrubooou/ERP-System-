import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.classList.add("admin-dashboard-root");
    }
    return () => {
      if (root) {
        root.classList.remove("admin-dashboard-root");
      }
    };
  }, []);

  return (
    <>
      {/* Sidebar Section */}
      <aside>
        <div className="sidebar-brand">
          <svg className="brand-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
            <path d="M2 17L12 22L22 17"/>
            <path d="M2 12L12 17L22 12"/>
          </svg>
          <span className="brand-name">NEXUS ERP</span>
        </div>

        {/* Active Admin User Profile */}
        <div className="sidebar-user">
          <div className="user-avatar">DA</div>
          <div className="user-info">
            <span className="user-name">Dhrubojyoti</span>
            <span className="user-role">Super Admin</span>
          </div>
        </div>

        {/* Navigation Menu List */}
        <ul className="sidebar-menu">
          <li>
            <Link to="#" className="menu-item-link active" onClick={(e) => e.preventDefault()}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="9"/>
                <rect x="14" y="3" width="7" height="5"/>
                <rect x="14" y="12" width="7" height="9"/>
                <rect x="3" y="16" width="7" height="5"/>
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item-link" onClick={(e) => e.preventDefault()}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>User Directory</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item-link" onClick={(e) => e.preventDefault()}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <span>Ledger & Finance</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item-link" onClick={(e) => e.preventDefault()}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <span>Inventory Stock</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item-link" onClick={(e) => e.preventDefault()}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>Human Resources</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item-link" onClick={(e) => e.preventDefault()}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              <span>Portal Settings</span>
            </Link>
          </li>
        </ul>

        {/* Footer (Logical segment inside sidebar) */}
        <div className="sidebar-footer">
          <span className="system-status-indicator">
            <span className="pulse-dot"></span>
            Secure Sync
          </span>
          <span>v2.4.1</span>
        </div>
      </aside>

      {/* Main Workspace */}
      <main>
        
        {/* Header Section */}
        <header>
          <div className="header-title-block">
            <h1>Admin Control Center</h1>
            <p>Welcome back, Dhrubojyoti. System status is completely optimal.</p>
          </div>

          <div className="header-actions">
            {/* Search Bar */}
            <div className="search-bar-container">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input type="text" className="search-input" placeholder="Search invoices, logs, users..." readOnly value="Search ERP Database..." />
            </div>

            {/* Health Badges */}
            <div className="system-health-badges">
              <span className="health-badge db">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
                </svg>
                DB Connected
              </span>
              <span className="health-badge cloud">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
                Cloud Active
              </span>
            </div>

            {/* Notification Bell */}
            <button className="notification-bell-btn">
              <svg className="bell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span className="bell-badge"></span>
            </button>
          </div>
        </header>

        {/* KPI Cards Section */}
        <section className="kpi-grid">
          
          {/* Monthly Revenue Card */}
          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Monthly Revenue</span>
              <div className="kpi-icon-container revenue">
                <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
            </div>
            <div className="kpi-body">
              <span className="kpi-value">$142,850</span>
              <div className="kpi-trend up">
                <svg className="kpi-trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                <span>+12.4%</span>
                <span className="kpi-trend-text">from last month</span>
              </div>
            </div>
          </div>

          {/* Active Workforce Card */}
          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Active Workforce</span>
              <div className="kpi-icon-container employees">
                <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
            </div>
            <div className="kpi-body">
              <span className="kpi-value">482 Staff</span>
              <div className="kpi-trend up">
                <svg className="kpi-trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                <span>+4.2%</span>
                <span className="kpi-trend-text">this quarter</span>
              </div>
            </div>
          </div>

          {/* Open Invoices Card */}
          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Open Invoices</span>
              <div className="kpi-icon-container invoices">
                <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
            </div>
            <div className="kpi-body">
              <span className="kpi-value">14 Pending</span>
              <div className="kpi-trend down">
                <svg className="kpi-trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                  <polyline points="17 18 23 18 23 12"/>
                </svg>
                <span>-2.5%</span>
                <span className="kpi-trend-text">vs overdue list</span>
              </div>
            </div>
          </div>

          {/* Server Performance Card */}
          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Server Performance</span>
              <div className="kpi-icon-container system">
                <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <rect x="9" y="9" width="6" height="6"/>
                  <line x1="9" y1="1" x2="9" y2="4"/>
                  <line x1="15" y1="1" x2="15" y2="4"/>
                  <line x1="9" y1="20" x2="9" y2="23"/>
                  <line x1="15" y1="20" x2="15" y2="23"/>
                  <line x1="20" y1="9" x2="23" y2="9"/>
                  <line x1="20" y1="15" x2="23" y2="15"/>
                  <line x1="1" y1="9" x2="4" y2="9"/>
                  <line x1="1" y1="15" x2="4" y2="15"/>
                </svg>
              </div>
            </div>
            <div className="kpi-body">
              <span className="kpi-value">28% CPU</span>
              <div className="kpi-trend up">
                <svg className="kpi-trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--success)" }}>
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                <span style={{ color: "var(--success)" }}>Optimal</span>
                <span className="kpi-trend-text">Uptime 99.98%</span>
              </div>
            </div>
          </div>

        </section>

        {/* Dashboard Grid Layout */}
        <div className="dashboard-grid-layout">
          
          {/* Tables Section: ERP Transactions */}
          <div className="content-panel-card">
            <div className="panel-header">
              <div className="panel-title-block">
                <h2>Recent Enterprise Transactions</h2>
                <p>Real-time billing activity across all department client logs.</p>
              </div>
              <button className="panel-actions-btn" onClick={() => {}}>
                View Ledger
              </button>
            </div>

            <div className="transactions-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th>Client Details</th>
                    <th>Status</th>
                    <th>Timestamp</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* Row 1 */}
                  <tr>
                    <td className="invoice-code">#INV-2026-904</td>
                    <td>
                      <div className="client-details">
                        <span className="client-initial" style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}>AC</span>
                        <div className="client-info">
                          <span className="client-name">Apex Global Corp</span>
                          <span className="client-email">accounts@apex.com</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="status-badge paid">Paid</span>
                    </td>
                    <td>July 19, 2026 14:24</td>
                    <td className="transaction-amount">$24,500.00</td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="invoice-code">#INV-2026-903</td>
                    <td>
                      <div className="client-details">
                        <span className="client-initial" style={{ backgroundColor: "#fef3c7", color: "#d97706" }}>VM</span>
                        <div className="client-info">
                          <span className="client-name">Vanguard Logistics</span>
                          <span className="client-email">billing@vanguard.io</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="status-badge pending">Pending</span>
                    </td>
                    <td>July 19, 2026 11:15</td>
                    <td className="transaction-amount">$12,820.00</td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="invoice-code">#INV-2026-902</td>
                    <td>
                      <div className="client-details">
                        <span className="client-initial" style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}>SL</span>
                        <div className="client-info">
                          <span className="client-name">Sovereign Labs</span>
                          <span className="client-email">finance@sovl.com</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="status-badge overdue">Overdue</span>
                    </td>
                    <td>July 18, 2026 09:44</td>
                    <td className="transaction-amount">$8,900.00</td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className="invoice-code">#INV-2026-901</td>
                    <td>
                      <div className="client-details">
                        <span className="client-initial" style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}>NT</span>
                        <div className="client-info">
                          <span className="client-name">Nova Technologies</span>
                          <span className="client-email">contact@novatech.co</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="status-badge paid">Paid</span>
                    </td>
                    <td>July 17, 2026 16:30</td>
                    <td className="transaction-amount">$43,150.00</td>
                  </tr>

                  {/* Row 5 */}
                  <tr>
                    <td className="invoice-code">#INV-2026-900</td>
                    <td>
                      <div className="client-details">
                        <span className="client-initial" style={{ backgroundColor: "#f1f5f9", color: "#475569" }}>EL</span>
                        <div className="client-info">
                          <span className="client-name">Epsilon Retailers</span>
                          <span className="client-email">pay@epsilon.biz</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="status-badge paid">Paid</span>
                    </td>
                    <td>July 17, 2026 10:05</td>
                    <td className="transaction-amount">$5,400.00</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          {/* Charts & Visual Widgets */}
          <div className="widget-stack">
            
            {/* Revenue Forecast (Simulated Bar Chart) */}
            <div className="content-panel-card">
              <div className="panel-header">
                <div className="panel-title-block">
                  <h2>Revenue Forecast</h2>
                  <p>H1 Fiscal Year comparative bar pillars.</p>
                </div>
              </div>
              
              <div className="simulated-revenue-visual">
                <div className="chart-month-bar">
                  <div className="chart-pillar" style={{ height: "45px" }}></div>
                  <span className="chart-month-name">Jan</span>
                </div>
                <div className="chart-month-bar">
                  <div className="chart-pillar" style={{ height: "60px" }}></div>
                  <span className="chart-month-name">Feb</span>
                </div>
                <div className="chart-month-bar">
                  <div className="chart-pillar" style={{ height: "85px" }}></div>
                  <span className="chart-month-name">Mar</span>
                </div>
                <div className="chart-month-bar">
                  <div className="chart-pillar" style={{ height: "70px" }}></div>
                  <span className="chart-month-name">Apr</span>
                </div>
                <div className="chart-month-bar">
                  <div className="chart-pillar" style={{ height: "95px" }}></div>
                  <span className="chart-month-name">May</span>
                </div>
                <div className="chart-month-bar">
                  <div className="chart-pillar" style={{ height: "115px" }}></div>
                  <span className="chart-month-name">Jun</span>
                </div>
              </div>
            </div>

            {/* Department Headcount (Progress Metrics) */}
            <div className="content-panel-card">
              <div className="panel-header">
                <div className="panel-title-block">
                  <h2>Staffing Distribution</h2>
                  <p>Operational personnel spread percentage.</p>
                </div>
              </div>

              <div className="bar-chart-representation">
                
                {/* IT & Engineering */}
                <div className="bar-item">
                  <div className="bar-labels">
                    <span className="bar-dept-name">IT & Engineering</span>
                    <span className="bar-dept-value">182 (68%)</span>
                  </div>
                  <div className="bar-progress-track">
                    <div className="bar-progress-fill it"></div>
                  </div>
                </div>

                {/* Sales & Marketing */}
                <div className="bar-item">
                  <div className="bar-labels">
                    <span className="bar-dept-name">Sales & Marketing</span>
                    <span className="bar-dept-value">110 (82%)</span>
                  </div>
                  <div className="bar-progress-track">
                    <div className="bar-progress-fill sales"></div>
                  </div>
                </div>

                {/* Operations */}
                <div className="bar-item">
                  <div className="bar-labels">
                    <span className="bar-dept-name">Operations</span>
                    <span className="bar-dept-value">85 (48%)</span>
                  </div>
                  <div className="bar-progress-track">
                    <div className="bar-progress-fill operations"></div>
                  </div>
                </div>

                {/* Finance */}
                <div className="bar-item">
                  <div className="bar-labels">
                    <span className="bar-dept-name">Finance</span>
                    <span className="bar-dept-value">60 (32%)</span>
                  </div>
                  <div className="bar-progress-track">
                    <div className="bar-progress-fill finance"></div>
                  </div>
                </div>

                {/* HR */}
                <div className="bar-item">
                  <div className="bar-labels">
                    <span className="bar-dept-name">Human Resources</span>
                    <span className="bar-dept-value">45 (15%)</span>
                  </div>
                  <div className="bar-progress-track">
                    <div className="bar-progress-fill hr"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* System Audit Logs */}
            <div className="content-panel-card">
              <div className="panel-header">
                <div className="panel-title-block">
                  <h2>Recent Audit Logs</h2>
                  <p>Administrative actions & system logs.</p>
                </div>
              </div>

              <ul className="audit-logs-list">
                <li className="log-item">
                  <span className="log-dot success"></span>
                  <div className="log-content">
                    <span className="log-text">Admin <strong>Dhrubojyoti</strong> updated registration UI modules</span>
                    <span className="log-time">3 mins ago</span>
                  </div>
                </li>
                <li className="log-item">
                  <span className="log-dot info"></span>
                  <div className="log-content">
                    <span className="log-text">Automated financial ledger balance report synced with cloud</span>
                    <span className="log-time">1 hour ago</span>
                  </div>
                </li>
                <li className="log-item">
                  <span className="log-dot warning"></span>
                  <div className="log-content">
                    <span className="log-text">Multiple login attempts detected from IP <strong>192.168.1.110</strong></span>
                    <span className="log-time">3 hours ago</span>
                  </div>
                </li>
                <li className="log-item">
                  <span className="log-dot danger"></span>
                  <div className="log-content">
                    <span className="log-text">Database query latency warning resolved by secondary node</span>
                    <span className="log-time">6 hours ago</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default AdminDashboard;
