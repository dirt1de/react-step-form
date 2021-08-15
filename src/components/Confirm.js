import React from 'react'

export default function Confirm({nextPage,prevPage}) {
    return (
        <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"}}>
            <h1>Confirmation</h1>
            Confirm?

            <button onClick={nextPage}>Next Page</button>
            <button onClick={prevPage}>Previous Page</button>
        </div>
    )
}
