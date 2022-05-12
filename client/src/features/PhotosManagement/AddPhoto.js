import React, { useState, useEffect } from "react";
import PhotoService from '../../services/PhotoService';

import { Link } from "react-router-dom";
import CategoryService from '../../services/CategoryService';

const AddPhoto = () => {
  const initialPhotoState = {
  };
  const [photo, setPhoto] = useState(initialPhotoState);
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    retrieveCategories();
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPhoto({ ...photo, [name]: value });
  };

  const retrieveCategories = () => {
    CategoryService.getAll()
      .then(response => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const savePhoto = () => {
    var data = {
      ...photo
    };

    PhotoService.create(data)
      .then(response => {
        setPhoto({
          id: response.data.id,
          photo: response.data.photo
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPhoto = () => {
    setPhoto(initialPhotoState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4 className="alert alert-info">You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPhoto}>
            Add One More
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="photo_url">Photo Url</label>
            <input
              type="text"
              className="form-control"
              id="photo_url"
              required
              value={photo.photo_url}
              onChange={handleInputChange}
              name="photo_url"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category_id">Photo Category</label>
            <select class="form-control form-control-lg" name='category_id' id='category_id' onChange={handleInputChange}>
            <option>Please choose a category</option>
              {categories && (
                categories.map(item => { return (<option value={item.id}>{item.category}</option>);})
              )}
            </select>
          </div>

          <Link to='/photolist' className="m-3 btn btn-sm btn-secondary">
            Back
          </Link>
          <button onClick={savePhoto} className="m-3 btn btn-sm btn-primary">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPhoto;
