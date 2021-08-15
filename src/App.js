import './App.css';
import { useState } from 'react';

import Success from './components/Success';
import UserForm from './components/UserForm';
import JobInfo from './components/JobInfo';
import Confirm from './components/Confirm';

function App() {

  const [state, setState] = useState({
    page: 1,
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    topSkills: ""
  })

  const nextPage = () => {
    setState((prev)=>{
      return {
      ...prev, page: state.page + 1
    }})
  }

  const prevPage = () => {
    setState((prev)=>{
      return {
      ...prev, page: state.page - 1
    }})
  }

  const handleChange = (event)=>{
    setState((prev)=>{
        return{...prev,[event.target.name]:event.target.value}
    }
)
}

  
    switch (state.page) {

      case 1:
        return <div className="App">
          <UserForm handleChange={handleChange} nextPage={nextPage} state={state}></UserForm>
        </div>


      case 2:
        return <div className="App">
          <JobInfo handleChange={handleChange} nextPage={nextPage} prevPage={prevPage}></JobInfo>
        </div>

      case 3:
        return <div className="App">
          <Confirm state={state} nextPage={nextPage} prevPage={prevPage}></Confirm>
        </div>

      case 4:
        return <div className="App">
          <Success ></Success>
        </div>

      default:
        return <div className="App">
        <UserForm setState={setState} nextPage={nextPage} state={state}></UserForm>
        </div>  
    }
  



}

export default App;
