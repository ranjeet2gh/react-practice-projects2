import React from "react";

const AdditionalDocs = () => {
  return (
    <>
      <div
        className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex align-items-start justify-content-between c-bShadow"
        style={{ maxWidth: `${window.innerWidth}` }}
      >
        <div className="w-lg-25 d-flex flex-column align-items-lg-start justify-content-center">
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio
            perferendis. Nobis voluptates, atque necessitatibus aut delectus
            porro quia.
          </p>
          <button type="button" class="btn btn-light p-2 px-3 border">
            <span className="rounded" style={{ color: "#67a9e5" }}>
              W-4 Additional Pages (2-4)
            </span>
          </button>
        </div>
        <div className="w-25 d-lg-flex flex-column align-items-end justify-content-around h-100 d-none">
          <br />
          <br />
          <br />
          <div className="mt-3 d-flex justify-content-around w-100">
            <button type="button" class="btn btn-light border p-2 px-3">
              <span className="rounded" style={{ color: "grey" }}>
                Cancel
              </span>
            </button>
            <button type="button" class="btn btn-secondary p-2 px-3">
              <span className=" rounded" style={{ color: "" }}>
                Update W-4
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex d-lg-none align-items-start justify-content-between c-bShadow w-100"
        style={{ maxWidth: `${window.innerWidth}` }}
      >
        <button type="button" class="btn btn-light border p-2 px-3 me-3">
          <span className="rounded" style={{ color: "grey" }}>
            Cancel
          </span>
        </button>
        <button type="button" class="btn btn-secondary p-2 px-3">
          <span className=" rounded" style={{ color: "" }}>
            Update W-4
          </span>
        </button>
      </div>
    </>
  );
};

export default AdditionalDocs;
