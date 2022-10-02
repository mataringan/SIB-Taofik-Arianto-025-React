import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("programming");
  const [text, setText] = useState("");
  const [largeTitle, setLargeTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchArticle = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=93f8780438b44379bd04827ffc96fc1f`
        // `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      const data = await res.json();
      setItems(data.articles);
      setLargeTitle(data.articles[0]);
    };

    fetchArticle();
    setIsLoading(false);
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
      <section className="section">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            typeof="text"
            name="search"
            id="search"
            placeholder="Search for something"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Search</button>
        </form>
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
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
              {items.map(
                ({
                  author,
                  publishedAt,
                  title,
                  url,
                  objectId,
                  description,
                }) => (
                  <div key={objectId}>
                    <h2>{title}</h2>
                    <div className="desc">{description}</div>

                    <ul>
                      <li>By {author}</li>
                      <li>
                        <a href={url} target="_black" rel="noreferr">
                          Read More
                        </a>
                      </li>
                    </ul>
                    <p>{format(new Date(publishedAt), "dd MMM yyyy")}</p>
                  </div>
                )
              )}
            </article>
          </>
        )}
      </section>
    </>
  );
}

export default App;
