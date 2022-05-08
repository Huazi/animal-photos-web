import { configureStore } from '@reduxjs/toolkit';
import PhotoCategoryReducer from '../features/ImageCarousel/ReducerActions/GetCategories';
import PhotoReducer from '../features/ImageCarousel/ReducerActions/GetPhotos';
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
};

export const store = configureStore({
  reducer: {
    photoCategoriesReducer: PhotoCategoryReducer,
    photoReducer: PhotoReducer,
    reducer: reducer,
    devTools: true,
  },
});
