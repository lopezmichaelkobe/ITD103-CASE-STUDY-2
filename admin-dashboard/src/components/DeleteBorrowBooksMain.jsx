import React, { Component, useEffect, useState } from "react";
import DeleteBorrowBooksPageTitle from "./DeleteBorrowBooksPageTitle";
import DeleteBorrowTable from "./deleteBorrowBookTable";

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
import SideBar from "./SideBars";

import Header from "./HeaderManageAdmin";

export default function ManageUsersMain() {

  return (
    <main id="main" className="main">
      <SideBar/>
      <Header/>
      <DeleteBorrowBooksPageTitle  page ='Delete Borrowed Books'/>
      <DeleteBorrowTable/>
      
    </main>
  );
}
