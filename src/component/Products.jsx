import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import data from '../data/data';

const Products = () => {
    const { products } = data
    const [search, setSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState([])

    const searchItems = (searched) => {
        setSearch(searched)
        const results = products.filter((product) => product.title.toLowerCase().includes(searched.toLowerCase()))

        setFilteredResults(results)
    }

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }


    return (
        <div>
            <div className="container my-3 py-5">
                <div className="row">
                    <div className="col-12 mb-1">
                        <h1 className="display-6 fw-bolder text-center">Best Seller Products</h1>
                        <hr />
                        <div className="input">
                        <input type="text" className="form-control my-5 rounded" id="search" placeholder="Explore your favorite shoes..."
                           onChange={(search) => searchItems(search.target.value)}
                        />
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        search.length > 1 ? (
                            filteredResults.map((product) => (
                                <div className="col-md-3 mb-4 py-4 my-5" id="p">
                                <div class="card h-100 text-left p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)} id="dark">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            ))
                        ) : (
                            products.map((product) => (
                                <div className="col-md-3 mb-4 py-1 my-1" id="p">
                                <div class="card h-100 text-left p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <button className="btn btn-dark px-4 py-2" onClick={()=>addProduct(product)} id="light">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;