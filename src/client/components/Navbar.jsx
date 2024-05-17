import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

//import {setToken} from "authslice"

const Navigations = () => {
  // const token = useSelector((state) => state.auth.token);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  //function to handle signout
  const signout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  const registerAccount = (
    <ul style={{ display: "flex", listStyleType: "none" }}>
      <li style={{ marginRight: 18 }}>
        <Link style={{ textDecoration: "none" }} to="/login" className="login ">
          Login
        </Link>
      </li>
      <Link style={{ textDecoration: "none" }} to="/register" className="login">
        Register
      </Link>
    </ul>
  );

  const signedIn = (
    <ul style={{ display: "flex", listStyleType: "none" }}>
      <li style={{ marginRight: 18 }}>
        <Link to="/profile" className="login">
          Account
        </Link>
      </li>
      <li onClick={signout} className="login" style={{ cursor: "pointer" }}>
        Logout
      </li>
    </ul>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#3E3B43",
        alignItems: "center",
        padding: "15px",
        margin: "0px",
        backgroundColor: "#8072A4",
        backgroundSize: "contain",
        opacity: "0.9",
      }}
    >
      <h1>
        <Link
          style={{ textDecoration: "none" }}
          to="/"
          className="welcome
        "
        >
          Music Review Site
        </Link>
      </h1>

      {localStorage.getItem("token") ? signedIn : registerAccount}
    </div>
  );
};

export default Navigations;
