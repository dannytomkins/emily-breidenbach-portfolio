import React from 'react'

const StudentWorkItem = (props) => {

  return (
    <div>
      {/* <p>{props.item.name}</p> */}
      <img src={props.item.img} className='student-work-item'/>
    </div>
  )
}

export default StudentWorkItem