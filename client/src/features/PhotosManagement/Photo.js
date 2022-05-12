import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate } from 'react-router-dom';
import PhotoService from '../../services/PhotoService';

import CategoryService from '../../services/CategoryService';

const Photo = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialPhotoState = {
  };
  const [currentPhoto, setCurrentPhoto] = useState(initialPhotoState);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    retrieveCategories();
  }, []);

  const getPhoto = id => {
    PhotoService.get(id)
      .then(response => {
        setCurrentPhoto(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
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

  useEffect(() => {
    if (id)
      getPhoto(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentPhoto({ ...currentPhoto, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentPhoto.id,
      title: currentPhoto.title,
      description: currentPhoto.description,
      published: status
    };

    PhotoService.update(currentPhoto.id, data)
      .then(response => {
        setCurrentPhoto({ ...currentPhoto, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updatePhoto = () => {
    PhotoService.update(currentPhoto.id, currentPhoto)
      .then(response => {
        console.log(response.data);
        setMessage("The photo was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deletePhoto = () => {
    PhotoService.remove(currentPhoto.id)
      .then(response => {
        console.log(response.data);
        navigate("/photolist");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPhoto ? (
        <div className="edit-form">
          <h4>Photo</h4>
          <form>
            <div className="form-group">
              <label htmlFor="photo_url">Photo Url</label>
              <input
                type="text"
                className="form-control"
                id="photo_url"
                name="photo_url"
                value={currentPhoto.photo_url}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="category_id">Photo Category</label>
            <select class="form-control form-control-lg" name='category_id' id='category_id' onChange={handleInputChange}>
            <option>Please choose a category</option>
              {categories && (
                categories.map(item => {
                  return (<option value={item.id} selected={(item.id === currentPhoto.category_id)}>{item.category}</option>);})
              )}
            </select>
          </div>
          </form>

          <Link to='/photolist' className="m-3 btn btn-sm btn-secondary">
            Back
          </Link>

          <button
            className="m-3 btn btn-sm btn-primary"
            type="submit"
            onClick={updatePhoto}
          >
            Update
          </button>

          <button className="m-3 btn btn-sm btn-danger" onClick={deletePhoto}>
            Delete
          </button>
          <p className="alert alert-info">{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Photo...</p>
        </div>
      )}
    </div>
  );
};

export default Photo;
