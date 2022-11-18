import React from 'react';
import myWork029 from '../img/my-work/my-work-029.jpg';

const AboutMe = () => {
  return (
    <>
      <div className='banner-image'>
        <img src={myWork029} />
      </div>
      <div className='text-block'>
        <p>
          Hi there! I am a weaver based in Chicago, IL. I love interacting with all levels of
          students and currently teach in the Adult Continuing Education program
          at the School of the Art Institute of Chicago as well as the botanic
          arts program at the Chicago Botanic Garden.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
