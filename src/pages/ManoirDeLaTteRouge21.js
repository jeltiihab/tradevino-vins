import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ManoirDeLaTteRouge21.module.css";

const ManoirDeLaTteRouge21 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/petitsal");
  }, [navigate]);

  return (
    <div className={styles.manoirDeLaTteRouge21}>
      <div className={styles.manoirDeLaTteRouge21Child} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.uneAttaqueNette}>
        Une attaque nette et franche avec beaucoup de fraîcheur. C’est un droit,
        juste avec des tanins souples
      </i>
      <i className={styles.c}>13°C</i>
      <i className={styles.saumur}>Saumur</i>
      <img
        className={styles.manoirDeLaTteRouge21Item}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.manoirDeLaContainer}>
        <span className={styles.manoirDeLaContainer1}>
          <p className={styles.manoirDeLa}>manoir de la tête rouge|2021</p>
          <p className={styles.cuveBagatelle}>Cuvée bagatelle</p>
        </span>
      </div>
      <div
        className={styles.manoirDeLaTteRouge21Inner}
        onClick={onRectangle1Click}
      />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
      <img className={styles.image29Icon} alt="" src="/image-291@2x.png" />
      <div className={styles.manoirDeLaTteRouge21Child1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default ManoirDeLaTteRouge21;
