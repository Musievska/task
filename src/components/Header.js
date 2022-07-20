import React from 'react'

function Header() {
  return (
      <div className="header">
      <h2>Welcome</h2>
      <img className="avatar" src={require('../assets/icons/avatar-icon.png')} alt="avatar" />
    </div>
  )
}

export default Header