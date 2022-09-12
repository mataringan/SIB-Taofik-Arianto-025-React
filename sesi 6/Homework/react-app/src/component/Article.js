const Article = () => (
  <>
    <h3>Next Meetup</h3>
    <article className="firstArticle">
      <p>
        <b>Awesome Meetup and event</b>{" "}
      </p>
      <p className="date"></p>
      <p>
        <b>
          Hello, Javascript & Node.js Ninjas! <br />
          Get Ready for our montly meetup JakartaJS! This will be our fifth
          meetup of 2018! <br />
          The meetup format will contain some short stories and technical talks.{" "}
          <br /> If you have a short announcement you'd like to share with the
          audience, you may do so during open mic announcements. <br />
          <br />
          Remember to bring a photo ID to get throught building security. <br />{" "}
          <br />
          ..... <br /> <br />
          See you there! <br />
          <br />
          Best,Hengki, Giovanni, Sofian, Riza, Agung The Jakarta Organizers
        </b>
      </p>
    </article>
    <h3>About Meetup</h3>
    <article className="secondArticle">
      <p>
        Come and meet other developers interested in the JavaScript and it's
        library in the Greater Jakarta area
      </p>
      <p>Twitter: @JakartaJS and we use the hastag #jakartajs</p>
    </article>
    <div className="headerMembers">
      <div className="header">
        <h3> Members </h3>
        <h4> See all</h4>
      </div>
    </div>
    <article className="thirdArticle">
      <div className="profileMembers">
        <div className="image">
          <img src="" alt="" />
        </div>
        <div className="nameProfile">
          <p>Organizers</p>
          <p>
            Adhy Wiranata <span>4 others.</span>
          </p>
        </div>
      </div>
    </article>
    <div className="headerMembers">
      <div className="header">
        <h3>Past Meetups</h3>
        <h4>See all</h4>
      </div>
    </div>
    <article className="fourthArticle">
      <div className="card">
        <div className="firstCard">
          <p>27 November 2017</p>
          <hr />
          <p>#39 JakartaJS April Meetup with kumparan</p>
          <p>
            139 <span>went</span>
          </p>
          <div className="view">
            <p>View</p>
          </div>
        </div>
        <div className="secondCard">
          <p>27 October 2017</p>
          <hr />
          <p>#38 JakartaJS April Meetup with BliBli</p>
          <p>
            113 <span>went</span>
          </p>
          <div className="view">
            <p>View</p>{" "}
          </div>
        </div>
        <div className="thirdCard">
          <p>27 September 2017</p>
          <hr />
          <p>#37 JakartaJS April Meetup with Hacktiv8</p>
          <p>
            110 <span>went</span>
          </p>
          <div className="view">
            <p>View</p>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default Article;
