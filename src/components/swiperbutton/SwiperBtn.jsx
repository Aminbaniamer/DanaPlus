import { useSwiper } from "swiper/react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

function SwiperBtn() {
  const swiper = useSwiper();
  return (
    <div className="buttonContainer">
      <button onClick={() => swiper.slidePrev()} className="btn mx-1">
        <FaCircleChevronRight size={30} />
      </button>
      <button onClick={() => swiper.slideNext()} className="btn mx-1">
        <FaCircleChevronLeft size={30} />
      </button>
    </div>
  );
}
export default SwiperBtn;
