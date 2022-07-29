import React from "react";

export const Result = ({ text }) => {
  return (
    <div class="input-group mb-3">
      <input readOnly type="text" class="form-control" value={text} />
    </div>
  );
};
