import React, { Component, useEffect, useState } from "react";
import UpdateBookPageTitle from "./update-book-main-pagetitle";
import UpdateBookMenu from "./UpdateBookMenu";

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../appmain.css';
    


import HeaderManageUsers from "./headeruser1";

export default function AddBook() {
  return (
    <main id="main" className="main">
      <HeaderManageUsers />
      <UpdateBookPageTitle page ='Edit a Book'/>
      <UpdateBookMenu/>
      
    </main>
  );
}
