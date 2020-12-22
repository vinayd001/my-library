import React, { useState } from "react";
import "./styles.css";
import logo from "./Images/my-lib-symbol.svg";

export default function App() {
  const books = {
    Chess: [
      "Chess 101 by Dave Schloss",
      "Discovering Chess Openings: Building Opening Skills from Basic Principles",
      "Capablanca's Best Chess Endings",
      "1001 Winning Chess Sacrifices and Combinations"
    ],
    Movies: ["Live Free or Die Hard", "Fast Five", "The Notebook"],
    Finance: [
      "Rich Dad Poor Dad",
      "The Intelligent Investor",
      "Think and Grow Rich"
    ]
  };

  const genres = Object.keys(books);

  const [data, setData] = useState(Object.values(books.Chess));

  const [genreName, setGenreName] = useState("Chess");

  function show(genre) {
    setGenreName(genre);
    setData(Object.values(books[genre]));
  }

  return (
    <div className="App">
      <img className="logo" src={logo} alt="library-symbol" />
      <h1 className="heading">My Library</h1>
      <nav>
        {genres.map((genre) => {
          return (
            <span
              id="genre"
              key={genre}
              onClick={() => show(genre)}
              style={{
                cursor: "pointer",
                color: "green",
                fontSize: "1.5rem",
                padding: "0.5rem"
              }}
            >
              {genre}
            </span>
          );
        })}
      </nav>
      <div className="list-items">
        <div className="genre-name">{genreName}</div>
        <ul className="items">
          {data.map((item) => {
            return (
              <li className="item" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
