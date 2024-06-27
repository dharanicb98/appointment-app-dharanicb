import React from 'react';

const Input = ({ label, type = 'text', name, placeholder, value, onChange, className = '' }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-2 text-sm font-semibold">{label}</label>}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default Input;
