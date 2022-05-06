
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CategoryService from '../../services/CategoryService';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  let navigate = useNavigate();
  useEffect(() => {
    retrieveCategories();
  }, []);

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

  const refreshList = () => {
    retrieveCategories();
    setCurrentCategory(null);
    setCurrentIndex(-1);
  };

  const setActiveCategory = (animal_category, index) => {
    setCurrentCategory(animal_category);
    setCurrentIndex(index);
  };

  const removeAllCategories = () => {
    CategoryService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const navigateToAddCategory = () => {
    navigate("/addcategory");
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Categories List</h4>

        <ul className="list-group">
          {categories &&
            categories.map((animal_category, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCategory(animal_category, index)}
                key={index}
              >
                {animal_category.category}
              </li>
            ))}
        </ul>
        <button
          className="m-3 btn btn-sm btn-primary"
          onClick={navigateToAddCategory}
        >
          Add
        </button>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllCategories}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentCategory ? (
          <div>
            <h4>Category</h4>
            <div>
              <label>
                <strong>Category Name:</strong>
              </label>{" "}
              {currentCategory.category}
            </div>
            <Link
              className="m-3 btn btn-sm btn-primary"
              to={"/categories/" + currentCategory.id}
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Category...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;


