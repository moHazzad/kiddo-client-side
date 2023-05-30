// import React from 'react'
import { Link } from "react-router-dom";

function SingleMytoys({toys,handleDelete}) {
    const {
        _id,
        pictureURL,
        name,
        sellerName,
        subCategory,
        price,
        availableQuantity,
      } = toys;
      
  return (
    <tr>
      <th>
        <label>
          <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-outline hover:bg-[#BC0A4D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="mask mask-squircle w-12 h-12">
          <img src={pictureURL} alt="doll" />
        </div>
      </td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <th>
        <button>{price}</button>
      </th>
      <th>
        <button>{availableQuantity}</button>
      </th>
      <th>
        <button>{sellerName}</button>
      </th>
      <th>
      <Link to={`/edit/${_id}`}><button className="rounded-md bg-[#BC0A4D] text-white btn-sm">Edit</button></Link>
      </th>
    </tr>
  )
}

export default SingleMytoys