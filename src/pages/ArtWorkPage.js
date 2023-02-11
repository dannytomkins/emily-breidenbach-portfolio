import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import myWorkData from '../data/myWorkData';
import studentWorkData from '../data/studentWorkData';
import ArtWorkItem from '../components/ArtWorkItem';


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
      
      return (
        <>
          {data ? (
            <>
              <img src={data.img} alt={data.name} />
            </>
          ) : (
            <div>Loading...</div>
          )}
        </>
      );
  };
  
  export default ArtWorkPage;
