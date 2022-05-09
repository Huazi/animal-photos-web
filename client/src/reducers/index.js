import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import PhotoCategoryReducer from '../features/ImageCarousel/ReducerActions/GetCategories';
import PhotoReducer from '../features/ImageCarousel/ReducerActions/GetPhotos';

export default combineReducers({
  auth,
  message,
  photoCategoriesReducer: PhotoCategoryReducer,
  photoReducer: PhotoReducer
});
