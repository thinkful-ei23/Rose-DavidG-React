import React from 'react';

export default function Validate(password){
  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if(password.match(regex)) {
    return true;
  } else { 
    return false;
  }
}