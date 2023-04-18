import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DomaineCombelLaSerre22.module.css";

const DomaineCombelLaSerre22 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/petitsal");
  }, [navigate]);

  return (
    <div className={styles.domaineCombelLaSerre22}>
      <div className={styles.domaineCombelLaSerre22Child} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.alerteAuxFruitsContainer}>
        <p className={styles.alerteAuxFruits}>
          Alerte aux fruits ! Une cerise noire en totem c’est un vin riche et
          peu tannique. Un Cahors pour tous
        </p>
        <p className={styles.alerteAuxFruits}>&nbsp;</p>
        <p className={styles.blankLine1}>&nbsp;</p>
      </i>
      <i className={styles.c}>12,5 °C</i>
      <i className={styles.cahors}>Cahors</i>
      <img
        className={styles.domaineCombelLaSerre22Item}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.domaineCombelLaContainer}>
        <span className={styles.domaineCombelLaContainer1}>
          <p className={styles.alerteAuxFruits}>Domaine combel la serre|2022</p>
          <p className={styles.cuveCarbo}>Cuvée carbo</p>
        </span>
      </div>
      <div
        className={styles.domaineCombelLaSerre22Inner}
        onClick={onRectangle1Click}
      />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
      <img className={styles.image35Icon} alt="" src="/image-353@2x.png" />
      <div className={styles.domaineCombelLaSerre22Child1} />
      <div className={styles.biologique}>Biologique</div>
    </div>
  );
};

export default DomaineCombelLaSerre22;
