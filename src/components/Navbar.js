import { React, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top"
        data-bs-theme="dark"
        id="top"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={scrollToTop}>
            <img
              src={`${process.env.PUBLIC_URL}/p_full.png`}
              alt="logo"
              style={{
                width: "170px",
                marginRight: "20px",
                borderRadius: "18px",
              }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse custom-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/services"
                  onClick={scrollToTop}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/blog"
                  onClick={scrollToTop}
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item contact">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="#footer-section"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    const footerElement =
                      document.getElementById("footer-section");
                    if (footerElement) {
                      footerElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="form-check form-switch text-secondary">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label
                className="form-check-label mx-3"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
