
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhotoService from '../../services/PhotoService';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  let navigate = useNavigate();
  useEffect(() => {
    retrievePhotos();
  }, []);

  const retrievePhotos = () => {
    PhotoService.getAll()
      .then(response => {
        setPhotos(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const refreshList = () => {
    retrievePhotos();
    setCurrentPhoto(null);
    setCurrentIndex(-1);
  };

  const setActivePhoto = (animal_photo, index) => {
    setCurrentPhoto(animal_photo);
    setCurrentIndex(index);
  };

  const removeAllPhotos = () => {
    PhotoService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const navigateToAddPhoto = () => {
    navigate("/addphoto");
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <h4>Photos List</h4>

        <ul className="list-group">
          {photos &&
            photos.map((animal_photo, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePhoto(animal_photo, index)}
                key={index}
              >
                {animal_photo.photo_url}
              </li>
            ))}
        </ul>
        <button
          className="m-3 btn btn-sm btn-primary"
          onClick={navigateToAddPhoto}
        >
          Add
        </button>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllPhotos}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-4">
        {currentPhoto ? (
          <div>
            <h4>Photo</h4>
            <div>
              <label>
                <strong>Photo Category ID:</strong>
              </label>{" "}
              {currentPhoto.category_id}
            </div>
            <div>
              <label>
                <strong>Photo Name:</strong>
              </label>{" "}
              {currentPhoto.photo_url}
            </div>
            
            <Link
              className="m-3 btn btn-sm btn-primary"
              to={"/photos/" + currentPhoto.id}
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Photo...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoList;


