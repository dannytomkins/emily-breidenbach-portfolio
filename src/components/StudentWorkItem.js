import React from 'react'

const StudentWorkItem = (props) => {

  return (
    <div>
      <img src={props.item.img} className='student-work-item'/>
    </div>
  )
}

export default StudentWorkItem