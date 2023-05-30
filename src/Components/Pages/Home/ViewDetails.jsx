import React from 'react'
import { Helmet } from 'react-helmet';
import { useLoaderData } from "react-router-dom";

function ViewDetails() {
    const data = useLoaderData()
    console.log(data);
    const {pictureURL, price,rating,sellerName,subCategory,name,email,details,availableQuantity} = data
  return (
    <>
    <Helmet>
        <title>KIDOO \ ViewDetails</title>
      </Helmet>
    <div className="card lg:card-side bg-base-100 shadow-xl my-10 ">
  <figure><img className='w-[50%]' src={pictureURL} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="font-bold text-xl"> <span className='font-bold'>Toy Name </span>: {name} </h2>
    <p>{details}</p>
    <p><span className='font-bold'>price:</span>$ {price} </p>
    <p><span className='font-bold'>Rating:</span> {rating} </p>
    <p><span className='font-bold'>sellerName:</span> {sellerName} </p>
    <p><span className='font-bold'>subCategory:</span> {subCategory} </p>
    <p><span className='font-bold'>Quantity:</span> {availableQuantity} </p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
    </>
  )
}

export default ViewDetails