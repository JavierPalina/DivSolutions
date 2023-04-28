import { apple, iphone, google, website, mobiless } from "../assets";
import styles, { layout } from "../style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {useTranslation} from 'react-i18next';

const Billing = () => {
const { t } = useTranslation();
  return (
  <section id="Aplicaciones" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="w-[300] relative z-[5] iphoneContainer">
        <img src={iphone} alt="billing" className="w-[100%] h-[100%] relative z-[5] iphone" />
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mobiless} alt="billing" className="w-[100%] h-[100%] relative z-[5] iphone" />
        </SwiperSlide>
      </Swiper>
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {t("aplicacionesTitle")} <br className="sm:block hidden" /> {t("aplicacionesTitle2")}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t("aplicacionesSubtitle")}
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
  )
}

export default Billing;
