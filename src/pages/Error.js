import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Error: page not found</p>
            <Link to='/'>Go back</Link>
        </div>
    );
}

export default Error;
