import React from 'react'
import './main.css';
import PageTitle from './PageTitle';
import BookTable from '../components/bookTable';



function Main() {
  return (
    <main id ="main" className="main">
        <PageTitle page ='Book Lists'/>
        <BookTable/>

        
    </main>
  );
  
}

export default Main;    