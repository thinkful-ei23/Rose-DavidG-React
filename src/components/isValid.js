import React from 'react';
import Validate from './validate';

export default function IsValid(props){
    return (
        <div>{Validate(props.password) ? 'Valid' : 'Invalid'}</div>
    )
}