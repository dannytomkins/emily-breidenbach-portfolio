import React from 'react'

const StudentWorkItem = (props) => {
  const imageStyle = {
    "height":"300px",
    "Width":"100%"
  }
  return (
    <div>
      {/* <p>{props.item.name}</p> */}
      <img src={props.item.img} style={imageStyle}/>
    </div>
  )
}

export default StudentWorkItem