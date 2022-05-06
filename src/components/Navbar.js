import React, { useContext } from "react";
import { Link,useNavigate   } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // const currentUser = { MyName: "Mustafa Bilal DOĞAN" };
  // const currentUser=false
  const navigate = useNavigate();
const {currentUser} = useContext(AuthContext)
  return (
    /*   <div>
        <Link to="/" >Main</Link>
        <Link to="/register" >Registe</Link>
        <Link to="/login" >Login</Link>
    </div> */
   <div>
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">
          <h4>React Movie App</h4>
        </Link>
        <div className="d-flex text-white align-items-center">
          {currentUser ? (
            <h5 className="mr-2 text-capitalize">
              {currentUser?.displayName}
            </h5>
          ) : (
            <button
              className="mr-2 btn btn-outline-light"
              onClick={() => navigate("/login")}
              
            >
              Login
            </button>
          )}

          {currentUser ? (
            <button
              className="mr-2 btn btn-outline-light"
              onClick={() => logOut()}
              
            >
              Logout
            </button>
          ) : (
            <button
              className="ms-2 btn btn-outline-light"
              onClick={() => navigate("/register")}
              
            >
              Register
            </button>
          )}
        </div>
      </div>
    </nav>
  </div>
);
};

export default Navbar;
 