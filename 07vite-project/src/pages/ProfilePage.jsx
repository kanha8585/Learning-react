import React, { useContext } from 'react'
import { ProfileContext } from '../App';
import { useState } from 'react';

function ProfilePage() {

    const{profileData} = useContext(ProfileContext)
  return (
    <div className='flex flex-col gap-2 p-2 border border-solid rounded'>
    <h4>{profileData.name}</h4>
    <p>{profileData.email}</p>


    </div>
  )
}

export default ProfilePage;