import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'


export default function JobInfo({ nextPage, prevPage, state, handleChange }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>

            <h1>Job Information</h1>

            <form>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column"
                }}>
                    <label>Job Title: </label>
                    <input name="jobTitle" type="text" onChange={handleChange} value={state.jobTitle} required />

                    <label>Your greatest talent: </label>
                    <input name="topSkill" type="text" onChange={handleChange} value={state.topSkill} required />

                </div>
            </form>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} color="#6495ED" size="3x" onClick={prevPage} style={{ cursor: "pointer", marginRight:"10px" }} />
                Previous 
                <div style={{width:"20px"}}></div>
                Next 
                <FontAwesomeIcon icon={faLongArrowAltRight} color="#6495ED" size="3x" onClick={nextPage} style={{ cursor: "pointer", marginLeft:"10px" }} />
            </div>

        </div>
    )
}
