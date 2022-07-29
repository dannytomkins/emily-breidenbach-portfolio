import React from 'react'

const StudentWorkItem = (props) => {
  const imageStyle = {
    
    "height":"300px",
    "width":"100%"
  }
  return (
    <div>
      {/* <p>{props.item.name}</p> */}
      <img src={props.item.img} className='student-work-item'/>
    </div>
  )
}

export default StudentWorkItem