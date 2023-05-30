import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';

function DollData({data}) {
    
    const {user } = useContext(AuthContext)
 
    const navigate = useNavigate()
    const {pictureURL, name, price , rating  ,_id  } = data

    const handleViewDetails = () =>{

        if(!user){
            Swal.fire({
                title: 'Opps',
                text: 'please Login first ',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
              navigate('/login')
        }
        navigate('/viewDetails')

        

    }

  return (
    <div className="card card-compact w-full  bg-base-100 shadow-xl">
            <figure className='w-full'>
              <img className='' src={pictureURL} alt="doll" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name} </h2>
              <p>Price:$ {price}</p>
              <p> Rating: {rating}</p>
              <div className="card-actions justify-end">
              <Link to={`/viewDetails/${_id}`}><button onClick={handleViewDetails} className="btn bg-[#BC0A4D]">View Details</button></Link>

              </div>
            </div>
          </div>
  )
}

export default DollData