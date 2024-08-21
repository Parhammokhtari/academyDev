import { FaUsers } from "react-icons/fa";
import "./CourseItem.css";
import { GiTeacher } from "react-icons/gi";
import { BiDollar } from "react-icons/bi";
import { useState } from "react";
import Swal from "sweetalert2";
function CourseItem({
  id,
  image,
  title,
  description,
  teacher,
  studentCount,
  mainPrice,
  discountPrice,
  category,
  duration,
  state,
  progressPercent,
}) {
  const showAlertHndler = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "در حال حاضر ثبت نام این دوره بسته شده است",
    });
  };

  return (
    <div className="courseCardWrapper">
      <div className="courseCardImage">
        <img alt="coursePicture" className="courseImage" src={image} />
        <p>
          <FaUsers size="20px" />
          <span>{studentCount}</span>
        </p>
      </div>
      <div className="courseCardContent">
        <h5 className="courseName"> {title} </h5>
        <p className="courseDescription">{description}</p>
      </div>
      <div className="courseCardTeacher">
        <p>
          <GiTeacher size="25px" />
          مدرس : {teacher}
        </p>
      </div>
      <div className="courseCardFooter">
        <p>
          <button onClick={showAlertHndler} className="">
            <b>ثبت نام دوره</b>
          </button>
        </p>
        <p>
          <BiDollar size="25px" />
          <b>{mainPrice}</b>
        </p>
      </div>
    </div>
  );
}
export default CourseItem;
