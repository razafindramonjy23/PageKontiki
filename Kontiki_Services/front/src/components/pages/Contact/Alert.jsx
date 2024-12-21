import React, { Children } from 'react'; 

export const Alert = ({className, Children}) => {
    return (
        <div 
            role = "alert"
            className={`rounded-lg p-4 ${className}`}
            >
                {Children}
        </div>
    );
};

export const AlertDescription = ({   Children   }) => {
    return (
        <div className='text-sm font-medium'>
            {Children}
        </div>
    );
};