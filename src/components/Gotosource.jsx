import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import changelog from "../assets/img/webp/changelog.webp";

const Gotosource = () => {
  return (
    <>
      <section className="bg_gotosource">
        <Container>
          <p className="ff_Helvetica fw_400 fs_36 text-white pt-5 mb-1">
            Go to the source.
          </p>
          <p className="ff_Helvetica fw_400 fs_20 clr_C4C4C4 mb-0">
            Read the documentation for Solana and popular tools.
          </p>
          <Row className="pb-5">
            <Col md={6}>
              <div className="pt-5 d-flex justify-content-between pe-md-2">
                <p className="ff_Helvetica fw_400 fs_32 text-white mb-0">
                  Solana Docs
                </p>
                <button className="ff_roboto fw_400 fs_15 text-uppercase text-white bg_none border_viewall rounded-pill">
                  View all
                  <svg
                    className="ms-2"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.08008 11L11.0801 1"
                      stroke="#848895"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.08008 1H11.0801V11"
                      stroke="#848895"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <hr className="bg_line mt-4 me-md-2" />
              <p className="ff_Helvetica fw_400 fs_20 text-white max_w_393 me-md-2">
                Learn how Solana works and get a high-level understanding of
                Solana's architecture.
              </p>
            </Col>
            <Col md={6}>
              <div className="pt-5 d-flex justify-content-between ps-md-2">
                <p className="ff_Helvetica fw_400 fs_32 text-white mb-0">
                  Solana Docs
                </p>
                <button className="ff_roboto fw_400 fs_15 text-uppercase text-white bg_none border_viewall rounded-pill">
                  View all
                  <svg
                    className="ms-2"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.08008 11L11.0801 1"
                      stroke="#848895"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.08008 1H11.0801V11"
                      stroke="#848895"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <hr className="bg_line mt-4 ms-md-2" />
              <p className="ff_Helvetica fw_400 fs_20 text-white max_w_393 ms-md-2">
                Learn how Solana works and get a high-level understanding of
                Solana's architecture.
              </p>
            </Col>
            <Col md={6} className="mt-lg-5 pt-5">
              <p className="ff_Helvetica fw_400 fs_39 text-white mb-1">
                Solana Changelog
              </p>
              <p className="ff_Helvetica fw_400 fs_20 text-white pt-4 mb-2 maxw_505">
                Some more Solana changes from Jacob & Joe. Subscribe to the
                newsletter: https://solana.us17.list-manage.com/s... Proposal -
                Priced Compute Units: ...
              </p>
              <button className="ff_roboto fw_400 fs_15 text-uppercase text-white bg_none latest_btn rounded-pill mt-5">
                Latest episode
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5176 22C18.0404 22 22.5176 17.5228 22.5176 12C22.5176 6.47715 18.0404 2 12.5176 2C6.99473 2 2.51758 6.47715 2.51758 12C2.51758 17.5228 6.99473 22 12.5176 22Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5176 16L16.5176 12L12.5176 8"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.51758 12H16.5176"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Col>
            <Col md={6} className="mt-lg-5 pt-5">
              <img src={changelog} alt="changelog" className="w_100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Gotosource;
