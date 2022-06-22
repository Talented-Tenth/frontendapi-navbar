import React, { useState, useEffect } from 'react';
import SchoolDetail from './SchoolDetail';



function Schools() {
    //state storing schools list
    const [schools, setSchools] = useState(null);
    
    //load schools list on component mount
    useEffect(() => {
    getSchools();
    }, []);

    //api fetch request
    function getSchools() {
    const url = `http://hub-env.eba-ufpmtewu.us-east-1.elasticbeanstalk.com/schools`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
        setSchools(response.schools)
        })
        .catch(console.error);
    }

    //guard operator displays program after api response
    if(schools===null){
        return(
        <div>Loading Results...</div>
        )
    } else{
        return ( 
        
            <div className="Schools">
                {schools.map(i => (
                    <SchoolDetail 
                    key={i.id}
                    school={i}
                    />
            ))}   
            </div>
            );
    }
}

export default Schools;