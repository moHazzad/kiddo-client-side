import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#CE0D57] text-white">
      <div className="navbar w-[90%] mx-auto rounded-lg py-1 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact text-[#BC0A4D] dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/alltoys'} className="">All Toys</Link>
            </li>
            {
              user ? <><li>
              <Link to={'/mytoy'} className="">My Toy</Link>
            </li>
            <li>
              <Link to={'/addtoy'} className="">Add Toy</Link>
            </li></>: ""
            }
            <li>
              <Link to={'/blogs'}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block  ">
          <Link to={'/'}>
          <div className="flex gap-1 items-center">
            <img className="w-10" src={logo} alt="logo" />
            <span style={{fontFamily: 'Playfair Display'}} className="tracking-widest font-extrabold text-white text-2xl">
              KIDOO
            </span>
          </div>
          </Link>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab  ": '',
                    opacity: isActive ? 1 : ""
                })} to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab  ": '',
                    opacity: isActive ? 1 : ""
                })} to={'/alltoys'} className="">All Toys</NavLink>
            </li>
            {
              user ? <><li>
              <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab  ": '',
                    opacity: isActive ? 1 : ""
                })} to={'/mytoy'} className="">My Toy</NavLink>
            </li>
            <li>
              <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab  ": '',
                    opacity: isActive ? 1 : ""
                })} to={'/addtoy'} className="">Add Toy</NavLink>
            </li></>: ""
            }
            <li>
              <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab  ": '',
                    opacity: isActive ? 1 : ""
                })} to={'/blogs'}>Blogs</NavLink>
            </li>
        </ul>
      </div>
      <div className=" navbar-end">
        {user ? (
          <>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user.displayName} src={user.photoURL} />
              </div>
            </label>

            <button onClick={handleLogOut} className="btn btn-ghost ">Log Out</button>
          </>
        ) : (
          <Link to={"/login"}>
            {" "}
            <button className="btn btn-ghost ">log in</button>
          </Link>
        )}
      </div>
    </div>
    </div>
  );
}

export default NavBar;
