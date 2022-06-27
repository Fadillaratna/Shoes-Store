import React from 'react';
import { NavLink } from 'react-router-dom';


const Succes = () => {
    return (
        <div className='mt-5 text-center py-4 my-5'>
                <img src="/assets/check.png" alt="Illus" height="250px" width="350px" id="img"/><br/>
                <h2>Checkout success</h2>
                <p>Thank you for shopping!</p>
                <NavLink className="btn btn-dark" id="dark" to="/">
                    Back
                </NavLink>
        </div>
    );
};

export default Succes;