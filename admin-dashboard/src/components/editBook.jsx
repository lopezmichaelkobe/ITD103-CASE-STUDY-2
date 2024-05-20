import React, { Component, useEffect, useState } from "react";
import BookListsPageTitle from "./bookListsPageTitle";
import UsersTable from './usersTable';
import UpdateBookPageTitle from './updateBookPageTitle';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './appmain.css';
import SideBar from "./SideBars";

import HeaderManageUsers from "./HeaderManageUsers";


export default function editBook() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <SideBar/>
      <UpdateBookPageTitle page ='Update a Book '/>
      <UsersTable/>
      
    </main>
  );
}
