import { SignInMethod } from "firebase/auth";
// import { useLoaderData } from "react-router-dom";
import SingaleToys from "./SingaleToys";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { Helmet } from "react-helmet";

function AllToys() {
  // const allToys = useLoaderData();
  const [allToys, setAllToys] = useState([])
  const [searchToy, setSearchToy] = useState([])


  useEffect(()=>{
    fetch("https://the-toy-server-hazzadmdap-gmailcom.vercel.app/alltoys")
    .then(res => res.json())
    .then(data=> setAllToys(data))
  },[])

  const handleSearch = () => {
    fetch(`https://the-toy-server-hazzadmdap-gmailcom.vercel.app/toySearchByName/${searchToy}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };


  return (
    <>
    <Helmet>
        <title>KIDOO \ AllToys</title>
      </Helmet>
    <section>
      <div className="my-20 flex gap-3 ">
        <input onChange={(event) => setSearchToy(event.target.value)}
          className="input input-bordered input-secondary w-full p-3  rounded-lg"
          type="text"
          name=""
          id=""
          placeholder="search"
        />
        <button onClick={handleSearch} className="px-5 rounded-lg bg-[#BC0A4D]">Search</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
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
              </th> */}
              <th>Image</th>
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
            {allToys && allToys.map((toys) => (
              <SingaleToys key={toys._id} toys={toys} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </>
  );
}

export default AllToys;
