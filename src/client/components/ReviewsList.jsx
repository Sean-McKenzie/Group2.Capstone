//call reviews table
import Table from "react-bootstrap/Table";

function Reviewslist() {
  return (
    <Table striped bordered hover style={{ maxWidth: "25vw" }}>
      <thead>
        <tr>
          <th>A Look at recent reviews</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr>
        {/* <tr>
          <td style={{ display: "flex" }}>
            <img
              style={{ maxHeight: "45px" }}
              src=".../../../images/user_imagePlaceholder.png"
            />
            <p>ivettem23 reviews Victoria Monet</p>
          </td>
        </tr> */}
       
     
      </tbody>
    </Table>
  );
}

export default Reviewslist;
