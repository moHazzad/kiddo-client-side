// import React from 'react'
import { useLoaderData , useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'

function Edit() {
    const navigate = useNavigate()
    const singleToyData = useLoaderData()
    console.log(singleToyData);

const {price, availableQuantity, details, _id} = singleToyData

    const handleUpdateAddToy = (e)=>{
        e.preventDefault()
   
        const form = e.target;
        const price = form.price.value
        const availableQuantity = form.quantity.value
        const details = form.details.value
    
      
        
        const addToy = {price, availableQuantity, details};
    
        fetch(`https://the-toy-server-hazzadmdap-gmailcom.vercel.app/alltoys/${_id}`, {
              method: 'PUT', 
              headers: {
                  'content-type': 'application/json'
              }, 
              body: JSON.stringify(addToy)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.modifiedCount > 0){
                //   alert('toy update successfully')
                  Swal.fire({
                    title: 'Congratulation!',
                    text: 'toy updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate('/mytoy')
              }
          })
      }
  return (
    <div className="my-20">
    <form onSubmit={handleUpdateAddToy}> 
      
      
      <div className=" flex gap-20 mb-5">
      <input type="text" name="price" defaultValue={price}  className="input input-bordered input-secondary w-full " />

      <input type="text" name="quantity" defaultValue={availableQuantity} placeholder="available quantity" className="input input-bordered input-secondary w-full " />
      <input type="text" name="details" defaultValue={details} placeholder="details description" className="input input-bordered input-secondary w-full " />

      
      {/* <input type="submit" name="quantity" placeholder="" className="input input-bordered input-secondary w-full " /> */}
      <button type="submit" className="input  w-full bg-[#BC0A4D]">Update Toy</button>
      </div>
    </form>
  </div>
  )
}

export default Edit