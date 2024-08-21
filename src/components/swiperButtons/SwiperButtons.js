import { useSwiper } from "swiper/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./SwiperButtons.css";
function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <div className="swiperBtns">
      <button onClick={() => swiper.slidePrev()}>
        <GrFormNext size={25} />
      </button>

      <button onClick={() => swiper.slideNext()}>
        <GrFormPrevious size={25} />
      </button>
    </div>
  );
}

export default SwiperButtons;
