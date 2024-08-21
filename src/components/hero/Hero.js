import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../../assets/images/hero.svg";
import "./Hero.css";
import HeroBox from "../heroBox/HeroBox";
import { ImBooks } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaUserAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { BsFillSkipStartFill } from "react-icons/bs";
import { useEffect } from "react";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row className="algin-items-center ">
            <Col
              className="col-12 col-md-6 py-4 "
              style={{ padding: "20px" }}
              data-aos="fade-left"
            >
              <img
                src={heroImage}
                className="heroImag img-fluid"
                alt="heroImage"
              />
            </Col>
            <Col data-aos="fade-right" className="col-12 col-md-6 py-4">
              <h2 className="heroTitle">آمار ها باعث افتخار ما هستند</h2>
              <Container>
                <Row className="justify-content-center row-cols-1 row-cols-xl-2 gy-4 ">
                  <Col>
                    <HeroBox title="تعداد دانشجو" count={3500}>
                      <FaUserAlt size="40px" />
                    </HeroBox>
                  </Col>
                  <Col>
                    <HeroBox title="تعداد مقاله" count={690}>
                      <MdArticle size="40px" />
                    </HeroBox>
                  </Col>
                  <Col>
                    <HeroBox title="تعداد دوره" count={19}>
                      <ImBooks size="40px" />
                    </HeroBox>
                  </Col>
                  <Col>
                    <HeroBox title="پروژه موفق" count={15}>
                      <FaCode size="40px" />
                    </HeroBox>
                  </Col>
                </Row>
                <p className="startLearning">
                  <b>شروع آموزش</b>
                  <BsFillSkipStartFill size={"40px"} />
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          d="M0 192l48 16c48 16 144 48 240 48s192-32 288-58.7c96-26.3 192-48.3 288-42.6 96 5.3 192 37.3 288 16 96-21.7 192-95.7 240-133.4L1440 0H0z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
