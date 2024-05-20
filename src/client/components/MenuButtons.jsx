// import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

//ADD LINK PATH LATER
function Menubuttons() {
  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-around",
          textDecoration: "none",
          fontSize: "25px",
          fontWeight: "Bold",
        }}
      >
        <li>
          <Link
            to="/artist"
            className="artists"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
              fontWeight: "Bold",
            }}
          >
            Artists{" "}
          </Link>
        </li>

        <li style={{ color: "white" }}>/</li>
        <li>
          <Link
            to="/topsongs"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
              fontWeight: "Bold",
            }}
          >
            Top Songs{" "}
          </Link>
        </li>
        <li style={{ color: "white" }}>/</li>
        <li>
          <Link
            to="/albums"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
              fontWeight: "Bold",
            }}
          >
            Albums{" "}
          </Link>
        </li>
        <li style={{ color: "white" }}>/</li>
        <li>
          <Link
            to="/search"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
              fontWeight: "Bold",
            }}
          >
            Search{" "}
          </Link>
        </li>
        <li style={{ color: "white" }}>/</li>
        <li>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
              fontWeight: "Bold",
            }}
          >
            About
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menubuttons;
