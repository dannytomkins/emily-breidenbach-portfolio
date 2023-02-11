import React from 'react'
import ArtWorkItem from './ArtWorkItem'
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useLocation
} from 'react-router-dom';

const ArtWorkGallery = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const images = props.images
  const allItems = images.map(item => {
    return (
      <ArtWorkItem item={item} pathname={pathname} />
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