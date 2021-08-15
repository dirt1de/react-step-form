import React from 'react'

export default function UserForm({nextPage}) {
    return (
        <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"}}>
            <h1>User Information</h1>
            Who are you?

            <button onClick={nextPage}>Next Page</button>
        </div>
    )
}
