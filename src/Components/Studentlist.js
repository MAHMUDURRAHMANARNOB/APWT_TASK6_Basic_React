import React, { useState } from 'react';
import StudentDb from './StudentDb';

const Studentlist = () => {
    const data=[{name:'Mahmudur Rahman', id:'18-36452-1', cgpa:'3.33'},
    {name:'Fahim Muntasir', id:'18-36453-1', cgpa:'4'},
    {name:'Farhan Mahtab', id:'18-36454-1', cgpa:'4'}]

    const [studentdb]=useState(data)
    return (
        <div>
            {studentdb.map(student => <StudentDb students={student} />)}
            
        </div>
    );
};

export default Studentlist;