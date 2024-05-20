  import React, { Component, useEffect, useState } from "react";
  import AddBookPageTitle from "./create-borrowbook-pagetitle";
  import CreateBookMenu from './create-borrowbook-menu';
  import { useLocation } from 'react-router-dom';

  //import Icons
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import 'remixicon/fonts/remixicon.css';

  //import bootstrap 

  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';

  import '../components/appmain.css';
      


  import Headeruser from "./headeruser";

  export default function AddBook() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userData = JSON.parse(params.get('userData'));

    return (
      <main id="main" className="main">
        <Headeruser userData={userData}/>
        <AddBookPageTitle page ='Borrow a Book'/>
        <CreateBookMenu userData ={userData}/>
        
      </main>
    );
  }
