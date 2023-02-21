import { Button, Container } from "react-bootstrap";
import "../css/navbar.css";

const SubNav = () => {
  return (
    <Container className="subNav" fluid>
      <div id="leftSub">
        <img
          src="http://placekitten.com/40/40"
          alt="pict here"
          style={{ borderRadius: "50%" }}
        />
        <div className="d-flex flex-column mr-auto">
          <span style={{ fontSize: "13px" }}>
            <b>Mantas Petrosius</b>
          </span>

          <span>Student at EPICODE</span>
        </div>
      </div>

      <div className="subButtons">
        <Button className="mr-2" variant="outline-secondary">
          More
        </Button>
        <Button className="mr-2" variant="outline-primary">
          Add profile section
        </Button>
        <Button style={{ backgroundColor: "#0a66c2" }}>Open to</Button>
      </div>
    </Container>
  );
};

export default SubNav;
