import React from 'react'
import ArtWorkItem from './ArtWorkItem'

// import {studentWorkData} from '../data/studentWorkData'

const ArtWorkGallery = (props) => {
  const images = props.images
  const allItems = images.map(item => {
    return (
      <ArtWorkItem item={item} />
    )
  })
  const salon = {
    "display":"flex",
    "flexWrap":"wrap",
    "justifyContent":"center",
    "gap":"10px",
    "margin": "10px"
  }  
  return (
    <div style={salon}>
    {allItems}
    </div>
  )
}

export default ArtWorkGallery