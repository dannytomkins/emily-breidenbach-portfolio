import React, { useState, useEffect } from 'react';
import myWorkData from '../../data/myWorkData';
import studentWorkData from '../../data/studentWorkData';
import { useParams } from 'react-router-dom';
import './ArtWorkPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';


const ArtWorkPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let workData;
    if (window.location.pathname.includes('student-work')) {
      workData = studentWorkData.find(work => work.id === parseInt(id));
    } else if (window.location.pathname.includes('work')) {
      workData = myWorkData.find(work => work.id === parseInt(id));
    }
    setData(workData);
  }, [id]);

  const nextImage = () => {
    let dataArray;
    let urlPath;
    if (window.location.pathname.includes('student-work')) {
      dataArray = studentWorkData;
      urlPath = "/student-work/";
    } else if (window.location.pathname.includes('work')) {
      dataArray = myWorkData;
      urlPath = "/work/";
    }
    const nextIndex = dataArray.indexOf(data) + 1;
    const nextImageData = dataArray[nextIndex];
    if (nextImageData) {
      setData(nextImageData);
      window.history.pushState({}, null, `${urlPath}${nextImageData.id}`);
    }
  };
  
  const prevImage = () => {
    let dataArray;
    let urlPath;
    if (window.location.pathname.includes('student-work')) {
      dataArray = studentWorkData;
      urlPath = "/student-work/";
    } else if (window.location.pathname.includes('work')) {
      dataArray = myWorkData;
      urlPath = "/work/";
    }
    const prevIndex = dataArray.indexOf(data) - 1;
    const prevImageData = dataArray[prevIndex];
    if (prevImageData) {
      setData(prevImageData);
      window.history.pushState({}, null, `${urlPath}${prevImageData.id}`);
    }
  };

  return (
    <>
      {data ? (
        <div className="artwork-page-container">
          <img src={data.img} alt={data.name}/>
          <button id="previous" onClick={prevImage}><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
  <button id="next" onClick={nextImage}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ArtWorkPage;