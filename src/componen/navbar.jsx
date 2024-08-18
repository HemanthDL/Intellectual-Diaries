import React from 'react'
import "./navbar.css"

const navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
            <h2>Intellectual Diaries</h2>
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li><a href="#">Posts</a></li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default navbar
