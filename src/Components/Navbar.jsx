import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setCategory }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://i.ibb.co/DVnDc50/world-news.png"
            style={{ width: "45px", height: "45px" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link text-white"
                onClick={() => setCategory("technology")}
              >
                Technology
              </a>
            </li>
            <li class="nav-item ">
              <a
                class="nav-link text-white "
                onClick={() => setCategory("business")}
              >
                Business
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white "
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white "
                onClick={() => setCategory("sports")}
              >
                Sports
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                onClick={() => setCategory("health")}
              >
                Health
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <Link to={"/login"}>
              <a
                class="nav-link text-white px-5 py-2"
                style={{ textDecoration: "none" }}
              >
                Login
              </a>
            </Link>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      {/* <img
        src="https://i.ibb.co/H70nxZK/user.png"
        style={{ width: "45px", height: "45px" }}
      /> */}
    </nav>
  );
};

export default Navbar;
