import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> - User Profile
        </h3>
      </header>

      <div class="card">
        <div class="card-body">

          <div class="row mb-3">
            <div class="col-sm-3">
              <h6 class="mb-0">Session Token:</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-3">
              <h6 class="mb-0">User Id:</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {currentUser.id}
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-3">
              <h6 class="mb-0">User Name:</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {currentUser.username}
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-3">
              <h6 class="mb-0">User Email:</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {currentUser.email}
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-3">
              <h6 class="mb-0">User Role:</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              <ul>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Profile;
