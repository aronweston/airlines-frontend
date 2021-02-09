import React from 'react';

const Button = (props) => {
    return (
        <button className='border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outliner' onClick={props.onClick}>{props.buttonText}</button>
    );
}

export default Button;
