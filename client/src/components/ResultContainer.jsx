import React from "react";
import { useSelector } from "react-redux";
import { Result } from "./Result";

export const ResultContainer = () => {
  const results = useSelector((state) => state.allText);

  return (
    <div class="container my-5">
      <div class="bg-light p-5 rounded">
        <h1 class="display-5 fw-normal">Results:</h1>

        <div className="col-sm-8 py-5 mx-auto">
          {results?.map((result, index) => (
            <Result key={index} text={result.text} />
          ))}
        </div>
      </div>
    </div>
  );
};
