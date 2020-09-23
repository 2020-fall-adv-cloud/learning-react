import React from 'react';

const StudentList = ({students}) => {
    return (
        <>
        <h1>
            Students
        </h1>
        <ul>
            { students.map(x => <li>{ x.name }</li>) }
        </ul>
        </>
    );
}

export default StudentList;