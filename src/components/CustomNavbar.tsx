import { Navbar, NavDropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHouse,
  faPeopleGroup,
  faSuitcase,
  faCommentDots,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.css";

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="light" sticky="top">
        <Navbar.Brand className="underline" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="rgb(10, 102, 194)"
            width="44"
            height="44"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </Navbar.Brand>
        <div id="nav-search">
          <Form className="d-flex">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-input"
              aria-label="Search"
            />
          </Form>
        </div>
        <div id="nav-main" className="d-flex">
          <a className="onHover" href="/">
            <FontAwesomeIcon icon={faHouse} />
            <span id="navs">Home</span>
          </a>
          <a className="onHover" href="/">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span id="navs">My Network</span>
          </a>
          <a className="onHover" href="/">
            <FontAwesomeIcon icon={faSuitcase} />
            <span id="navs">Jobs</span>
          </a>
          <a className="onHover" href="/">
            <FontAwesomeIcon icon={faCommentDots} />
            <span id="navs">Messaging</span>
          </a>
          <a className="onHover" href="/">
            <FontAwesomeIcon icon={faBell} />
            <span id="navs">Notifications</span>
          </a>
          <div>
            <img
              src="http://placekitten.com/25/25"
              id="avatarTiny"
              alt="avatar"
            ></img>
            <NavDropdown
              className="pb-2"
              title="Me"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item id="accountDropdown" className="noHover">
                <img
                  src="http://placekitten.com/50/50"
                  id="avatar"
                  alt="avatar"
                ></img>
                <div>
                  <span
                    style={{ color: "rgba(37,37,37,255)", fontWeight: "bold" }}
                  >
                    Mantas Petrosius
                  </span>
                  <span style={{ color: "rgba(37,37,37,255)" }}>
                    Student at EPICODE
                  </span>
                </div>
              </NavDropdown.Item>
              <div className="px-2 py-2">
                <NavDropdown.Item
                  href="#action4"
                  id="view-profile"
                  className="mb-2"
                >
                  View Profile
                </NavDropdown.Item>
              </div>
              <NavDropdown.Divider />
              <NavDropdown.ItemText>
                <span>
                  <b>Account</b>
                </span>
              </NavDropdown.ItemText>
              <NavDropdown.Item href="#action5" id="premium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  width="17"
                  height="17"
                  focusable="false"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
                Try Premium for free
              </NavDropdown.Item>
              <NavDropdown.Item className="underline" href="#action5">
                Settings & Privacy
              </NavDropdown.Item>
              <NavDropdown.Item className="underline" href="#action6">
                Help
              </NavDropdown.Item>
              <NavDropdown.Item className="underline" href="#action7">
                Language
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.ItemText>
                <span>
                  <b>Manager</b>
                </span>
              </NavDropdown.ItemText>
              <NavDropdown.Item className="underline" href="#action8">
                Posts & Activity
              </NavDropdown.Item>
              <NavDropdown.Item className="underline" href="#action9">
                Job Posting Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="underline" href="#signout">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div id="side-nav">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
            </svg>
            <a
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Work
              <FontAwesomeIcon icon={faCaretDown} />
            </a>
          </div>
          <div
            className="ml-4"
            style={{ textDecoration: "underline", color: "rgb(187, 115, 88)" }}
          >
            Try Premium for free
          </div>
        </div>
      </Navbar>

      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Toggle right offcanvas
      </button>
    </>
  );
};
export default CustomNavbar;
