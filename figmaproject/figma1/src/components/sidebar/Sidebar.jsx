import React from "react";
import AULogo from "../../assets/icons/AUlogo.jpeg";
import TaxSVG from "../../assets/icons/tax.svg";
import MedalGeneric from "../../assets/icons/medalGeneric.svg";
import AnalyticsLogo from "../../assets/icons/analytics.svg";
import {
  Tools,
  UiChecksGrid,
  UiRadiosGrid,
  BriefcaseFill,
  Wallet2,
  Handbag,
} from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 bg-light">
      <a
        href="/"
        className="d-block p-3 link-dark text-decoration-none d-flex justify-content-center"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <img height={40} src={AULogo} alt="au_logo" />
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link py-1 px-1 "
            aria-current="page"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
          >
            <Tools size={25} color="#67a9e5" />
            <p className="fs-12 tColB fw-normal">Job Setup</p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-1 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
          >
            <UiChecksGrid size={25} color="#67a9e5" />
            <p className="fs-12 fw-normal tColB">Master Schedule Review</p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-1 px-1 "
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Orders"
          >
            <UiRadiosGrid size={25} color="#67a9e5" />
            <p className="fs-12 fw-normal tColB">
              Shift Assignment Review
            </p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-1 px-1 "
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Products"
          >
            <BriefcaseFill size={25} color="#67a9e5" />
            <p className="fs-12 fw-normal tColB">RFDO</p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-1 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <img height={25} src={MedalGeneric} alt="medal_doc" />
            <p className="fs-12 fw-normal tColB">OJT Admin</p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-1 px-1 "
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <img height={25} src={AnalyticsLogo} alt="medal_doc" />
            <p className="fs-12 fw-normal tColB">Hiring Pipeline</p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-1 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <Wallet2 size={25} color="#67a9e5" />
            <p className="fs-12 fw-normal tColB">Direct Deposite</p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-1 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <img height={25} src={TaxSVG} alt="tax_doc" />
            <p className="fs-12 fw-normal tColB">Tax Forms</p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-1 px-1 "
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <Handbag size={25} color="#67a9e5" />
            <p className="fs-12 fw-normal tColB">Perk Spot</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
