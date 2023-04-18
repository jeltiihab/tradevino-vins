import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DomaineRayJane.module.css";

const DomaineRayJane = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/tagliatelles");
  }, [navigate]);

  return (
    <div className={styles.domaineRayJane}>
      <div className={styles.domaineRayJaneChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.uneBelleAttaqueContainer}>
        <p className={styles.uneBelleAttaque}>
          Une belle attaque et de la concentration, les tanins sont soyeux ce
          qui lui confère un parfait équilibre
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </i>
      <i className={styles.c}>14 °C</i>
      <i className={styles.bandol}>Bandol</i>
      <img
        className={styles.domaineRayJaneItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.domaineRayJane2017}>Domaine ray-jane|2017</div>
      <div className={styles.domaineRayJaneInner} onClick={onRectangle1Click} />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
      <div className={styles.domaineRayJaneChild1} />
      <div className={styles.biologique}>Biologique</div>
      <img
        className={styles.imageRemovebgPreview31Icon}
        alt=""
        src="/imageremovebgpreview3-11@2x.png"
      />
    </div>
  );
};

export default DomaineRayJane;
