import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";
function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("indonesia");
  const [text, setText] = useState("");
  const [largeTitle, setLargeTitle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=93f8780438b44379bd04827ffc96fc1f`
      );
      const data = await res.json();
      setItems(data.articles);
      setLargeTitle(data.articles[0]);
    };

    fetchArticle();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Masukan inputan");
    } else {
      setQuery(text);
      setText("");
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            News
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
                <a class="nav-link" aria-current="page" href="#">
                  Indonesia
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Programming
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  COVID-19
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  Saved
                </a>
              </li>
            </ul>
            <form
              class="d-flex"
              role="search"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <input
                class="form-control me-2"
                type="text"
                placeholder="Search..."
                aria-label="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <section className="section">
        <article className="title">
          <h1>{largeTitle.title}</h1>
          <a href={largeTitle.url} target="_black" rel="noreferr">
            Read Full Article
          </a>
        </article>

        <p className="category">
          Category: <span>{query}</span>{" "}
        </p>

        <article className="cards">
          <div class="container">
            <div class="row hidden-md-up">
              {items.map(
                ({
                  author,
                  publishedAt,
                  title,
                  url,
                  objectId,
                  description,
                }) => (
                  <div class="col-md-4">
                    <div class="card">
                      <div key={objectId}>
                        <h2>{title}</h2>
                        <p>{format(new Date(publishedAt), "dd MMM yyyy")}</p>
                        <h3>{description}</h3>
                        <ul>
                          <li>{author}</li>
                          <div className="readSave">
                            <li className="read">
                              <a href={url} target="_black" rel="noreferr">
                                Read More
                              </a>
                            </li>
                            <li className="save">
                              <a href={""} target="_black" rel="noreferr">
                                Saved
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
