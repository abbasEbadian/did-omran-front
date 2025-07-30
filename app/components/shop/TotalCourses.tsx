import React from 'react'

const totalCourses = 9;

function TotalCourses() {
    return (
        <div className='grid grid-cols-3 gap-x-4'>
            {Array.from({length: totalCourses}).map((_, index) => (
                <div key={index} className="col-span-1">
                    {/*<EducationItems />*/}
                </div>
            ))}
        </div>
    );
}

export default TotalCourses





