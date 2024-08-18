import React from 'react'
import "./card.css"

const card = (props) => {
  return (
    <>
      <div className="box">
        <div className="heading">
          <h2>{props.title.toUpperCase()}</h2>
        </div>
        <hr />
        <div className="info">
          <p>{props.desc}</p>
        </div>
        <div className="postby">
          <strong>Post By : &nbsp;&nbsp;User ID {props.userId}</strong>
        </div>
      </div>
    </>
  )
}

export default card
