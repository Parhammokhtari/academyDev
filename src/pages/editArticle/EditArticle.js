import { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./EditArticle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
function EditArticle() {
  const [formData, setFormData] = useState({});
  const articleId = useParams().articleId;
  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((respone) => {
        setFormData(respone.data.data[0]);
      });
  }, formData);
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //   const resetFormData = () => {
  //     setFormData({
  //       title: "",
  //       image: "",
  //       description: "",
  //       writter: "",
  //       readingTime: "",
  //       category: "",
  //     });
  //   };
  const EditArticleHandler = (id) => {
    axios
      .put(`http://localhost/react/api/articles/?id=${id}`, formData)
      .then((res) =>
        Swal.fire({
          title: "مقاله با موفقیت ویرایش شد",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
        })
      )
      .catch((error) =>
        Swal.fire({
          title: "مقاله با موفقیت ویرایش نشد",
          icon: "error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
        })
      );

    // resetFormData();
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

          <Button
            onClick={() => EditArticleHandler(articleId)}
            variant="primary"
            type="button"
          >
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
