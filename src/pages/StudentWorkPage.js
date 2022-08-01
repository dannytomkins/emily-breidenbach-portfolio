import React from 'react'
import ArtWorkGallery from '../components/ArtWorkGallery'
import {studentWorkData} from '../data/studentWorkData'

const StudentWorkPage = () => {
  const images = studentWorkData
  return (
    <div>
    <ArtWorkGallery images={images}/>
    </div>
  )
}

export default StudentWorkPage