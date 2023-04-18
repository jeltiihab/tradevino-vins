import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DomaineGarreliere21.module.css";

const DomaineGarreliere21 = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/crottin-de-chvre");
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.domaineGarreliere21}>
      <div className={styles.domaineGarreliere21Child} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.c}>13 °C</i>
      <img
        className={styles.domaineGarreliere21Item}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.domaineGarreliere21Inner} />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <i className={styles.tourraine}>Tourraine</i>
      <i className={styles.deLaGourmandiseContainer}>
        <p className={styles.deLaGourmandise}>
          De la gourmandise, de la vivacité, des arômes floraux et fruits
          exotiques
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </i>
      <div className={styles.domaineDeLaContainer}>
        <span className={styles.domaineDeLaContainer1}>
          <p className={styles.deLaGourmandise}>
            Domaine de la garreliere |2021
          </p>
          <p className={styles.cuveBlancDe}>Cuvée Blanc de la mariée</p>
        </span>
      </div>
      <img className={styles.image35Icon} alt="" src="/image-351@2x.png" />
      <div className={styles.domaineGarreliere21Child1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default DomaineGarreliere21;
