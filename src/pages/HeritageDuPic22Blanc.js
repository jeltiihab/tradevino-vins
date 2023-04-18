import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeritageDuPic22Blanc.module.css";

const HeritageDuPic22Blanc = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/thon-micuit");
  }, [navigate]);

  return (
    <div className={styles.heritageDuPic22Blanc}>
      <div className={styles.heritageDuPic22BlancChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.uneAttaqueAvec}>
        Une attaque avec du gras, un final frais marqué par un zeste d'agrumes
      </i>
      <i className={styles.c}>13°C</i>
      <i className={styles.languedoc}>Languedoc</i>
      <img
        className={styles.heritageDuPic22BlancItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.hritageDuPic2022Container}>
        <span className={styles.hritageDuPic2022Container1}>
          <p className={styles.hritageDuPic2022}>héritage du pic|2022</p>
          <p className={styles.cuveSaintAgns}>Cuvée saint agnès blanc</p>
        </span>
      </div>
      <button
        className={styles.heritageDuPic22BlancInner}
        onClick={onRectangleButtonClick}
      />
      <div className={styles.rectangleDiv} onClick={onRectangle1Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
      <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
      <div className={styles.heritageDuPic22BlancChild1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default HeritageDuPic22Blanc;
