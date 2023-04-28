import styles from "../style";
import Button from "./Button";
import {useTranslation} from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();
  return (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow contactForm`}>
    <form className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} texto`}>{t("contactoForm")}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t("nombre")}
      </p>
      <input type="text" className="w-full h-[50px] rounded-[10px] bg-dimWhite mt-2 px-4" />
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      {t("email")}
      </p>
      <input type="text" className="w-full h-[50px] rounded-[10px] bg-dimWhite mt-2 px-4" />

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      {t("mensaje")}
      </p>
      <textarea className="w-full h-[150px] rounded-[10px] bg-dimWhite mt-2 px-4" />

      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles} mt-6`}>
      {t("enviar")}
      </button>
    </form>
  </section>
  )
}

export default CTA;
