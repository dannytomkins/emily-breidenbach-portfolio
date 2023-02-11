import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  
} from 'react-router-dom';

const ArtWorkItem = (props) => {
  const { item, pathname } = props;


  return (
    <Link to={`${pathname}/${item.id}`}>
      <img src={props.item.img} alt={props.item.name} className='student-work-item'/>
      <p>{props.item.name}</p>
      </Link>
  )
}

export default ArtWorkItem