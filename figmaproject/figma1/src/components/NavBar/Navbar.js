import React from 'react'
import AULogo from "../../assets/icons/AUlogo.jpeg"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img className='d-block d-lg-none' height={40} src={AULogo} alt="au_logo" />
                <a className="navbar-brand fs-2 fw-notmal" href="#" style={{ color: "#67a9e5" }}>Tax Form</a>
                <span className="badge rounded-circle p-2 fs-4 fw-normal" style={{ backgroundColor: "#67a9e5" }}>RS</span>
            </div>
        </nav>
    )
}
