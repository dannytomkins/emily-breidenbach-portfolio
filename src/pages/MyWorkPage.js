import React from 'react'
import ArtWorkGallery from '../components/ArtWorkGallery'
import { myWorkData } from '../data/myWorkData'

const MyWorkPage = () => {
  const images = myWorkData
  return (
    <div>
    <ArtWorkGallery images={images}/>
    </div>
  )
}

export default MyWorkPage