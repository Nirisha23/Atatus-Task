import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <h1 className='logo'>The Log</h1>
            <div className="sidebar-content">
                <div className="sidebar-content-list">
                    <h2>Apache</h2>
                    <div className="sidebar-content-child-list">
                        <Link to="/">Access Logs</Link >
                        <Link to="/errorlogs">Error Logs</Link >
                        <Link to="/attacklogs">Attack Logs</Link >
                    </div>
                </div>
                <div className="sidebar-content-list">
                    <h2>MySQL</h2>
                    <div className="sidebar-content-child-list">
                        <Link to="/startuplogs">Startup Logs</Link >
                        <Link to="/shutdownlogs">Shutdown Logs</Link >
                    </div>
                </div>
                <div className="sidebar-content-list">
                    <h2>Nginx</h2>
                    <div className="sidebar-content-child-list">
                        <Link to="/ngaccesslogs">Access Logs</Link >
                        <Link to="/ngerrorlogs">Error Logs</Link >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar