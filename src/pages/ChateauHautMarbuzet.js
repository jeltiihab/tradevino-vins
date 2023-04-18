import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChateauHautMarbuzet.module.css";

const ChateauHautMarbuzet = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/entrecte");
  }, [navigate]);

  return (
    <div className={styles.chateauHautMarbuzet}>
      <div className={styles.chateauHautMarbuzetChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.uneBelleExprienceContainer}>
        <p className={styles.uneBelleExprience}>
          Une belle expérience avec de la fraicheur, une grande finesse et des
          tanins soyeux. Un « Terrasses du Larzac » de grande lignée
        </p>
        <p className={styles.uneBelleExprience}>&nbsp;</p>
        <p className={styles.blankLine1}>&nbsp;</p>
      </i>
      <i className={styles.c}>13°C</i>
      <i className={styles.terrassesDuLarzac}>Terrasses du Larzac</i>
      <img
        className={styles.chateauHautMarbuzetItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.domaineLaMarle2017}>domaine la marèle|2017</div>
      <div
        className={styles.chateauHautMarbuzetInner}
        onClick={onRectangle1Click}
      />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
      <div className={styles.chateauHautMarbuzetChild1} />
      <div className={styles.biologique}>Biologique</div>
      <img className={styles.subtractIcon} alt="" src="/subtract@2x.png" />
      <img
        className={styles.imageRemovebgPreview22Icon}
        alt=""
        src="/imageremovebgpreview2-2@2x.png"
      />
    </div>
  );
};

export default ChateauHautMarbuzet;
