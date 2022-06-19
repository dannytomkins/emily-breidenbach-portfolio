import React from 'react'
import StudentWorkItem from './StudentWorkItem'

import {studentWorkData} from '../data/studentWorkData'

const StudentWorkGallery = () => {
  const allItems = studentWorkData.map(item => {
    return (
      <StudentWorkItem item={item} />
    )
  })
  const salon = {
    "display":"flex",
    "flexWrap":"wrap",
    "justifyContent":"center",
  }  
  return (
    <div style={salon}>
    {allItems}
    </div>
  )
}

export default StudentWorkGallery