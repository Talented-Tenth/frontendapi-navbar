import React from 'react';

function SchoolDetail({school}) {
    return (
        <div>
            <h3>{school.name}</h3>
            <p>{school.city}</p>
            <p>{school.state}</p>
        </div>
    );
}

export default SchoolDetail;