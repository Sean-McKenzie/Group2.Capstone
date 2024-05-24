import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import Reviewslist from "./ReviewsList";

function Recentreleasesbanner() {
  return (
    <>
      <Carousel>
        <Carousel.Item
          interval={2000}
          style={{ maxHeight: "300px", maxWidth: "100vw" }}
        >
          {/* all links will need to be updated */}
          <Link to="/artist/66CXWjxzNUsdJxJ2JdwvnR">
            <img
              src=".../../../images/ArianaGrande_webbanner.png"
              alt="arianagrande"
              style={{ width: "100vw" }}
            />
          </Link>

          <Carousel.Caption>
            <h3>Ariana Grande</h3>
            <p>Eternal Sunshine</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          style={{ maxHeight: "300px", maxWidth: "100vw" }}
        >
          {/* all links will need to be updated */}
          <Link to="/artist/4O15NlyKLIASxsJ0PrXPfz">
            <img
              src=".../../../images/LilUziVert_webbanner.png"
              alt="Linkin Park"
              style={{ width: "100vw" }}
            />
          </Link>
          <Carousel.Caption>
            <h3>Lil Uzi Vert</h3>
            <p>Pink Tape</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          style={{ maxHeight: "300px", maxWidth: "100vw" }}
        >
          {/* all links will need to be updated */}
          <Link to="/artist/3YQKmKGau1PzlVlkL1iodx">
            <img
              src=".../../../images/TwentyOnePilots_22_1024.webp"
              alt="Twenty One Pilots"
              style={{ width: "100vw" }}
            />
          </Link>

          <Carousel.Caption>
            <h3>Twenty One Pilots</h3>
            <p>Clancy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          style={{ maxHeight: "300px", maxWidth: "100vw" }}
        >
          {/* all links will need to be updated */}
          <Link to="/artist/5na1LmEmK2VzNLje9snJYW">
            <img
              src=".../../../images/therose_webbanner.png"
              alt="the rose"
              style={{ width: "100vw" }}
            />
          </Link>

          <Carousel.Caption>
            <h3>The Rose</h3>
            <p>DUAL</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Reviewslist style={{display: "flex"}} /> */}
      <Container
        style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}
      >
        <Row style={{ justifyContent: "flex-end" }}>
          <Col xs={4} md={4}>
            <Reviewslist />
          </Col>
          <Col xs={7} md={7} style={{ marginBottom: "25px" }}>
            <h2
              style={{
                position: "absolute",
                left: "48%",
                top: "55%",
                color: "white",
              }}
            >
              ARTIST
            </h2>
            {/* all links will need to be updated */}
            <Link to="/">
              <Image
                src=".../../../images/VM_JAG (image social) 1.webp"
                thumbnail
              />
            </Link>
          </Col>
        </Row>
        <Row style={{ justifyContent: "flex-end" }}>
          <Col xs={7} md={7} style={{ marginBottom: "25px" }}>
            <h2
              style={{
                position: "absolute",
                left: "48%",
                top: "105%",
                color: "white",
              }}
            >
              ALBUM
            </h2>
            {/* all links will need to be updated */}
            <Link to="/">
              <Image
                src=".../../../images/ArianaGrande_webbanner.png"
                thumbnail
              />
            </Link>
          </Col>
        </Row>
        <Row style={{ justifyContent: "flex-end" }}>
          <Col xs={7} md={7} style={{ marginBottom: "25px" }}>
            <h2
              style={{
                position: "absolute",
                left: "48%",
                top: "155%",
                color: "white",
              }}
            >
              SONG
            </h2>
            {/* all links will need to be updated */}
            <Link to="/">
              <Image src=".../../../images/newFile-1.avif" thumbnail />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Recentreleasesbanner;

//  <div style={{ maxHeight: "200px", maxWidth: "75%" }}>
//         <Image src=".../../../images/therose_webbanner.png" fluid />
//       </div>
//       <div style={{ maxHeight: "200px", maxWidth: "75%" }}>
//         <Image src=".../../../images/therose_webbanner.png" fluid />
//       </div>
//       <div style={{ maxHeight: "200px", maxWidth: "75%" }}>
//         <Image src=".../../../images/therose_webbanner.png" fluid />
//       </div>

//  <Col style={{ justifyContent: "flex-start" }} xs={3} md={5}>
//           <Reviewslist />
//         </Col>
//         <Col style={{ justifyContent: "flex-end" }} xs={9} md={7}>
//           <Row style={{ justifyContent: "flex-end" }}>
//             <h2>ARTIST</h2>
//             <Image src=".../../../images/therose_webbanner.png" thumbnail />
//           </Row>
//           <Row style={{ justifyContent: "flex-end" }}>
//             <h2>ALBUM</h2>
//             <Image src=".../../../images/therose_webbanner.png" thumbnail />
//           </Row>
//           <Row style={{ justifyContent: "flex-end" }}>
//             <h2>SONG</h2>
//             <Image src=".../../../images/therose_webbanner.png" thumbnail />
//           </Row>
//         </Col>
