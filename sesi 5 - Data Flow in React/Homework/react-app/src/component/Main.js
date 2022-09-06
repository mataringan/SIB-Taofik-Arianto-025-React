import Article from "./Article";
import DataProfile from "./DataProfile";
function Main() {
  return (
    <main>
      <section className="profile">
        <div className="image">
          <img src={require("../assets/logo/logo.jpg")} />
        </div>
        <div className="about">
          <h3>Hacktiv8 Meetup</h3>
          <DataProfile />
        </div>
      </section>
      <Article />
      <div className="line"></div>
    </main>
  );
}

export default Main;
