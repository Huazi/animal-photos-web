import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetInitialState from '../../../app/GetInitialState';

const baseUrl = process.env.API_HOST;

const initialState = GetInitialState();

export const GetCategories = () => async (dispatch, getState) => {
    try{
        dispatch(requestReducer());
        const response = await fetch(`http://localhost:3001/animal_categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log("after fetch")
        const data = await response.json();
        if (response.status === 200){
            console.log(data);
            dispatch(getPhotoCategories(data));
        }else {
            console.log('response error');
        }
    }catch(e){
        console.error(e);
    }
};

export const PhotoCategorySlice = createSlice({
    name: 'PhotoCategories',
    initialState,
    reducers: {
      getPhotoCategories: (state, action) => {
          console.log(state, action);
          state.photoCategories = action.payload;
          state.isLoading = false;
          state.categoriesLoaded = true;
      },
      requestReducer: (state) =>{
          state.isLoading = true
      }
    }
  });

const {getPhotoCategories, requestReducer} = PhotoCategorySlice.actions;

export default PhotoCategorySlice.reducer;
