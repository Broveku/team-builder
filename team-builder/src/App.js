import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { render } from 'react-dom'
import TeamMember from './components/TeamMember';
import UserForm from './components/UserForm';

const mockData = [
  {name: 'Rich', email: 'rich@rich.com', role: 'Full Stack Dev'},
  {name: 'Matt', email: 'matt@matt.com', role: 'Full Stack Dev'}
]



function App() {
const [team , setTeam] = useState(mockData)

const addToTeam = newUser => {
  setTeam([newUser, ...team ])

}




  return (
    
    <div className="App">
      <UserForm addToTeam ={addToTeam} />
      
      {team.map(member => {

        return <TeamMember teamMember={ member } />
      })}

      
    </div>
  );
}

export default App;
