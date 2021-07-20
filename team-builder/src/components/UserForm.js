import React, {  useState } from 'react';


function UserForm({addToTeam}) {
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [role, setRole] =useState('')
    
    const handleSubmit = (evt) =>{
        evt.preventDefault()
        let newUser = {name, email, role}
        console.log(newUser)
        addToTeam(newUser)

    }
    
    return (


        <form onSubmit={handleSubmit} >
            
            <div>
                
                <input
                type='submit'
                value ='Submit' 
                
                />
                <input
                    type='text'
                    name='name'
                    onChange={(evt)=> {
                        setName(evt.target.value)
                    }}
                    value ={name}
                />
                <input
                    type='text'
                    name='email'
                    onChange={(evt)=> {
                        setEmail(evt.target.value)
                    }}
                    value ={email}
                />
             <label htmlFor= 'role'>Role
                <select  
                    id= 'role'
                    name='role'
                    onChange={(evt)=> {
                        setRole(evt.target.value)
                    }}
                    value ={role}
                    >

                    <option value= ''>--- Select a Role ---</option>
                    <option value= 'FrontendDev'>Frontend Dev</option>
                    <option value= 'BackendDev'>Backend Dev</option> 
                    <option value= 'FullStackDev'>Full Stack Dev</option>
                
                </select>
                </label>
            </div>
        </form>
    );
}

export default UserForm;