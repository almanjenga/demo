    import React from 'react';

    interface InputProps {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type?: string;
    placeholder?: string;
    error?: string;
    id?: string;  // Optional ID for accessibility and linking label to input
    disabled?: boolean;  // Optional disabled state for the input
    className?: string;  // Optional custom className to override default styling
    }

    const Input: React.FC<InputProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    error,
    id,
    disabled = false,
    className = '',
    }) => {
    return (
        <div className="mb-4">
        {/* Label with 'for' attribute linked to the input field */}
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        
        {/* Input field with dynamic classes and attributes */}
        <input
            id={id}  // Setting input's id for accessibility
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
            disabled={disabled}  // Apply disabled state if needed
        />
        
        {/* Display error message if any */}
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
    };

    export default Input;
