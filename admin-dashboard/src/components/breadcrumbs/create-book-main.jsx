import React, { Component, useEffect, useState } from "react";
import AddBookPageTitle from "./create-book-main-pagetitle";
import CreateBookMenu from './create-book-menu';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';
    


import HeaderManageUsers from "../HeaderManageAdmin";

export default function AddBook() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <AddBookPageTitle page ='Book Lists'/>
      <CreateBookMenu/>
      
    </main>
  );
}
