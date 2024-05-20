import React, { Component, useEffect, useState } from "react";
import UpdateBorrowBookPageTitle from './update-borrowbook-pagetitle1';
import UpdateBookForm from './update-borrowbook-mainform';


//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';

import HeaderManageUsers from "../HeaderManageAdmin";

export default function ManageUsersMain() {

  return (
    <main id="main" className="main">
      <HeaderManageUsers/>
      <UpdateBorrowBookPageTitle page ='Update Borrowed Books'/>
      <UpdateBookForm/>
      
    </main>
  );
}
