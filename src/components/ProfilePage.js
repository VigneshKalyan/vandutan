// src/components/ProfilePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../Actions/userActions';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { profile, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      // Fetch user profile data based on the user's ID
      dispatch(fetchUserProfile(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="profile-container">
      {error && <div className="error-message">{error}</div>}
      {profile && (
        <div className="profile-info">
          <h2>Welcome, {profile.name}!</h2>
          <p>Email: {profile.email}</p>
          {/* Display additional user information if available */}
          {/* <p>Age: {profile.age}</p>
          <p>Location: {profile.location}</p> */}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
