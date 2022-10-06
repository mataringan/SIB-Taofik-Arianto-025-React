import "./About.css";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div class="container">
      <div class="about-wrapper">
        <div class="about-left">
          <div class="about-left-content">
            <div>
              <div class="shadow">
                <div class="about-img">
                  <img
                    src="https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/300626550_2260183484130073_1632342028728878060_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=pEAZ09ymQqUAX88PLoz&tn=9fUsdm7c8WTITFIi&_nc_ht=scontent-cgk1-2.xx&oh=00_AT-0deUTA9foQCf6tO10RQpYqhuhDXZZKHtmkjw4DRHhmQ&oe=63439556"
                    alt="about image"
                  />
                </div>
              </div>

              <h2>Taofik Arianto</h2>
              <h3>Web Developer</h3>
            </div>

            {/* <ul class="icons">
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-linkedin"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul> */}
          </div>
        </div>

        <div class="about-right">
          <h1>
            Hello<span>!</span>
          </h1>
          {/* <div class="about-btns">
            <button type="button" class="btn btn-pink">
              resume / CV
            </button>
            <button type="button" class="btn btn-white">
              Git hub
            </button>
          </div> */}

          <div class="about-para">
            <h3>I'M 025 - TAOFIK ARIANTO</h3>
            <hr />
            <p>
              Age <span>21</span>
            </p>
            <p>
              Address <span>Lakbok Ciamis</span>
            </p>
            <p>
              Email <span>taofikarianto@gmail.com</span>
            </p>
            <p>
              Website
              <a
                href="https://mataringan.github.io/portfolio/"
                style={{ marginLeft: 5, textDecoration: "none" }}
              >
                https://mataringan.github.io/portfolio/
              </a>
            </p>
          </div>
          <div class="credit" style={{ marginTop: 10 }}>
            Made with <span style={{ color: "tomato" }}>❤</span> by
            <a href="https://mataringan.github.io/portfolio/ ">
              <span style={{ marginLeft: 5 }}>Mataringan</span>
            </a>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40, marginBottom: 50 }}>
        <Link
          to="about-me"
          style={{
            textDecoration: "none",
            backgroundColor: "slateblue",
            color: "white",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          Progress Sesi Hacktiv8
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
