import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FermeDes7Lunes.module.css";

const FermeDes7Lunes = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/bavette");
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.fermeDes7Lunes}>
      <div className={styles.fermeDes7LunesChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.grosCanonAvecContainer}>
        <p className={styles.grosCanonAvec}>
          Gros canon avec de l’épices, des notes torréfiées et de sous-bois. Une
          belle minèralité légèrement mentholée qui affine sa structure
        </p>
        <p className={styles.grosCanonAvec}>&nbsp;</p>
        <p className={styles.blankLine1}>&nbsp;</p>
      </i>
      <i className={styles.c}>15 °C</i>
      <i className={styles.saintJoseph}>Saint-Joseph</i>
      <img
        className={styles.fermeDes7LunesItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.fermeDes7LunesInner} onClick={onRectangle1Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image33Icon} alt="" src="/image-332@2x.png" />
      <div className={styles.fermeDes7Container}>
        <span className={styles.fermeDes7Container1}>
          <p className={styles.grosCanonAvec}>ferme des 7 lunes|2018</p>
          <p className={styles.cuveHaloSur}>Cuvée Halo sur le Baudet</p>
        </span>
      </div>
      <div className={styles.fermeDes7LunesChild1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default FermeDes7Lunes;
