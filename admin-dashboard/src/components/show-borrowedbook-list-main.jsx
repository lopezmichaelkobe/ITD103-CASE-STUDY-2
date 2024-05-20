import React, { Component, useEffect, useState } from "react";
import ShowBorrowBookList from "./show-borrowbook-list-pagetitle";
import BorrowBookTable from './borrowbooktable';
import SideBars from "./SideBars";

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
    


import HeaderManageUsers from "./HeaderManageAdmin";

export default function AddBook() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <SideBars/>
      <ShowBorrowBookList page ='Borrowed Books List'/>
      <BorrowBookTable/>
      
    </main>
  );
}
