import React from "react";

const ClaimDependentForm = () => {
  return (
    <div
      className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex justify-content-start align-items-start flex-column c-bShadow "
      style={{ maxWidth: `${window.innerWidth}` }}
    >
      <p>
        If your total income will be $200,000 or less ($400,000 or less if
        married filing jointly):{" "}
      </p>
      <p>Multiply the number of qualifying children under age 17 by $2,000</p>
      <div class="input-group mb-3 w-25">
        <span class="input-group-text">$</span>
        <input
          type="text"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>
      <p>Multiply the number of other dependents by $500</p>
      <div class="input-group mb-3 w-25">
        <span class="input-group-text">$</span>
        <input
          type="text"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>
      <p>
        Add the amounts above for qualifying children and other dependents. You
        may add to this the amount of any other credits. Enter the total here
      </p>
      <div className="w-100 d-flex">
        <span className="fw-bold text-center mt-1 me-3">3</span>
        <div class="input-group mb-3 w-25">
          <span class="input-group-text">$</span>
          <input
            type="text"
            class="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimDependentForm;
