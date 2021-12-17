import React from 'react';
import { useParams } from 'react-router-dom';

const Studentdetails = () => {
    const {name}=useParams();
    const {id}=useParams();
    const {cgpa}=useParams();
    return(
        <div className='studentdetails'>
            
            <p>Students Name is {name} With ID:{id} and CGPA is {cgpa}</p>

        </div>
    );
};

export default Studentdetails;