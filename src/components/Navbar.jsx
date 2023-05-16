import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/png/solanalogo.png";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";

const Navbar = () => {
  const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="bg_020102">
        <Container>
          <div className="d-flex justify-content-between align-items-center py-3">
            <img src={logo} alt="logo" className="crsorlogo" />
            <div onClick={showUl} className="z_30">
              <h3 className="d-block d-md-none ">
                <FcMenu />
              </h3>
            </div>
            <div
              className={`d-flex align-items-center phone ${
                first ? "" : "justify-content-center naV_0"
              }`}
            >
              <ul className="d-flex gap-5 flex-column flex-md-row">
                <li className="nav_item">
                  <a href="#" className="ff_Helvetica fw_400 fs_17 clr_848895">
                    Learn
                    <svg
                      className="ms-1"
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </a>
                  <ul className=" position-absolute ms-0 p-0 d-none">
                    <li>
                      <a
                        href=""
                        className="ff_Helvetica fw_400 fs_17 clr_848895"
                      >
                        Menu Item
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_Helvetica fw_400 fs_17 clr_848895"
                      >
                        Menu Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav_item">
                  <a href="#" className="ff_Helvetica fw_400 fs_17 clr_848895">
                    Build
                    <svg
                      className="ms-1"
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </a>
                  <ul className=" position-absolute ms-0 p-0 d-none">
                    <li>
                      <a
                        href=""
                        className="ff_Helvetica fw_400 fs_17 clr_848895"
                      >
                        Menu Item
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_Helvetica fw_400 fs_17 clr_848895"
                      >
                        Menu Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav_item">
                  <a href="#" className="ff_Helvetica fw_400 fs_17 clr_848895">
                    Network
                    <svg
                      className="ms-1"
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </a>
                  <ul className=" position-absolute ms-0 p-0 d-none">
                    <li>
                      <a
                        href=""
                        className="ff_Helvetica fw_400 fs_17 clr_848895"
                      >
                        Menu Item
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_Helvetica fw_400 fs_17 clr_848895"
                      >
                        Menu Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav_item">
                  <a href="#" className="ff_Helvetica fw_400 fs_17 clr_848895">
                    Community
                    <svg
                      className="ms-1"
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2931 1.29308C12.3853 1.19757 12.4957 1.12139 12.6177 1.06898C12.7397 1.01657 12.8709 0.988985 13.0037 0.987831C13.1365 0.986677 13.2681 1.01198 13.391 1.06226C13.5139 1.11254 13.6256 1.18679 13.7195 1.28069C13.8134 1.37458 13.8876 1.48623 13.9379 1.60913C13.9882 1.73202 14.0135 1.8637 14.0123 1.99648C14.0112 2.12926 13.9836 2.26048 13.9312 2.38249C13.8788 2.50449 13.8026 2.61483 13.7071 2.70708L7.70707 8.70708C7.52484 8.88934 7.27927 8.99421 7.0216 8.99979C6.76392 9.00538 6.51404 8.91127 6.32407 8.73708L0.324072 3.23708C0.128608 3.0578 0.0123704 2.8082 0.000930667 2.54321C-0.00473371 2.41201 0.0155007 2.28097 0.060479 2.15758C0.105457 2.03419 0.174299 1.92087 0.263072 1.82408C0.351846 1.7273 0.458813 1.64895 0.577867 1.5935C0.696921 1.53806 0.825729 1.5066 0.956939 1.50094C1.22193 1.4895 1.48061 1.58379 1.67607 1.76308L6.97007 6.61608L12.2931 1.29308Z"
                        fill="#848895"
                      />
                    </svg>
                  </a>
                  <ul className=" position-absolute ms-0 p-0 d-none">
                    <li>
                      <a
                        href=""
                        className="ff_Helvetica fw_400 fs_17 clr_848895"
                      >
                        Menu Item
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_Helvetica fw_400 fs_17 clr_848895"
                      >
                        Menu Item
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
