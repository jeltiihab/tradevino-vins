import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DomaineVincentFleith1.module.css";

const DomaineVincentFleith1 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/crottin-de-chvre");
  }, [navigate]);

  return (
    <div className={styles.domaineVincentFleith}>
      <div className={styles.domaineVincentFleithChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.trsGrandeFracheurContainer}>
        <p className={styles.trsGrandeFracheur}>
          Très grande fraîcheur, de belles touches d’agrumes avec de la longueur
          en bouche
        </p>
      </i>
      <i className={styles.c}>12°C</i>
      <i className={styles.alsace}>Alsace</i>
      <img
        className={styles.domaineVincentFleithItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.domaineVincentFleith2020Container}>
        <span className={styles.domaineVincentFleith2020Container1}>
          <p className={styles.trsGrandeFracheur}>
            DOMAINE Vincent Fleith|2020
          </p>
          <p className={styles.cuveRiesling}>{`Cuvée Riesling  `}</p>
        </span>
      </div>
      <div
        className={styles.domaineVincentFleithInner}
        onClick={onRectangle1Click}
      />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
      <img className={styles.image36Icon} alt="" src="/image-361@2x.png" />
      <div className={styles.domaineVincentFleithChild1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default DomaineVincentFleith1;
