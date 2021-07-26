import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducer);
    console.log(product);
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details_image">
                        <img src={`/images/${product.image}`} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="details_name">
                        {product.name}
                    </div>
                    <div className="details_prices">
                        <span className="details_actual">
                            {currencyFormatter.format(product.price, { code: 'USD' })}
                        </span>
                        <span className="details_discount">
                            {currencyFormatter.format(product.dicountPrice, { code: 'USD' })}
                        </span>

                    </div>
                    <div className="details_info">
                        <div className="details_incDec">

                            <span className="dec" onClick={(decQuantity)}><BsDash /></span>
                            <span className="quantity">{quantity}</span>
                            <span className="inc" onClick={() => setQuantity(quantity + 1)}><BsPlus /></span>

                            <button className="btn-default" onClick={()=> dispatch({type: 'ADD_TO_CART', payload:{product,quantity}})}>add to cart</button>

                        </div>
                        <div className="details_p">
                            <h4>Details</h4>
                            {product.desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
