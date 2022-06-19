import React from 'react'

const StudentWorkItem = (props) => {
  return (
    <div><p>{props.item.name}</p><img src={props.item.img}/></div>
  )
}

export default StudentWorkItem