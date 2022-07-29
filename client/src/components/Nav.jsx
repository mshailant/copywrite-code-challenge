import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendText } from "../redux/action";

export const Nav = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      dispatch(sendText(input));
      setInput("");
      e.target.reset();
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-center">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control col-5 me-3"
              type="search"
              placeholder="Input Text"
              aria-label="Search"
              onChange={handleChange}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
