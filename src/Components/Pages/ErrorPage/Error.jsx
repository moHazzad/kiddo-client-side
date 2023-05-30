import { Link } from "react-router-dom";
import errorPage from "../../../assets/errorPage.jpg";

function Error() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${errorPage})` }}
    >
      <div>
        <Link to={"/"}>
          {" "}
          <button className="btn bg-cyan-400 text-white font-bold">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
