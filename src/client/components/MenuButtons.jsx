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
          // backgroundColor: "#DFD7F3",
        }}
      >
        <li>
          <Link
            to="/artist"
            className="artists"
            style={{ textDecoration: "none", color: "white" }}
          >
            Artists{" "}
          </Link>
        </li>

        <li>/</li>
        <li>
          <Link
            to="/topsongs"
            style={{ textDecoration: "none", color: "white" }}
          >
            Top Songs{" "}
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/albums" style={{ textDecoration: "none", color: "white" }}>
            Albums{" "}
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            Search{" "}
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link style={{ textDecoration: "none", color: "white" }}>About</Link>
        </li>
      </ul>
    </>
  );
}

export default Menubuttons;
