import React, { Component, useEffect, useState } from "react";
import UpdateBookPageTitle from "./update-book-main-pagetitle";
import UpdateBookMenu from "./UpdateBookMenu";
import { useLocation } from 'react-router-dom';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';
    


import HeaderManageUsers from "../HeaderManageAdmin";

export default function AddBook() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userData = JSON.parse(params.get('userData'));
  return (
    
    <main id="main" className="main">
      <HeaderManageUsers userData={userData}/>
      <UpdateBookPageTitle page ='Edit a Book'/>
      <UpdateBookMenu userData={userData}/>
      
    </main>
  );
}
