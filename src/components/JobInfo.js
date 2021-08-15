import React from 'react'

export default function JobInfo({nextPage, prevPage}) {
    return (
        <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"}}>
            <h1>Job Information</h1>
            What do you do?
            <button onClick={nextPage}>Next Page</button>
            <button onClick={prevPage}>Previous Page</button>

        </div>
    )
}
