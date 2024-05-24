import { Container, Row, Card, Button } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Card style={{ background: "none", stroke: "none", padding: "15px" }}>
        <Card.Body>
          <Card.Img
            src="../../images/tunetalklogo_onlyimage.png"
            alt="tune talk logo"
            style={{ maxWidth: "60px", maxHeight: "150px" }}
          />{" "}
          <Card.Title
            style={{
              color: "white",
              dropShadow: "true",
              fontFamily: "sans-serif",
              fontSize: "25px",
            }}
          >
            {" "}
            Tune Talk is your hub for all your thoughts on music. Love an album?
            Let the artist know! Think it could've been a litttttle bit better,
            leave some construstive criticism. You drive the conversation!
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}
