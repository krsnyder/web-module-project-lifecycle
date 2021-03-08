import React from 'react'

export default function UserCard({userDetails}) {

  return (
    <div className="user-card">
      <div id="user-image">
        <img src={userDetails.avatar_url} alt="Profile"/>
      </div>
      <div id="user-details">
        <p>{userDetails.name}</p>
        <p>{userDetails.location}</p>
        <p>{userDetails.company}</p>
        <p>{userDetails.bio}</p>
      </div>      
    </div>
  )
}
