import React from "react";
import InputFieldWithLabel from "./labeledInput";

const PersonalInfoForm = () => {
  return (
    <>
      <div
        className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex justify-content-center align-items-start flex-column c-bShadow "
        style={{ maxWidth: `${window.innerWidth}` }}
      >
        <p className="fs-5 fw-bold">{`Section (a)`}</p>
        <div className="d-block d-lg-flex justify-content-lg-between w-75">
          <InputFieldWithLabel label={"First name and middle initia"} />
          <InputFieldWithLabel label={"Last Name"} />
        </div>
        <div className="d-block d-lg-flex justify-content-lg-between w-75">
          <InputFieldWithLabel label={"Address"} />
          <InputFieldWithLabel label={"City or town, state and ZIP code"} />
        </div>
      </div>
      <div
        className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex justify-content-center align-items-start flex-column w-100 c-bShadow "
        style={{ maxWidth: `${window.innerWidth}` }}
      >
        <p className="fs-5 fw-bold">{`Section (b)`}</p>
        <div className="d-block d-lg-flex justify-content-lg-between w-75">
          <InputFieldWithLabel label={"Social security number"} />
          <div className="d-none d-lg-flex flex-column w-100">
            <p className="fw-bold w-100 text-start">{`Does your name match the name on your social security card?`}</p>
            <p className="w-100 text-start">{`If not, to ensure you get credit for your earnings, contact SSA at 800-772-1213 or go to www.ssa.gov.`}</p>
          </div>
          <div className="d-block d-lg-none text-start">
            <span className="fw-bold w-100 text-start">{`Does your name match the name on your social security card?`}</span>
            <span className="w-100 text-start">{`If not, to ensure you get credit for your earnings, contact SSA at 800-772-1213 or go to www.ssa.gov.`}</span>
          </div>
        </div>
      </div>
      <div
        className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex justify-content-center align-items-start flex-column c-bShadow"
        style={{ maxWidth: `${window.innerWidth}` }}
      >
        <p className="fs-5 fw-bold">{`Section (c)`}</p>
        <div className="d-flex flex-column ">
          <div className="form-check text-start">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label className="form-check-label ps-2" for="exampleRadios1">
              <span>
                <strong>Single</strong> or{" "}
                <strong>Married filing separately</strong>
              </span>
            </label>
          </div>
          <div className="form-check text-start">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label ps-2" for="exampleRadios2">
              <span>
                <strong>Married filing jointly </strong> or{" "}
                <strong>Qualifying surviving spouse</strong>
              </span>
            </label>
          </div>
          <div className="form-check text-start">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
            />
            <label className="form-check-label ps-2" for="exampleRadios3">
              <span>
                <strong>Head of household</strong> (Check only if you’re
                unmarried and pay more than half the costs of keeping up a home
                for yourself and a qualifying individual.){" "}
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoForm;
