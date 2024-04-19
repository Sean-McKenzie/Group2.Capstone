import Carousel from "react-bootstrap/Carousel";

function Recentreleasesbanner() {
  return (
    <>
      <Carousel>
        {/* <h3>
          RECENT <br /> RELEASES
        </h3> */}
        <Carousel.Item
          interval={2000}
          style={{ maxHeight: "300px", maxWidth: "100vw" }}
        >
          <img
            src=".../../../images/ArianaGrande_webbanner.png"
            alt="arianagrande"
            style={{ width: "100vw" }}
          />

          <Carousel.Caption>
            <h3>Ariana Grande</h3>
            <p>Eternal Sunshine</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          style={{ maxHeight: "300px", maxWidth: "100vw" }}
        >
          <img
            src=".../../../images/LilUziVert_webbanner.png"
            alt="Linkin Park"
            style={{ width: "100vw" }}
          />

          <Carousel.Caption>
            <h3>Lil Uzi Vert</h3>
            <p>Pink Tape</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          style={{ maxHeight: "300px", maxWidth: "100vw" }}
        >
          <img
            src=".../../../images/TwentyOnePilots_22_1024.webp"
            alt="Twenty One Pilots"
            style={{ width: "100vw" }}
          />

          <Carousel.Caption>
            <h3>Twenty One Pilots</h3>
            <p>Clancy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2000}
          style={{ maxHeight: "300px", maxWidth: "100vw" }}
        >
          <img
            src=".../../../images/therose_webbanner.png"
            alt="the rose"
            style={{ width: "100vw" }}
          />

          <Carousel.Caption>
            <h3>The Rose</h3>
            <p>DUAL</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Recentreleasesbanner;
