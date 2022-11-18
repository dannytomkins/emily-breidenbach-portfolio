import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';


const ArtWorkItem = (props) => {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path=''>
      <img src={props.item.img} className='student-work-item'/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default ArtWorkItem