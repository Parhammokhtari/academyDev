import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import person from "../../assets/images/person.png";
import SwiperButtons from "../../components/swiperButtons/SwiperButtons";
import Hero from "../../components/hero/Hero";
import "swiper/css";
import "./Home.css";
import "swiper/css/effect-cards";
import CourseItem from "../../components/course/CourseItem";
function Home() {
  const [articles, setArticles] = useState();
  const [courses, setCourses] = useState();
  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=6")
      .then((response) => setArticles(response.data.data));

    axios
      .get("http://localhost/react/api/courses/?page=1&limit=6")
      .then((response) => setCourses(response.data.data));
  }, []);
  return (
    <>
      <MyNavbar />
      <Hero />
      <Container>
        <Row className="py-3">
          <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay]}
          >
            <div className="swiperTopSection">
              <h1 className="swiperTitle">جدید ترین دوره ها</h1>
              <SwiperButtons />
            </div>
            {courses?.map((course) => {
              return (
                <SwiperSlide>
                  <CourseItem key={course?.id} {...course} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
        <Row className="py-3">
          <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay]}
          >
            <div className="swiperTopSection">
              <h1 className="swiperTitle">جدید ترین مقالات</h1>
              <SwiperButtons />
            </div>
            {articles?.map((article) => {
              return (
                <SwiperSlide>
                  <ArticleItem key={article?.id} {...article} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
        <Row className="py-3 d-flex flex-column   flex-md-row  justify-content-between align-items-center  ">
          <Col className="mb-md-5">
            <h1 className="swiperTitle "> نظرات دانشجویان</h1>
            <div className="imageComment">
              <img src={person} alt="personPicture" />
            </div>
          </Col>
          <Col>
            <Swiper
              effect={"cards"}
              grabCursor={false}
              className="customSwiperStyleComment"
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={1}
            >
              <div className="buttonContainer">
                <SwiperButtons />
              </div>

              {articles?.map((article) => {
                return (
                  <SwiperSlide key={articles?.id}>
                    <p className="comment">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
