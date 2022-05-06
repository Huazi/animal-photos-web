import { configureStore } from '@reduxjs/toolkit';
import PhotoCategoryReducer from '../features/ImageCarousel/ReducerActions/GetCategories';
import PhotoReducer from '../features/ImageCarousel/ReducerActions/GetPhotos';

export const store = configureStore({
  reducer: {
    photoCategoriesReducer: PhotoCategoryReducer,
    photoReducer: PhotoReducer
  },
});