import React from 'react';
import { NavLink } from 'react-router-dom';


const Succes = () => {
    return (
        <div className='mt-4 text-center py-4 my-5'>
                <img src="assets/succes.png" alt="Illus" height="420px" width="400px" id="img"/><br/>
                <h2>Checkout success</h2>
                <p>Thanks you for shopping!</p>
                <NavLink className="btn btn-dark" to="/">
                    Kembali
                </NavLink>
        </div>
    );
};

export default Succes;