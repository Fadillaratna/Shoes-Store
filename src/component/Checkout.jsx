import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { checkout } from '../redux/action';

const Checkout = () => {
    const state= useSelector((state)=> state.handleCart)

    const dispatch = useDispatch();

    const out = () => {
        window.location.href = "/success"
        dispatch(checkout())
        
    }
    
    var total = 0;
    var harga = 0;
    const itemList = (product) => {
        total = total + product.price
        harga = product.qty * product.price
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{product.title}</h6>
                    <span className="text-muted">{product.qty} x ${product.price}</span>
                </div>
                <span className="text-dark fst-normal">${harga}</span>
            </li>
        )
    }

   
    

    return (
        <>
            <div className="container my-5 py-5" >
                <div className="row g-5">
                    <div className="col-md-12 col-lg-12 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span  id="t-dark">Your cart</span>
                            <span className="badge rounded-pill" id="dark">{state.length}</span>
                        </h4>
                        <ul className="list-group ">
                            {state.map(itemList)}
                            
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <div className="card p-2">
                            <button onClick={() => out()} className="btn btn-dark btn-lg w-100" id="light">Continue to checkout</button>
                            {/* <NavLink to="/success" className="btn btn-dark btn-lg w-100" id="light">Continue to checkout</NavLink> */}
                        </div>
                    </div>

                            
                    </div>
                </div>
        </>
    );
};

export default Checkout;