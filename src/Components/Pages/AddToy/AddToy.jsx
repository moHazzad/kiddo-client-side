import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddToy() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToy = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.toyName.value;
    const pictureURL = form.photoUrl.value;
    const sellerName = form.name.value;
    const email = user?.email;
    const subCategory = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.quantity.value;
    const details = form.details.value;

    const addToy = {
      sellerName,
      name,
      pictureURL,
      email,
      subCategory,
      price,
      rating,
      availableQuantity,
      details,
    };

    fetch("https://the-toy-server-hazzadmdap-gmailcom.vercel.app/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // alert("service book successfully");
          Swal.fire({
            title: 'Congratulation!',
            text: 'toy added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          navigate("/mytoy");
        }
      });
  };

  return (
    <>
    <Helmet>
        <title>KIDOO \ Add a toy</title>
      </Helmet>
    <div className="my-20">
      <form onSubmit={handleAddToy}>
        <div className=" flex gap-20 mb-5">
          <input
            type="text"
            name="toyName"
            placeholder="toy name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            name="photoUrl"
            placeholder="photoUrl"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className=" flex gap-20 mb-5">
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            placeholder="email"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className=" flex gap-20 mb-5">


          <select name="category" className="select select-secondary w-full max-w-xl">
            
            
            <option value='Doll'>Doll</option>
            <option value='Accessories'>Accessories</option>
            <option value='pals'>pals</option>
          </select>

          {/* <input type="text" name="category" placeholder="sub-category" className="input input-bordered input-secondary w-full " /> */}
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className=" flex gap-20 mb-5">
          <input
            type="text"
            name="rating"
            placeholder="rating"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            name="quantity"
            placeholder="available quantity"
            className="input input-bordered input-secondary w-full "
          />
        </div>

        <div className=" flex gap-20 mb-5">
          <input
            type="text"
            name="details"
            placeholder="details description"
            className="input input-bordered input-secondary w-full "
          />
          {/* <input type="submit" name="quantity" placeholder="" className="input input-bordered input-secondary w-full " /> */}
          <button type="submit" className="input  w-full bg-[#BC0A4D]">
            Add Toy
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default AddToy;
