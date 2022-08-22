import React from 'react';
import classImg1 from '../img/class-1.jpg';
import classImg2 from '../img/class-2.jpg';
import classImg3 from '../img/class-3.jpg';

const ClassesPage = () => {
  return (
    <>
      <div className='class-images'>
        <img src={classImg1} />
        <img src={classImg2} />
        <img src={classImg3} />
      </div>
      <div className='text-block'>
        <h2>Upcoming Weaving Classes</h2>
        <br></br>
        <p>
          <b>Intro to Weaving: Online</b>
          <br></br>
          <i>
            School of the Art Institute of Chicago, Adult Continuing Education
          </i>
          <br></br>
          Thursdays, 6-9 p.m. CT
          <br></br>
          September 29-December 8, 2022 (No Class November 24)
          <br></br>
          <a href='https://continuingstudies.saic.edu/introduction-frame-loom-weaving/1270-2409' target='_blank'>
            Register Today!
          </a>
        </p>
        <br></br>
        <p>
          <b>Intro to Weaving: Online</b>
          <br></br>
          <i>Chicago Botanic Garden</i>
          <br></br>
          Tuesdays, 6-8 p.m. CT
          <br></br>
          September 13-November 15
          <br></br>
          <a href='https://www.chicagobotanic.org/adult_education/botanical_arts/introduction_weaving_online'target='_blank'>
            Register Today!
          </a>{' '}
        </p>
        <br></br>
        <p>
          <b>Intermediate and Advanced Weaving Workshop In-Person</b>
          <br></br>
          <i>Chicago Botanic Garden</i>
          <br></br>
          Saturdays, 1-4 p.m. CT
          <br></br>
          October 15-November 12
          <br></br>
          <a href='https://www.chicagobotanic.org/adult_education/botanical_arts/weaving_workshop_intermediateadvanced'target='_blank'>
            Register Today!
          </a>{' '}
        </p>
      </div>
    </>
  );
};

export default ClassesPage;
