import ImageFrame from './features/ImageCarousel/ImageFrame';
import Header from './features/Header';
import { Routes, Route, Link } from "react-router-dom";
import CategoryList from "./features/CategoryManagement/CategoryList";
import Category from "./features/CategoryManagement/Category";
import AddCategory from './features/CategoryManagement/AddCategory';
import PhotoList from './features/PhotosManagement/PhotoList';
import Photo from './features/PhotosManagement/Photo';
import AddPhoto from './features/PhotosManagement/AddPhoto';
import About from './features/About';
import Footer from './features/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ImageFrame/>} />
            <Route path="/categorylist" element={<CategoryList/>} />
            <Route path="/categories/:id" element={<Category/>} />
            <Route path="/addcategory" element={<AddCategory/>} />   
            <Route path='/photolist' element={<PhotoList/>}/>   
            <Route path='/photos/:id' element={<Photo/>}/>
            <Route path='/addphoto' element={<AddPhoto/>}/>      
            <Route path='/about' element={<About/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
