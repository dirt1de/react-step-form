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
    setState({
      page: state.page + 1
    })
  }

  const prevPage = () => {
    setState({
      page: state.page - 1
    })
  }


  {
    switch (state.page) {

      case 1:
        return <div className="App">
          <UserForm handleChange={setState} nextPage={nextPage}></UserForm>
        </div>


      case 2:
        return <div className="App">
          <JobInfo handleChange={setState} nextPage={nextPage} prevPage={prevPage}></JobInfo>

        </div>

      case 3:
        return <div className="App">
          <Confirm state={state} handleChange={setState} nextPage={nextPage} prevPage={prevPage}></Confirm>
        </div>

      case 4:
        return <div className="App">
          <Success handleChange={setState}></Success>
        </div>

    }
  }



}

export default App;
