import React from 'react'
import './main.css';
import PageTitle from './sensorTitle';
import Dashboard from './DashboardNew';
import Header from './HeaderManageAdmin';
import SideBar from "./SideBars";


function Main() {
  return (
    <main id ="main" className="main">
        <PageTitle page ='Sensor Dashboard'/>
        <Dashboard/>
        <Header/>
        <SideBar/>
        
    </main>
  );
  
}

export default Main;    