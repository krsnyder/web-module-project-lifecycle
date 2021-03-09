import React from 'react'
import UserCard from './UserCard'

export default function Followers({followers}) {

  return (
    <div>
      {followers.map(follower => {
        return (
          <div className="user-card">
            <div className="user-image">
              <img src={follower['avatar_url']} alt="Profile"/>
            </div>
          <div className="user-details">
            <h3>{follower['login']}</h3>
          </div>      
        </div>
        )
      })}
    </div>
  )
}
