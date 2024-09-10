import React,{ useState,useEffect } from 'react'
import "./card.css"

const card = (props) => {
  const [username, setusername] = useState("");
  const fetch_user = async()=>{
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`);
    let user = await res.json();
    setusername(user.name);
  }
  useEffect(() => {
    fetch_user();
  }, [])
  
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
          <strong>Post By : &nbsp;&nbsp;{username}</strong>
        </div>
      </div>
    </>
  )
}

export default card
