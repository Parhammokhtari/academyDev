import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FaEnvelope, FaHome, FaInstagram, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          fillOpacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,96C672,75,768,117,864,144C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer>
        <Container>
          <section>
            <Row>
              <Col md={3} lg={3} xl={3} className="mx-auto mb-4">
                <h5 className="text-uppercase font-weight-bold">
                  نام: Learning dev
                </h5>
                <p style={{ textAlign: "justify" }}>
                  چارچوب‌های توسعه وب مدرن مانند React و Next.js به
                  توسعه‌دهندگان امکان می‌دهند تا وب‌سایت‌های سریع، تعاملی و
                  مقیاس‌پذیری ایجاد کنند که تجربه کاربری یکپارچه‌ای را در
                  دستگاه‌ها و پلتفرم‌های مختلف ارائه می‌دهند.
                </p>
              </Col>
              <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
                <h5 className="text-uppercase font-weight-bold">محصولات</h5>
                <p>
                  <a className="linkTitle" href="#">
                    دوره ی React
                  </a>
                </p>
                <p>
                  <a className="linkTitle" href="#">
                    دوره ی Next.js
                  </a>
                </p>
                <p>
                  <a className="linkTitle" href="#">
                    دوره ی Responsive
                  </a>
                </p>
                <p>
                  <a className="linkTitle" href="#">
                    دوره ی Bootstrap
                  </a>
                </p>
              </Col>
              <Col md={3} lg={3} xl={3} className="mx-auto mb-4">
                <h5 className="text-uppercase font-weight-bold">ارتباطات</h5>
                <p>
                  <FaHome className="mr-2" /> ایران، تهران، بلوار مرزداران
                </p>
                <p>
                  <FaEnvelope className="mr-2" /> info@gmail.com
                </p>
                <p>
                  <FaPhone className="mr-2" /> 09901234568
                </p>
                <p>
                  <FaInstagram className="mr-2" />
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
