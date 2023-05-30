import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Login() {
  const [error, setError] = useState("");
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        form.reset();
        navigate(from, { replace: true });
        toast("Welcome");
        // navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        toast("Welcome");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold ">Login now!</h1>
          <p className="py-6">{error}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
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
                  to={"/register"}
                  className="label-text-alt link link-hover"
                >
                  Dont have an Account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="py-2 rounded-md text-white bg-[#BC0A4D]">
                Login
              </button>
            </div>
            <div className="text-center my-2">
              <h1>OR</h1>
            </div>
            <div className=" flex flex-row gap-5 justify-center ">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-circle btn-outline font-extrabold hover:text-red-500"
              >
                G
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-circle btn-outline font-extrabold "
              >
                GIT
              </button>
              {/* <button className="btn btn-outline ">
                Sign-In with Google
              </button> */}
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
