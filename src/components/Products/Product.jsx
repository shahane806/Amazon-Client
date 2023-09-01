import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
const Product = ({ProductName,ProductPrice,ProductRating,ProductImage}) => {
    const dispatch = useDispatch();
    const handleAddToCart =(e)=>{
        e.preventDefault();
        dispatch({type:"ADD_TO_CART", data : {ProductName,ProductPrice,ProductRating,ProductImage}})
    }
  return (
    <div id='Product'>
      <div className='ProductInfo'><p>{ ProductName }</p></div>
      <div className='ProductInfo'><p>₹{ ProductPrice }</p></div>
     <div className='rating'>{Array(ProductRating).fill("⭐").map((item,index) => <div key={index} className='ProductInfo ' >{item}</div>) }</div>
        <img className="ProductImg" src={ProductImage} alt={ProductName}></img>
        <button className='AddToCartButton' onClick={handleAddToCart}>Add To Cart</button>
    </div>
  )
}

export default Product
