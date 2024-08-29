import React from "react";

const CustomCards = () => {
  return (
    <>
      <div
        className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex align-items-center justify-content-between c-bShadow "
        style={{ maxWidth: `${window.innerWidth}` }}
      >
        <div className="d-flex d-lg-none">
          <span className="pe-1 mt-3">Form</span>
          <span className="pe-3 fs-2 fw-bold">{`W-4`}</span>
        </div>
        <div className=" d-flex flex-column text-start d-lg-none">
          <span className="">{`Department of the Treasury`}</span>
          <span className="">{`Internal Revenue Service`}</span>
        </div>
        <div className=" d-none d-lg-flex">
          <div>
            <span className="pe-1 mt-3">Form</span>
            <span className="pe-3 fs-2 fw-bold">{`W-4`}</span>
          </div>
          <div className=" d-flex flex-column text-start">
            <span className="">{`Department of the Treasury`}</span>
            <span className="">{`Internal Revenue Service`}</span>
          </div>
        </div>
        <div className="me-5 d-none d-lg-block">
          <span className="pe-3 fs-3 fw-bold">{`Employee’s Withholding Certificate`}</span>
        </div>
        <div className="d-none d-lg-block">
          <div className="d-flex  flex-column text-start">
            <span className="">{`OMB No. 1545-007`}</span>
            <span className="fs-3 fw-bold">{`2024`}</span>
          </div>
        </div>
      </div>
      {/* ------------- */}
      <div
        className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex align-items-center justify-content-between d-lg-none"
        style={{ maxWidth: `${window.innerWidth}` }}
      >
        <span className="">{`OMB No. 1545-007`}</span>
        <span className="fs-3 fw-bold">{`2024`}</span>
      </div>
    </>
  );
};

export default CustomCards;
