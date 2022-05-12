import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate } from 'react-router-dom';
import CategoryService from '../../services/CategoryService'

const Category = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialCategoryState = {
  };
  const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
  const [message, setMessage] = useState("");

  const getCategory = id => {
    CategoryService.get(id)
      .then(response => {
        setCurrentCategory(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getCategory(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentCategory.id,
      title: currentCategory.title,
      description: currentCategory.description,
      published: status
    };

    CategoryService.update(currentCategory.id, data)
      .then(response => {
        setCurrentCategory({ ...currentCategory, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateCategory = () => {
    CategoryService.update(currentCategory.id, currentCategory)
      .then(response => {
        console.log(response.data);
        setMessage("The category was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteCategory = () => {
    CategoryService.remove(currentCategory.id)
      .then(response => {
        console.log(response.data);
        navigate("/categorylist");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentCategory ? (
        <div className="edit-form">
          <h4>Category</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Category Name</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={currentCategory.category}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <Link to='/categorylist' className="m-3 btn btn-sm btn-secondary">
            Back
          </Link>

          <button
            className="m-3 btn btn-sm btn-primary"
            type="submit"
            onClick={updateCategory}
          >
            Update
          </button>

          <button className="m-3 btn btn-sm btn-danger" onClick={deleteCategory}>
            Delete
          </button>
          <p class="alert alert-info">{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Category...</p>
        </div>
      )}
    </div>
  );
};

export default Category;
