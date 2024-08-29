import React from "react";

const AdjustmentForm = () => {
  return (
    <div
      className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex justify-content-start align-items-start flex-column c-bShadow "
      style={{ maxWidth: `${window.innerWidth}` }}
    >
      <p className="text-start">
        <strong>(a) Other income (not from jobs).</strong> If you want tax
        withheld for other income you expect this year that won’t have
        withholding, enter the amount of other income here. This may include
        interest, dividends, and retirement income{" "}
      </p>
      <div className="w-100 d-flex">
        <span className="fw-bold text-center mt-1 me-3">4(a)</span>
        <div class="input-group mb-3 w-25">
          <span class="input-group-text">$</span>
          <input
            type="text"
            class="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
      </div>
      <p className="text-start">
        <strong>(b) Deductions.</strong> If you expect to claim deductions other
        than the standard deduction and want to reduce your withholding, use the
        Deductions Worksheet on page 3 and enter the result here{" "}
      </p>
      <div className="w-100 d-flex">
        <span className="fw-bold text-center mt-1 me-3">4(b)</span>
        <div class="input-group mb-3 w-25">
          <span class="input-group-text">$</span>
          <input
            type="text"
            class="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
      </div>
      <p className="text-start">
        <strong>(c) Extra withholding.</strong> . Enter any additional tax you
        want withheld each <strong> pay period</strong>{" "}
      </p>
      <div className="w-100 d-flex">
        <span className="fw-bold text-center mt-1 me-3">4(c)</span>
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

export default AdjustmentForm;
