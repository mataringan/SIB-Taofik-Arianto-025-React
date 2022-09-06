function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#" className="logo">
              QTemu
            </a>
          </li>
          <li>
            {" "}
            <a href="#">Create Meetup</a>{" "}
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li className="login">
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
