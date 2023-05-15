import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Digdipper = () => {
  const digdipper = [
    {
      id: 1,
      heading: "Core Documentation",
      para: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
    },
    {
      id: 2,
      heading: "Solana Cookbook",
      para: "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
    },
    {
      id: 3,
      heading: "Solana Stack Exchange",
      para: "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
    },
    {
      id: 4,
      heading: "Solana Playground",
      para: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
    },
    {
      id: 5,
      heading: "Anchor Docs",
      para: "Get up and running fast with Solana dApps, generate a project template in seconds.",
    },
    {
      id: 6,
      heading: "Anchor Docs",
      para: "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
    },
    {
      id: 7,
      heading: "Solana Program Library",
      para: "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
    },
    {
      id: 8,
      heading: "Program Examples",
      para: "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
    },
  ];
  return (
    <>
      <section className="bg-black py-lg-5">
        <Container className="py-lg-5">
          <p className="ff_Helvetica fw_400 fs_38 text-white mb-1 pt-5">
            Dig deeper.
          </p>
          <p className="ff_Helvetica fw_400 fs_20 clr_C4C4C4 pb-2">
            Learn from resources across the greater Solana ecosystem.
          </p>
          <Row>
            {digdipper.map((box) => {
              return (
                <Col lg={4} md={6} key={box.id}>
                  <div className="bg_19161C h_282 br_12 d-flex flex-column justify-content-between p-4 mb-4 overflow-hidden boxhover position-relative">
                    <div className="p-2">
                      <p className="ff_Helvetica fw_400 fs_12 clr_9945FF text-uppercase">
                        tool / library
                      </p>
                      <p className="ff_Helvetica fw_400 fs_19 text-white">
                        {box.heading}{" "}
                      </p>
                      <p className="ff_Helvetica fw_400 fs_16 text-white">
                        {box.para}
                      </p>
                    </div>
                    <div className="ms-2 mb-2 ">
                      <button className="border-0 bg_none ff_Helvetica fw_400 fs_11 text-white ">
                        Learn more
                        <svg
                          className="ms-2"
                          width="9"
                          height="9"
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
                      <div className="bg_shadow m-auto w-75"></div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Digdipper;
