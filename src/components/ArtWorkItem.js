import React from 'react'

const ArtWorkItem = (props) => {

  return (
    <div>
      <img src={props.item.img} className='student-work-item'/>
    </div>
  )
}

export default ArtWorkItem