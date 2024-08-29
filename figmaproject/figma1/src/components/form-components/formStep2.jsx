import React from "react";

const FormStep2 = () => {
  return (
    <div
      className="p-2 px-3 my-1 border-top border-bottom bg-light d-flex align-items-start justify-content-between c-bShadow flex-column"
      style={{ maxWidth: `${window.innerWidth}` }}
    >
      <p className="text-start">
        Complete this step if you (1) hold more than one job at a time, or (2)
        are married filing jointly and your spouse also works. The correct
        amount of withholding depends on income earned from all of these jobs.
      </p>
      <p className="text-start">
        Do <strong>only one</strong> of the following.
      </p>
      <p className="text-start">
        <strong>(a)</strong> Use the estimator at www.irs.gov/W4App for most
        accurate withholding for this step (and Steps 3–4). If you or your
        spouse have self-employment income, use this option; <strong>or</strong>{" "}
      </p>
      <p className="text-start">
        <strong>(b)</strong> Use the Multiple Jobs Worksheet on page 3 and enter
        the result in Step 4(c) below; <strong>or</strong>
      </p>
      <p className="text-start">
        <strong>(c)</strong> If there are only two jobs total, you may check
        this box. Do the same on Form W-4 for the other job. This option is
        generally more accurate than (b) if pay at the lower paying job is more
        than half of the pay at the higher paying job. Otherwise, (b) is more
        accurate
      </p>
    </div>
  );
};

export default FormStep2;
