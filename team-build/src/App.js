import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './Member.js'
import axios from 'axios'
import MemberForm from './Form.js'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [ teamMembers, setTeamMembers ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newMember.name || !newMember.email || !newMember.role) return;

    axios.post('https://localhost3000', newMember)
    .then(res => {
      setTeamMembers([ ...teamMembers, res.data]);
      setFormValues(initialFormValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
  }, [])


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='container'>
      <h1>Form App for Team Members</h1>

      <MemberForm
        values = {formValues}
        update = {updateForm}
        submit = {submitForm}
      />


      {
        teamMembers.map((member) => {
          return (
            <Member key ={member.id} details={member} />
          )
      })
    }
    </div>
  )
}

export default App;
