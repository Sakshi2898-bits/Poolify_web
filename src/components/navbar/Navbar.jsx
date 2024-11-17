import { React, useState, useEffect } from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { FaCarSide, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { SlArrowUp, SlArrowDown, SlArrowRight } from "react-icons/sl";
import { signOut } from "firebase/auth";
import poolifyLogo from "../../assets/poolifyLogo.png";
import poolify from "../../assets/poolify.png";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileVerification from "../profileVerification/ProfileVerification";
import "./Navbar.scss";

const NavBarComponent = ({ user, setUser }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showProfileVerification, setShowProfileVerification] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  const toggleProfileVerification = () =>
    setShowProfileVerification((prevState) => !prevState);

  const navigate = useNavigate();

  console.log(user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); 
      setTimeout(() => navigate('/login'), 2000); 
      toast.success("Logged out successfully!");
    } catch (error) {
        toast.error("Error during logout:", error);
    }
  };

  const handleProfileNavigation = () => {
    navigate("/profile");
  };

  return (
    <>
    <Navbar expand="lg" className="navBar-bg shadow-sm" sticky="top">
       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Navbar.Brand href="/home" className="d-flex align-items-center">
        <img
          src={poolifyLogo}
          width="50"
          height="50"
          alt="Logo"
          className="me-2"
        />
        <img src={poolify} width="115" height="38" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">
            <FaCarSide className="me-2" /> Ride
          </Nav.Link>
          <Nav.Link href="/about">
            <FaInfoCircle className="me-2" /> About Us
          </Nav.Link>
          <Nav.Link href="contact">
            <FaPhoneAlt className="me-2" /> Contact Us
          </Nav.Link>
        </Nav>
        <Nav>
          {user ? (
            <Nav.Link>
              <Profile className="svg-icon" />
              <span className="user-profile">{user.firstName}</span>
                <Dropdown show={isDropdownOpen} align="end">
                <Dropdown.Toggle
                  variant="none"
                  className="nav-btn arrow-signup-btn"
                  onClick={toggleDropdown}
                >
                  {isDropdownOpen ? <SlArrowUp /> : <SlArrowDown />}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="profile" onClick={handleProfileNavigation}>
                    <span>
                      <Button
                        variant="none"
                        className="nav-btn profile-btn"
                      >
                        Profile
                      </Button>
                    </span>
                    <SlArrowRight />
                  </Dropdown.Item>
                  <Dropdown.Item href="payments-history">
                    <span>
                      <Button
                        variant="none"
                        className="nav-btn payment-btn"
                      >
                        Payments & Refunds
                      </Button>
                    </span>
                    <SlArrowRight />
                  </Dropdown.Item>
                  <Dropdown.Item href="logout" onClick={handleLogout}>
                    <span>
                      <Button
                        variant="outline-light"
                        className="nav-btn logout-btn"
                        
                      >
                        Log out
                      </Button>
                    </span>
                    <SlArrowRight />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          ) : (
            <Nav>
              <Profile className="svg-icon" />
              <Dropdown show={isDropdownOpen} align="end">
                <Dropdown.Toggle
                  variant="outline-light"
                  className="nav-btn arrow-btn"
                  onClick={toggleDropdown}
                >
                  {isDropdownOpen ? <SlArrowUp /> : <SlArrowDown />}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="login" class="dropdownItem-login">
                    <span>
                      <Button
                        variant="outline-light"
                        className="nav-btn login-btn"
                      >
                        Log in
                      </Button>
                    </span>
                    <SlArrowRight />
                  </Dropdown.Item>
                  <Dropdown.Item href="signup" class="dropdownItem-signup">
                    <span>
                      <Button
                        variant="outline-light"
                        className="nav-btn signup-btn"
                      >
                        Sign up
                      </Button>
                    </span>
                    <SlArrowRight />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {showProfileVerification && <ProfileVerification />}
    </>
  );
};

export default NavBarComponent;
