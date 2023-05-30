import  { useContext, useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import {  toast } from 'react-toastify';
import { AuthContext } from "../AuthProvider/AuthProvider";

function Register() {

    const navigate = useNavigate()
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(name, photo, email, password);
    
        if (password.length < 6) {
          setError("password should be more then 6 char ");
          return;
        }
        registerUser(email, password )
                .then(result => {
                    const registerdUser = result.user;
                    console.log(registerdUser);
                    updateUserInfo(registerdUser, name, photo)
                    setError('Congratulation account created,pleas log in')
                    navigate('/')
                    toast("welcome");
                    form.reset();
                })
                .catch(error => {
                    setError(error.message)
                })
    
       
      }


      const updateUserInfo = (user, name, photo) => {
        updateProfile(user, { displayName: name, photoURL: photo })
          .then(() => {})
          .catch((error) => {
            setError(error.massage);
          });
    
    
      };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold ">Register  please!</h1>
          <p className="py-6">{error}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="PhotoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to={"/login"}
                  className="label-text-alt link link-hover"
                >
                  Already have an account ?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="py-2 rounded-md text-white bg-[#BC0A4D]">
                Register
              </button>
            </div>
            
             
            
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register