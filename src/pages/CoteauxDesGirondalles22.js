import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CoteauxDesGirondalles22.module.css";

const CoteauxDesGirondalles22 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/crottin-de-chvre");
  }, [navigate]);

  return (
    <div className={styles.coteauxDesGirondalles22}>
      <div className={styles.coteauxDesGirondalles22Child} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.digesteEtFruiteContainer}>
        <p className={styles.digesteEtFruite}>
          Digeste et fruitée, il est joliment structuré par des tannins fins, de
          belles notes épicées, des fruits rouges et de la myrtille
        </p>
        <p className={styles.digesteEtFruite}>&nbsp;</p>
        <p className={styles.blankLine1}>&nbsp;</p>
      </i>
      <i className={styles.c}>10°C</i>
      <i className={styles.hauteSavoie}>Haute-Savoie</i>
      <img
        className={styles.coteauxDesGirondalles22Item}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.coteauxDesGirondales2022Container}>
        <span className={styles.coteauxDesGirondales2022Container1}>
          <p className={styles.digesteEtFruite}>Coteaux des Girondales|2022</p>
          <p className={styles.cuveCeuxDaprs}>Cuvée ceux d’après...</p>
        </span>
      </div>
      <div
        className={styles.coteauxDesGirondalles22Inner}
        onClick={onRectangle1Click}
      />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
      <img className={styles.image35Icon} alt="" src="/image-352@2x.png" />
      <div className={styles.coteauxDesGirondalles22Child1} />
      <div className={styles.biologique}>Biologique</div>
    </div>
  );
};

export default CoteauxDesGirondalles22;
