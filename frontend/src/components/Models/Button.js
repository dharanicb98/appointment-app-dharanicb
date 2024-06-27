import React from 'react';

const Button = ({ label, type = 'button', onClick, className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
