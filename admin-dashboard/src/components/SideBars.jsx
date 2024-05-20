import React from 'react';
import './sideBar.css';
import navList from '../data/navItem';
import NavItem from './NavItem';
import ManageUsersMain from './ManageUsersMain';

function SideBars({userData}){
    return(
        <aside id ="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                
                
                <li className="nav-item">
                    <a className="nav-link" href = "/dashboard-main">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href = "/sensordashboard-main">
                        <i className="bi bi-grid"></i>
                        <span>Sensor Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href = "/sensor-lists">
                        <i className="bi bi-grid"></i>
                        <span>Sensor Lists</span>
                    </a>
                </li>


                <li className="nav-item">
                    
                    <a className="nav-link collapsed" data-bs-target="#components-nav" href="./manage-users">
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Manage Users</span>
                    </a>
                </li>


                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#forms-nav" href="./manage-admins">
                        <i className="bi bi-journal-text"></i>
                        <span>Manage Admins</span>
                    </a>   
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed"
                    data-bs-target="#tables-nav"
                    data-bs-toggle="collapse"
                    href="#"
                    >
                        <i className="bi bi-layout-text-window-reverse"></i>
                        <span>Manage a Book</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                    id="tables-nav"
                    className="nav-content collapse"
                    data-bs-parent ="#sidebar-nav"
                    >
                        <li>
                            <a href="/book-lists">
                                <i className="bi bi-circle"></i>
                                <span>Book Lists</span>
                            </a>
                        </li>
                        <li>
                            <a href="/edit-book">
                                <i className="bi bi-circle"></i>
                                <span>Edit Books</span>
                            </a>
                        </li>
                        <li>
                            <a href="/delete-book">
                                <i className="bi bi-circle"></i>
                                <span>Delete Books</span>
                            </a>
                        </li>
                    </ul>
                </li>                
                <li className="nav-item">
                    <a className="nav-link collapsed"
                    data-bs-target="#charts-nav"
                    data-bs-toggle="collapse"
                    href="#"
                    >
                        <i className="bi bi-bar-chart"></i>
                        <span>Manage Borrowed Books</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                    id="charts-nav"
                    className="nav-content collapse"
                    data-bs-parent ="#sidebar-nav"
                    >
                        <li>
                            <a href="/borrowbook-list">
                                <i className="bi bi-circle"></i>
                                <span>Borrowed Books List</span>
                            </a>
                        </li>
                        <li>
                            <a href="/update-borrowbook">
                                <i className="bi bi-circle"></i>
                                <span>Edit Borrowed Books</span>
                            </a>
                        </li>
                        <li>
                            <a href="/delete-borrowbook">
                                <i className="bi bi-circle"></i>
                                <span>Delete Borrowed Books</span>
                            </a>
                        </li>
                    </ul>
                </li>    

                <li className="nav-heading">Pages</li>
                {navList.map(nav => (
                    <NavItem key = {nav.Id} nav = {nav}/>
                ))}

            </ul>
        </aside>
    );
}

export default SideBars;