import React from 'react';

function SchoolDetail({school}) {
    return (
        <div>
            <h3>{school.name}</h3>
            <p>{school.city}</p>
            <p>{school.state}</p>
            <p>Cost: {school.cost_roomboard_oncampus}</p>
            <p>AVG Grad Earnings: {school.grad_earnings}</p>
        </div>
    );
}

export default SchoolDetail;