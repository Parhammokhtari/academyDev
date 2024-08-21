import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import MyNavbar from "../../components/navbar/MyNavbar";
import { FaEnvelope, FaPhone, FaTelegram } from "react-icons/fa";

function About() {
  return (
    <>
      <MyNavbar />
      <Container className="mt-5" dir="rtl">
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Header as="h2" className="text-center">
                درباره ما
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  به آکادمی فرانت‌اند خوش آمدید، منبعی برای یادگیری توسعه
                  فرانت‌اند با استفاده از ری‌اکت و ری‌اکت-بوت‌استرپ. چه مبتدی
                  باشید که به دنبال شروع یادگیری توسعه وب هستید یا یک
                  توسعه‌دهنده با تجربه که می‌خواهید دانش خود را عمیق‌تر کنید، ما
                  اینجا هستیم تا به شما کمک کنیم.
                </Card.Text>

                <Card.Text>
                  ماموریت ما توانمندسازی توسعه‌دهندگان با مهارت‌ها و دانش لازم
                  برای ایجاد اپلیکیشن‌های وب مدرن، واکنش‌گرا و کاربرپسند است. از
                  طریق آموزش‌های جامع، پروژه‌های عملی و مثال‌های کاربردی، هدف ما
                  این است که یادگیری توسعه فرانت‌اند را برای شما آسان و لذت‌بخش
                  کنیم.
                </Card.Text>

                <Card.Text>
                  در آکادمی فرانت‌اند، تمرکز ما بر آموزش شما برای استفاده موثر
                  از ری‌اکت و ری‌اکت-بوت‌استرپ برای ساخت رابط‌های کاربری زیبا و
                  کاربردی است. ما به یادگیری از طریق انجام پروژه‌ها معتقدیم،
                  بنابراین شما با محتوای تعاملی و پروژه‌های واقعی مهارت‌های خود
                  را ارتقا خواهید داد.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Header as="h3" className="text-center">
                ارتباط با ما
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <FaPhone /> شماره تماس: ۱۲۳۴۵۶۷۸۹
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FaEnvelope /> ایمیل: info@frontendacademy.ir
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FaTelegram /> تلگرام: @frontendacademy
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Header as="h3" className="text-center">
                نمونه کارها
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  در این بخش می‌توانید تعدادی از پروژه‌های انجام‌شده توسط ما را
                  مشاهده کنید:
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    پروژه ۱: طراحی وب‌سایت شرکتی با ری‌اکت
                  </ListGroup.Item>
                  <ListGroup.Item>
                    پروژه ۲: توسعه اپلیکیشن مدیریت وظایف
                  </ListGroup.Item>
                  <ListGroup.Item>
                    پروژه ۳: طراحی رابط کاربری برای یک فروشگاه آنلاین
                  </ListGroup.Item>
                </ListGroup>
                <Button href="/">مشاهده همه پروژه‌ها</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
