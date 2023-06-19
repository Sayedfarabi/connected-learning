import React from 'react';

const Button = (children) => {
    return (
        <button className="btn btn-primary text-[#ECEEF5] rounded-full">
            {children}
        </button>
    );
};

export default Button;