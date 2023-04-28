import { macbook, website } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {useTranslation} from 'react-i18next';

const CardDeal = () => {

const { t } = useTranslation();
  return (
  <section className={`${layout.section} sectionCard`}>
    <div className={`${layout.sectionInfo} sectionInfoCard`}>
      <h2 className={styles.heading2}>
        {t("websitesTitle")} <br className="sm:block hidden" /> {t("websitesTitle2")}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t("websitesSubtitle")}
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} sectionSwiper`}>
      <div className="w-[300] relative z-[5]">
        <img src={macbook} alt="billing" className="w-[100%] relative z-[5] iphone imageMacbook" />
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
        className="mySwiper macbook"
      >
        <SwiperSlide className="macbookSlider">
          <img src={website} alt="billing" className="w-[100%] relative z-[5] iphone" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  </section>
  )
}

export default CardDeal;
