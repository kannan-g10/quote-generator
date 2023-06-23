import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const API_URL = "http://api.quotable.io/random";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  const newQuote = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };
  return (
    <div className="App">
      <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}</small>
      </div>
      <br />
      <button className="btn" onClick={newQuote}>
        Generate New Quote
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
