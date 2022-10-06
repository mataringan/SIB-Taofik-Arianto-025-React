import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="about" class="nav-link" href="#">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/users" class="nav-link" href="#">
                User List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
