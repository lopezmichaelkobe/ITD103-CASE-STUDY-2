import React, { Component, useEffect, useState } from "react";
import BookListsPageTitle from "./bookListsPageTitle";
import SensorTable from './sensorTable';
import { useLocation } from 'react-router-dom';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
import SideBar from "./SideBars";

import Header from "./HeaderManageAdmin";


export default function BookLists() {

  return (
    <main id="main" className="main">
      <SideBar />
      <Header />
      <BookListsPageTitle page ='Book Lists'/>
      <SensorTable/>
      
    </main>
  );
}
