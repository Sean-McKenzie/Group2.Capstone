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
            style={{ textDecoration: "none" }}
          >
            Artists{" "}
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            to="/genres"
            className="genres"
             style={{ textDecoration: "none" }}
          >
            Genres{" "}
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link style={{ textDecoration: "none" }}>Top Songs </Link>
        </li>
        <li>/</li>
        <li>
          <Link style={{ textDecoration: "none" }}>Top Artists </Link>
        </li>
        <li>/</li>
        <li>
          <Link style={{ textDecoration: "none" }}>About</Link>
        </li>
      </ul>
    </>
  );
}

export default Menubuttons;

