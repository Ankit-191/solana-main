import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import resources from "../assets/img/webp/resourcesimg.webp";

const Developer = () => {
  return (
    <>
      <section className="bg-black overflow-hidden">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <p className="ff_Helvetica fw_400 fs_94 text-white lh_96">
                Developer Resources
              </p>
              <p className="ff_Helvetica fw_400 fs_21 clr_C4C4C4 max_w_390 pb-4">
                A manual for joining the Solana ecosystem. By builders for
                builders.
              </p>
              <button className="ff_roboto fw_400 fs_15 border-0 buildbtn text-uppercase">
                Build Now
              </button>
              <button className="ff_roboto fw_400 fs_15 text-white stackbtn text-uppercase ms-2">
                Stack Exchange{" "}
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.882812 12.3185H15.6221V13.1043C15.6221 14.4507 14.5757 15.5328 13.29 15.5328H12.6114L9.51138 18.7364V15.5328H3.21496C1.92924 15.5328 0.882812 14.4507 0.882812 13.1043V12.3185ZM0.882812 11.4757H15.6221V8.43997H0.882812V11.4757ZM0.882812 7.56854H15.6221V4.53283H0.882812V7.56854ZM13.2864 0.450684H3.21496C1.92924 0.450684 0.882812 1.53283 0.882812 2.86854V3.66497H15.6221V2.86854C15.6185 1.53283 14.5721 0.450684 13.2864 0.450684Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Col>
            <Col lg={6} className="text-center text-lg-end position-relative">
              <img src={resources} alt="resources" className="w-75" />
              <div className="hero_Bg h-100 w-100 top-0 end-0 position-absolute"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Developer;
