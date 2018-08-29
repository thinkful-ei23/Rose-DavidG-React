import React from 'react';

export default function PasswordInput(props){
    return (
        <form className="PasswordInput"> 
            <label>Password Input </label>
            <input 
                type="text" 
                onChange={(e) => props.handleChange(e.target.value)}/>
            </form>
    )
}