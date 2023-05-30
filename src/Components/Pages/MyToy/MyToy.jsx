// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleMytoys from "./SingleMytoys";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

function MyToy() {
  const { user } = useContext(AuthContext);
  const [mytoys, setMyToys] = useState([]);
  // console.log(mytoys);

  const url = `https://the-toy-server-hazzadmdap-gmailcom.vercel.app/alltoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://the-toy-server-hazzadmdap-gmailcom.vercel.app/alltoys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // alert('deleted successful');
              const remaining = mytoys.filter((toys) => toys._id !== id);
              setMyToys(remaining);
              Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success'
              )
            }
          });
      }
    });

    // const proceed = confirm('Are You sure you want to delete');
  };

  return (
    <>
      <Helmet>
        <title>KIDOO \ myToys</title>
      </Helmet>
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <button className="btn btn-circle btn-outline hover:bg-[#BC0A4D]">
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
              <th>Seller</th>
              <th>Tot Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th> Seller Name</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {mytoys &&
              mytoys.map((toys) => (
                <SingleMytoys
                  key={toys._id}
                  toys={toys}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyToy;
