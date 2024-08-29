import React from "react";
import AdditionalDocs from "../form-components/additionalDocs";
import AdjustmentForm from "../form-components/adjustmentForm";
import ClaimDependentForm from "../form-components/claimDependentForm";
import CustomCards from "../form-components/customCards";
import CustomFormHeading from "../form-components/customFormHeading";
import DescriptionSection from "../form-components/descriptionSection";
import FormStep2 from "../form-components/formStep2";
import PersonalInfoForm from "../form-components/personalInfoForm";
import UnOrderedList from "../form-components/unOrderedList";
import W4SignInForm from "../form-components/w4SignInForm";

export default function FormLayout() {
    return (
        <>
            <CustomCards />
            <UnOrderedList />
            <CustomFormHeading>
                <p className="fw-bold fs-4">{`Step 1:Enter Personal Information`}</p>
            </CustomFormHeading>
            <PersonalInfoForm />
            <DescriptionSection>
                <span>
                    <strong>{`Complete Steps 2–4 ONLY if they apply to you; otherwise, skip to Step 5.`}</strong> See page 2 for more information on each step, who can claim exemption from withholding, and when to use the estimator at <a className="text-decoration-none" href="www.irs.gov/W4App.">www.irs.gov/W4App.</a>)
                </span>
            </DescriptionSection>
            <CustomFormHeading>
                <p className="fw-bold fs-4">{`Step 2:Multiple Jobs or Spouse Works`}</p>
            </CustomFormHeading>
            <FormStep2 />
            <DescriptionSection>
                <span>
                    <strong>Complete Steps 3–4(b) on Form W-4 for only ONE of these jobs.</strong> Leave those steps blank for the other jobs. (Your withholding will
                    be most accurate if you complete Steps 3–4(b) on the Form W-4 for the highest paying job.)
                </span>
            </DescriptionSection>
            <CustomFormHeading>
                <p className="fw-bold fs-4">Step 3:Claim Dependent and Other Credits </p>
            </CustomFormHeading>
            <ClaimDependentForm />
            <CustomFormHeading>
                <p className="fw-bold fs-4">Step 4(optional):Other Adjustments </p>
            </CustomFormHeading>
            <AdjustmentForm />
            <CustomFormHeading>
                <p className="fw-bold fs-4">Step 5:Sign Here </p>
            </CustomFormHeading>
            <W4SignInForm />
            <DescriptionSection>
                <p>
                    <strong>For Privacy Act and Paperwork Reduction Act Notice, see page 3.</strong> Leave those steps blank for the other jobs. (Your withholding will
                    be most accurate if you complete Steps 3–4(b) on the Form W-4 for the highest paying job.)
                </p>
                <p>
                    Cat. No. 10220Q
                </p>
                <p>
                    Form <strong>W-4</strong> (2024)
                </p>
            </DescriptionSection>
            <AdditionalDocs />
        </>
    )
}