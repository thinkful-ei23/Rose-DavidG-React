import React from 'react';

export default function Validate(password){
    const check=password;
        const sizedFields = {
            password: { min: 8, max: 72 }
          };
        
          const tooSmallField = Object.keys(sizedFields).find(
            field => 'min' in sizedFields[field] &&
              req.body[field].trim().length < sizedFields[field].min
          );
          if (tooSmallField) {
            const min = sizedFields[tooSmallField].min;
            const err = new Error(`Field: '${tooSmallField}' must be at least ${min} characters long`);
            err.status = 422;
            return next(err);
          }
        
          const tooLargeField = Object.keys(sizedFields).find(
            field => 'max' in sizedFields[field] &&
              req.body[field].trim().length > sizedFields[field].max
          );
        
          if (tooLargeField) {
            const max = sizedFields[tooLargeField].max;
            const err = new Error(`Field: '${tooLargeField}' must be at most ${max} characters long`);
            err.status = 422;
            return next(err);
          }

          return check;
    }