import { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./AddArticle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";
function AddArticle() {
  const [formData, setFormData] = useState({});
  //   useEffect(() => {
  //     console.log({ formData });
  //   }, formData);
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const resetFormData = () => {
    setFormData({
      title: "",
      image: "",
      description: "",
      writter: "",
      readingTime: "",
      category: "",
    });
  };
  const addArticleHandler = () => {
    axios
      .post("http://localhost/react/api/articles/", formData)
      .then((res) =>
        Swal.fire({
          title: "مقاله با موفقیت ساخته شد",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
        })
      )
      .catch((error) =>
        Swal.fire({
          title: "مقاله با موفقیت ساخته نشد",
          icon: "error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
        })
      );

    resetFormData();
  };
  return (
    <>
      <MyNavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formData?.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={formData?.description}
              name="description"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData?.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData?.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData?.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={formData?.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder=" "
            />
          </Form.Group>

          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
