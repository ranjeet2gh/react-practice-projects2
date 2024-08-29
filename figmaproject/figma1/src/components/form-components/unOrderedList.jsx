import React from "react";

const UnOrderedList = () => {
  return (
    <div
      className="p-2 px-3 my-1 border-top border-bottom bg-light c-bShadow "
      style={{ maxWidth: `${window.innerWidth}` }}
    >
      <p className="d-block d-lg-none fs-3 fw-bold pt-2">{`Employee’s Withholding Certificate`}</p>
      <ul className="text-start fw-bold ">
        <li className="py-1">
          Complete Form W-4 so that your employer can withhold the correct
          federal income tax from your pay.
        </li>
        <li className="py-1">Give Form W-4 to your employer.</li>
        <li className="py-1">
          Your withholding is subject to review by the IRS.
        </li>
      </ul>
    </div>
  );
};

export default UnOrderedList;
