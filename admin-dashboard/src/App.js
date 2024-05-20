import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/appmain";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/dashboard-main";
import SensorDetails from "./components/SensorMain"; //new
import Sample from "./components/sample";
import ManageUsersMain from "./components/ManageUsersMain";
import ManageAdminsMain from "./components/ManageAdminsMain";

import BookLists from "./components/bookLists";
import SensorLists from "./components/sensorLists"; //new
import UpdateBook from "./components/updateBook";
import DeleteBook from "./components/deleteBook";
import UpdateBookMain from './components/breadcrumbs/update-book-main';
import CreateBookMenu from './components/breadcrumbs/create-book-main';
import UpdateAdminMain from './components/breadcrumbs/update-admin-main';
import UpdateUserMain from './components/breadcrumbs/update-user-main';
import Appmainuser from './client/appmainuser';
import AddBorrowBook from './client/create-borrowbook-main';
import ShowBorrowBookList from './components/show-borrowedbook-list-main';
import UpdateBorrowBook from './components/update-borrowbook-main';
import UpdateBorrowBookForm from './components/breadcrumbs/update-borrowbook-main1';
import DeleteBorrowBooksMain from './components/DeleteBorrowBooksMain';


import Test from'./components/test';


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <Login /> : <Main />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard-main" element={<UserDetails />} />
          <Route path="/appmain" element={<Main />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/manage-users"element={<ManageUsersMain/>}/>
          <Route path="/manage-admins"element={<ManageAdminsMain/>}/>
          <Route path="/book-lists"element={<BookLists/>}/>
          <Route path="/edit-book"element={<UpdateBook/>}/>
          <Route path="/delete-book"element={<DeleteBook/>}/>
          <Route path = '/edit/:id' element={<UpdateBookMain />}></Route>
          <Route path = '/editadmin/:id' element={<UpdateAdminMain />}></Route>
          <Route path = 'book-lists/create-book-main' element={<CreateBookMenu />}></Route>
          <Route path = '/edituser/:id' element={<UpdateUserMain />}></Route>
          <Route path = '/borrowbook-list' element={<ShowBorrowBookList />}></Route>
          <Route path = '/update-borrowbook' element={<UpdateBorrowBook />}></Route>
          <Route path = '/edit-borrowbook/:id' element={<UpdateBorrowBookForm />}></Route>
          <Route path = '/delete-borrowbook' element={<DeleteBorrowBooksMain />}></Route>
          <Route path = '/sensordashboard-main' element={<SensorDetails />}></Route> 
          <Route path= "/sensor-lists"element={<SensorLists/>}/>
          




          {/*User Routes*/}
          <Route path = '/user-main' element={<Appmainuser />}></Route>
          <Route path = '/borrow-book' element={<AddBorrowBook />}></Route>

          {/*Texting Area */}
          <Route path = '/test' element={<Test />}></Route>


          


 
          
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
