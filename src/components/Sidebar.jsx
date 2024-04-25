import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ onSidebarItemClick }) {
    return (
        <div className='sidebar-container'>
            <h1 className='logo'>Better Viewer</h1>
            <div className="sidebar-content">
                <div className="sidebar-content-list">
                    <h2>Apache</h2>
                    <div className="sidebar-content-child-list">
                        <ul>
                            {/* <li><a href="#">Access </a></li>
                            <li><a href="#">Error Logs</a></li>
                            <li><a href="#">Attack Logs</a></li> */}
                            <li><a href="#" onClick={() => onSidebarItemClick('access')}>Access</a></li>
                            <li><a href="#" onClick={() => onSidebarItemClick('error')}>Error Logs</a></li>
                            <li><a href="#" onClick={() => onSidebarItemClick('attack')}>Attack Logs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-content-list">
                    <h2>MySQL</h2>
                    <div className="sidebar-content-child-list">
                        <ul>
                            <li><a href="#">Startup Logs</a></li>
                            <li><a href="#">Shutdown Logs</a></li>

                        </ul>
                    </div>
                </div>
                <div className="sidebar-content-list">
                    <h2>Nginx</h2>
                    <div className="sidebar-content-child-list">
                        <ul>
                            <li><a href="#">Access Logs</a></li>
                            <li><a href="#">Error Logs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar