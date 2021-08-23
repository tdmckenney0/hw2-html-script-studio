import React, { useState, useEffect } from 'react';

/**
 * Basic Input Class that wraps Bulma. 
 * 
 * @param {object} props 
 *  
 * @returns {React.Component} 
 */
const Input = (props) => {
    const defaults = {
        className: "input",
        type: "text",
        placeholder: "Text Input"
    }

    const filtered = {...defaults, ...props};

    return <input {...filtered} />
};

export default Input;