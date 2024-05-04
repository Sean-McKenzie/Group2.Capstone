import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";

export default function SearchBar() {
  return (
    <div>
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for an Song"
            type="input"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                console.log("pressed enter");
                // console.log(event.target.value)
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            onClick={(event) => {
              console.log("clickedButton");
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
    </div>
  );
}
