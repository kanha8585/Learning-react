import React from 'react'
import { ProfileContext } from './App';
import { useContext } from 'react';

function Profile() {
    const {profileData, setProfileData} = useContext(ProfileContext)
  return (
    <div>
        <h2>Profile</h2>
        <p>Name:{profileData.name}</p>
        <p>age:{profileData.age}</p>
    </div>
  )
}

export default Profile;