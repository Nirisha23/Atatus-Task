import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation();

    const isActive = (pathname) => {
        // Check if the current location matches the provided pathname
        return location.pathname === pathname;
    };
    return (
        <div className='sidebar-container'>
            <h1 className='logo'>The Log</h1>
            <div className="sidebar-content">
                <div className="sidebar-content-list">
                    <h2>Apache</h2>
                    <div className="sidebar-content-child-list">
                        <NavLink to="/" className={isActive("/") ? "active-link" : ""}>Access Logs</NavLink >
                        <NavLink to="/errorlogs" className={isActive("/errorlogs") ? "active-link" : ""}>Error Logs</NavLink >
                        <NavLink to="/attacklogs" className={isActive("/attacklogs") ? "active-link" : ""}>Attack Logs</NavLink >
                    </div>
                </div>
                <div className="sidebar-content-list">
                    <h2>MySQL</h2>
                    <div className="sidebar-content-child-list">
                        <NavLink to="/startuplogs" className={isActive("/startuplogs") ? "active-link" : ""}>Startup Logs</NavLink >
                        <NavLink to="/shutdownlogs" className={isActive("/shutdownlogs") ? "active-link" : ""}>Shutdown Logs</NavLink >
                    </div>
                </div>
                <div className="sidebar-content-list">
                    <h2>Nginx</h2>
                    <div className="sidebar-content-child-list">
                        <NavLink to="/ngaccesslogs" className={isActive("/ngaccesslogs") ? "active-link" : ""}>Access Logs</NavLink >
                        <NavLink to="/ngerrorlogs" className={isActive("/ngerrorlogs") ? "active-link" : ""}>Error Logs</NavLink >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar