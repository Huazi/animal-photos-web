import React, { useState } from "react";
import CategoryService from '../../services/CategoryService';

import { Link } from "react-router-dom";

const AddCategory = () => {
  const initialCategoryState = {
    id: null,
    category: "",
  };
  const [category, setCategory] = useState(initialCategoryState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const saveCategory = () => {
    var data = {
      category: category.category
    };

    CategoryService.create(data)
      .then(response => {
        setCategory({
          id: response.data.id,
          category: response.data.category
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCategory = () => {
    setCategory(initialCategoryState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4 className="alert alert-info">You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCategory}>
            Add One More
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="category">Category Name</label>
            <input
              type="text"
              className="form-control"
              id="category"
              required
              value={category.category}
              onChange={handleInputChange}
              name="category"
            />
          </div>
          <Link to='/categorylist' className="m-3 btn btn-sm btn-secondary">
            Back
          </Link>
          <button onClick={saveCategory} className="m-3 btn btn-sm btn-primary">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
