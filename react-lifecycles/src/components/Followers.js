import React from 'react'

export default function Followers({followers}) {

  return (
    <div>
      {followers.map(follower => {
        return (
          <div className="follow-card">
            <div className="follow-image">
              <img src={follower['avatar_url']} alt="Profile"/>
            </div>
            <p className="follower-name">{follower['login']}</p>     
          </div>
        )
      })}
    </div>
  )
}
