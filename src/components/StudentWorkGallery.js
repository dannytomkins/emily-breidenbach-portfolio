import React from 'react'
import StudentWorkItem from './StudentWorkItem'

import {studentWorkData} from '../data/studentWorkData'

const StudentWorkGallery = () => {
  const allItems = studentWorkData.map(item => {
    return (
      <StudentWorkItem item={item} />
    )
  })
  return (
    <div>
      <p>Student Work Gallery</p>
    {allItems}
    </div>
  )
}

export default StudentWorkGallery