import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect'

import Categories from './Categories';
import {GetCategories} from './ReducerActions/GetCategories';
import { GetPhotos } from './ReducerActions/GetPhotos';

const FrameState = createSelector(
    (state) => state.photoCategoriesReducer,
    (state) => state.photoReducer,
    (photoCategoriesReducer, photoReducer) => ({
        photoUrls: photoReducer.photoUrls,
        photoCategories: photoCategoriesReducer.photoCategories,
        isLoading: photoCategoriesReducer.isLoading,
        categoriesLoaded: photoCategoriesReducer.categoriesLoaded
    })
);

const ImageFrame = () => {
    const dispatch = useDispatch();
    const {photoUrls, photoCategories, isLoading, categoriesLoaded} = useSelector(FrameState);

    const [index, setIndex] = useState(0);
    const [categoriesState, setCategoriesState] = useState([]);

    const handleRightClick = (e) =>{
        if (index + 1 >= photoUrls.length){
            setIndex(0)
        }else{
            setIndex(index + 1);
        }
    };
    const handleLeftClick = (e) => {
        if (index === 0){
            setIndex(photoUrls.length - 1);
        }else{
            setIndex(index - 1);
        }
    };


    // hook: to retrieve photo categories
    useEffect(()=> {
        if (!isLoading && !categoriesLoaded){
            dispatch(GetCategories());
        }
    }, [isLoading, categoriesLoaded, dispatch]);

    //Initialize the category select state
    useEffect(()=>{
        if (photoCategories && photoCategories.length>0){
            const nstates = photoCategories.map(item => {
                return {
                    categoryId: item.id,
                    category: item.category,
                    selected: true
                }
            });
            setCategoriesState(nstates);
        }
    }, [photoCategories]);

    const handleCategoryClick = (categoryId) => {
        const nstates = categoriesState.map(item => {
            if (item.categoryId === categoryId){
                return {
                    categoryId: item.categoryId,
                    category: item.category,
                    selected: !item.selected
                };
            }
            return item;
        });
        setCategoriesState(nstates);
    };

    // retrieve the photos basing the categories states
    useEffect(() => {
        if(categoriesState && categoriesState.length > 0){
            const categoryIds = categoriesState.filter(item => item.selected).map(item => item.categoryId);

            dispatch(GetPhotos(categoryIds.join(',')));
        }
    }, [categoriesState, dispatch]);

    return (
        <div className="card">
            <Categories categories={categoriesState} clickEvent={handleCategoryClick} />

            {isLoading && (<div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>)}
            <div class="btn-group shadow-0" role="group">
                <button className="m-3 btn btn-info" onClick={handleLeftClick}> {'<<'} </button>
                <button className="m-3 btn btn-info" onClick={handleRightClick}> {'>>'} </button>
            </div>
            {photoUrls.length>0 && (
                <div>
                    <img src={photoUrls[index].photo_url} className='img-fluid'/>
                </div>
            )}

        </div>
    );
};

export default ImageFrame;
