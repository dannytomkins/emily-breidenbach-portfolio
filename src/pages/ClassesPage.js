import React from 'react';
import classImg1 from '../img/class-1.jpg';
import classImg2 from '../img/class-2.jpg';
import classImg3 from '../img/class-3.jpg';

const ClassesPage = () => {
  return (
    <>
      <div className='class-images'>
        <img src={classImg1} alt='tabletop during weaving class'/>
        <img src={classImg2} alt='tabletop during weaving class'/>
        <img src={classImg3} alt='tabletop during weaving class'/>
      </div>
      <div className='text-block'>
        <h2>Upcoming Weaving Classes</h2>
        <br></br>
        <p>
          <b>Please check again soon!</b>
        </p>
        {/* <p>
          <b>Intro to Weaving One Day Workshop</b>
          <br></br>
          <i>
          Chicago Botanic Garden
          </i>
          <br></br>
          Saturday, June 6, 1-3:30 p.m.
        </p>
        <br></br> */}
        {/* <p>
          <b>Intro to Weaving One Day Workshop</b>
          <br></br>
          <i>Chicago Botanic Garden</i>
          <br></br>
          Tuesdays, 6-8 p.m. CT
          <br></br>
          Saturday, August 22, 1-3:30 p.m.
          <br></br>
        </p>
*/}
      </div>
    </>
  );
};

export default ClassesPage;
