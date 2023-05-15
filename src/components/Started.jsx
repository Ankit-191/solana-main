import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import buildspace from "../assets/img/webp/buildspace.webp";
import solanabytes from "../assets/img/webp/solanabytes.webp";
import scaffoldseries from "../assets/img/webp/scaffoldseries.webp";
import freecodecamp from "../assets/img/webp/freecodecamp.webp";
import development from "../assets/img/webp/solana-development.webp";
import solanabootcamp from "../assets/img/webp/solanabootcamp.webp";

const Started = () => {
  const myData = [
    {
      id: 1,
      bgimg: buildspace,
      chapter: "14 chapter ",
      heading: "Bitcoin",
    },
    {
      id: 2,
      bgimg: solanabytes,
      chapter: "12 chapter ",
      heading: "Solana Bytes",
    },
    {
      id: 3,
      bgimg: scaffoldseries,
      chapter: " 1 chapter",
      heading: "Scaffold Series",
    },
    {
      id: 4,
      bgimg: freecodecamp,
      chapter: " 1 chapter",
      heading: "Freecodecamp Solana Course",
    },
    {
      id: 5,
      bgimg: development,
      chapter: " 3 chapter",
      heading: "Solana Development by Knox",
    },
    {
      id: 6,
      bgimg: solanabootcamp,
      chapter: " 8 chapter",
      heading: "Solana Bootcamp",
    },
  ];
  return (
    <>
      <section className="bg-black">
        <Container>
          <p className="ff_Helvetica fw_400 fs_38 text-white mb-1">
            Get started.
          </p>
          <p className="ff_Helvetica fw_400 fs_20 clr_C4C4C4 pb-2">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
          <div className="bg_imgdeveloment my-4 br_20">
            <p className="ff_Helvetica fw_400 fs_11 text-white chapters d-inline">
              17 Chapters
            </p>
            <p className="ff_Helvetica fw_400 fs_39 text-white">
              Solana Development Course
            </p>
            <p className="ff_Helvetica fw_400 fs_18 text-white max_w_390">
              Quickstart your Solana development starting from nothing to
              complex programs.
            </p>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0801 25.5C19.9836 25.5 25.5801 19.9036 25.5801 13C25.5801 6.09644 19.9836 0.5 13.0801 0.5C6.17652 0.5 0.580078 6.09644 0.580078 13C0.580078 19.9036 6.17652 25.5 13.0801 25.5Z"
                stroke="#848895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0801 18L18.0801 13L13.0801 8"
                stroke="#848895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.08008 13H18.0801"
                stroke="#848895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <Row>
            {myData.map((val) => {
              return (
                <Col lg={4} md={6} key={val.id}>
                  <div
                    className="p-4 mb-4 br_20  d-flex flex-column justify-content-end"
                    style={{
                      backgroundImage: `url(${val.bgimg})`,
                      backgroundSize: "cover",
                      height: "320px",
                    }}
                  >
                    <p className="ff_Helvetica fw_400 fs_11 text-white chapters w_91 text-center mb-2">
                      {val.chapter}
                    </p>
                    <div className="d-flex justify-content-between align-items-end mb-2">
                      <p className="ff_Helvetica fw_400 fs_18 text-white max_w_182 mb-0">
                        {val.heading}
                      </p>
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0801 25.5C19.9836 25.5 25.5801 19.9036 25.5801 13C25.5801 6.09644 19.9836 0.5 13.0801 0.5C6.17652 0.5 0.580078 6.09644 0.580078 13C0.580078 19.9036 6.17652 25.5 13.0801 25.5Z"
                          stroke="#848895"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.0801 18L18.0801 13L13.0801 8"
                          stroke="#848895"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.08008 13H18.0801"
                          stroke="#848895"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
}

export default Started