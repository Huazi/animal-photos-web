import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetInitialState from '../../../app/GetInitialState';

const initialState = GetInitialState();
const baseUrl = process.env.API_HOST;

export const GetPhotos = (ids) => async (dispatch, getState) => {
    try{
        dispatch(requestReducer());
        if (!ids){
            ids = '-1';
        }
        const response = await fetch(`http://localhost:3001/animal_photos/?categoryids=${ids}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log("after fetch")
        const data = await response.json();
        if (response.status === 200){
            console.log(data);
            const ndata = data.map(value => ({ value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);

            dispatch(getPhotos(ndata));
        }else {
            console.log('response error');
        }
    }catch(e){
        console.error(e);
    }
};

export const PhotoSlice = createSlice({
    name: 'Photos',
    initialState,
    reducers: {
      getPhotos: (state, action) => {
          console.log(state, action);
          state.photoUrls = action.payload;
          state.photoUrlsLoaded = true;
      },
      requestReducer: (state) =>{
          state.isLoading = true
      }
    }
  });

const {getPhotos, requestReducer} = PhotoSlice.actions;

export default PhotoSlice.reducer;