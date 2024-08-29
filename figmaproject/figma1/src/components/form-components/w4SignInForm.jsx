import React from "react";

const W4SignInForm = () => {
  return (
    <div
      className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex align-items-start justify-content-between c-bShadow flex-column"
      style={{ maxWidth: `${window.innerWidth}` }}
    >
      <p className="text-start">
        Under penalties of perjury, I declare that this certificate, to the best
        of my knowledge and belief, is true, correct, and complete.
      </p>
      <p className="text-start">
        <strong>Employee’s signature </strong> e (This form is not valid unless
        you sign it.){" "}
      </p>
      <div class="input-group mb-3 w-25">
        <input
          type="text"
          class="form-control"
          placeholder="Enter"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <p><strong>Date</strong></p>
      <div class="input-group mb-3 w-25">
        <input
          type="text"
          class="form-control"
          placeholder="MM/DD/YYYY"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default W4SignInForm;
