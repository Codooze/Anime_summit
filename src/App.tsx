import "./App.scss";
import { useState } from "react";
import GHOST from "./assets/ghost.png";
import ANIME from "./assets/icons8-anime-64.png";
import CAMERA from "./assets/icons8-camera-100.png";
import SHARINGAN from "./assets/icons8-sharingan-100.png";
import AUTOGRAPH from "./assets/icons8-autograph-100.png";
import DOWN_ARROW from "./assets/arrow_down 1.svg";
const App = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <header>
        <nav>
          <div className="navbar">
            <div className="container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="logo">
                <h1>Navbar</h1>
              </div>
              <div className="menu-items">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Program</a>
                </li>
                <li>
                  <a href="#">Join</a>
                </li>
                <li>
                  <a href="#">Sponsor</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section id="home_container">
        <div id="description_container">
          <h2>"Hello! Sharing Wold"</h2>
          <h1>Anime lovers Global Summit 2024</h1>
          <p id="description">
            Welcome to the Anime lovers Global Summit 2024! This event is a
            gathering of anime enthusiasts from around the world to celebrate
            our shared love of anime. Join us for a weekend of panels,
            screenings, cosplay, and more. We can't wait to see you there!
          </p>
        </div>
        <div id="event_info_container">
          <h2 id="event_day">2024.04.19(FRI) ~ 21(SUN)</h2>
          <p>Tokyo Big Sight Tokyo, Japan</p>
        </div>
      </section>

      {/* <!-- ------------------- About Section------------------- --> */}
      <section id="main_program_container">
        <div>
          <h2>Main program</h2>
          <ul>
            <li>
              <img src={GHOST} alt="Image 1" />
              <h3>Cosplay</h3>
              <p>
                Experience the art of transformation and showcase your favorite
                anime characters through Cosplay.
              </p>
            </li>
            <li>
              <img src={SHARINGAN} alt="Image 2" />
              <h3>Anime Trailer</h3>
              <p>
                Get an exclusive sneak peek into the most anticipated anime
                releases through captivating trailers.
              </p>
            </li>
            <li>
              <img src={ANIME} alt="Image 3" />
              <h3>Forum</h3>
              <p>
                Engage in lively discussions with fellow anime lovers, sharing
                thoughts, theories, and recommendations.
              </p>
            </li>
            <li>
              <img src={CAMERA} alt="Image 4" />
              <h3>Foto Section</h3>
              <p>
                Capture unforgettable moments with your favorite anime
                characters in our dedicated photo section.
              </p>
            </li>
            <li>
              <img src={AUTOGRAPH} alt="Image 5" />
              <h3>Autographs</h3>
              <p>
                Meet and greet renowned voice actors and artists, obtaining
                personalized autographs and memories.
              </p>
            </li>
          </ul>
          <button>Join The Anime Summit 2024</button>
        </div>
      </section>

      {/* <!-- ------------------- Feature Authors------------------- --> */}
      <section id="feature_container">
        <h2>Feature Authors</h2>
        <ul className={`${showMore ? "show_all" : ""}`}>
          <li>
            <img src={GHOST} alt="" />
            <div className="authors_description_container">
              <h3>Koyoharu Gotouge</h3>
              <p>Gotouge wrote and illustrated the manga series</p>
              <p>
                Gotouge's "Demon Slayer" has become a cultural phenomenon, with
                millions of copies sold worldwide.
              </p>
            </div>
          </li>
          <li>
            <img src={GHOST} alt="" />
            <div className="authors_description_container">
              <h3>Boichi & Riichiro</h3>
              <p>
                Boichi is a South Korean illustrator and manga artist, Riichiro
                wrote Doctor Stone
              </p>
              <p>
                Boichi's art style is known for its highly detailed and
                realistic depictions, while Riichiro's writing is praised for
                its scientific accuracy and creativity.
              </p>
            </div>
          </li>
          <li>
            <img src={GHOST} alt="" />
            <div className="authors_description_container">
              <h3>Yoshiyuki Tomino</h3>
              <p>
                Tomino is known for his influential work on the "Gundam"
                franchise
              </p>
              <p>
                Tomino's "Mobile Suit Gundam" is widely regarded as a
                groundbreaking work that revolutionized the mecha genre.
              </p>
            </div>
          </li>
          <li>
            <img src={GHOST} alt="" />
            <div className="authors_description_container">
              <h3>Rumiko Takahashi</h3>
              <p>
                Takahashi is a highly successful manga artist, known for
                creating series like "Inuyasha" and "Ranma ½"
              </p>
              <p>
                Takahashi's works are known for their unique blend of humor,
                romance, and action, and have inspired countless other manga and
                anime creators.
              </p>
            </div>
          </li>
          <li>
            <img src={GHOST} alt="" />
            <div className="authors_description_container">
              <h3>Hideaki Anno</h3>
              <p>
                Anno is the creator of the critically acclaimed series "Neon
                Genesis Evangelion"
              </p>
              <p>
                Anno's "Neon Genesis Evangelion" is known for its complex
                characters, psychological themes, and innovative animation
                techniques.
              </p>
            </div>
          </li>
          <li>
            <img src={GHOST} alt="" />
            <div className="authors_description_container">
              <h3>Tsugumi Ohba</h3>
              <p>Ohba is the pen name of the author of "Death Note"</p>
              <p>
                Ohba's "Death Note" is a suspenseful and thought-provoking
                thriller that explores the nature of justice and power.
              </p>
            </div>
          </li>
        </ul>
        {!showMore && (
          <div className="show_btn_container">
            <button className="show_more_button" onClick={handleShowMore}>
              <p>MORE</p>
              <img src={DOWN_ARROW} alt="" />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default App;
