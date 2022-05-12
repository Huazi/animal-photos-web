import React from 'react';
import ImageFrame from './features/ImageCarousel/ImageFrame';
import Header from './features/Header';
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import CategoryList from "./features/CategoryManagement/CategoryList";
import Category from "./features/CategoryManagement/Category";
import AddCategory from './features/CategoryManagement/AddCategory';
import PhotoList from './features/PhotosManagement/PhotoList';
import Photo from './features/PhotosManagement/Photo';
import AddPhoto from './features/PhotosManagement/AddPhoto';
import About from './features/About';
import Footer from './features/Footer';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
<BrowserRouter>
  <React.StrictMode>
    <div className="App">
      <Header/>
      <div className="container">
          <Routes>
            <Route path="/"  element={<ImageFrame/>} />
            <Route path="/photosalbums"  element={<ImageFrame/>} />
            <Route path="/categorylist" element={<CategoryList/>} />
            <Route path="/categories/:id" element={<Category/>} />
            <Route path="/addcategory" element={<AddCategory/>} />
            <Route path='/photolist' element={<PhotoList/>}/>
            <Route path='/photos/:id' element={<Photo/>}/>
            <Route path='/addphoto' element={<AddPhoto/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/user" element={<BoardUser/>} />
            <Route path="/mod" element={<BoardModerator/>} />
            <Route path="/admin" element={<BoardAdmin/>} />
          </Routes>

      </div>
      <Footer/>
    </div>
  </React.StrictMode>
</BrowserRouter>
  );
}

export default App;
