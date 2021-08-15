import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export default function UserForm({nextPage, handleChange, state}) {

    return (
        <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"}}>
        <h1>User Information</h1>    
        
        <form>
            <div style={{display: "flex",
            width:"100%",
            justifyContent:"center",
            alignItems:"flex-start",
            flexDirection:"column"}}>
            <label>Last Name: </label>
            <input name="lastName" type="text" onChange={handleChange} value={state.lastName} required/>
          
            <label>First Name: </label>
            <input name="firstName" type="text" onChange={handleChange} value={state.firstName} required />
           
            <label>Email Address: </label>
            <input name="email" type="email" onChange={handleChange} value={state.email} required/>
            </div>
        </form>
        <span style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
        Next 
        <FontAwesomeIcon icon={faLongArrowAltRight} color="#6495ED" size="3x" onClick={nextPage} style={{cursor:"pointer",marginLeft:"10px"}}/>
        </span>
        </div>
    )
}
