import React, { Component, useEffect, useState } from "react";
import DeleteBookPageTitle from "./deleteBookPageTitle";
import DeleteBookTable from './deleteBookTable';
import { useLocation } from 'react-router-dom';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import SideBar from "./SideBars";

import Header from "./HeaderManageAdmin";

export default function AddBook() {

  return (
    <main id="main" className="main">
      <SideBar />
      <Header/>
      <DeleteBookPageTitle page ='Add a Book'/>
      <DeleteBookTable/>
      
    </main>
  );
}
