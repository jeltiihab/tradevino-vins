import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DomaineLaMarle2.module.css";

const DomaineLaMarle2 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/tagliatelles");
  }, [navigate]);

  return (
    <div className={styles.domaineLaMarle}>
      <div className={styles.domaineLaMarleChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <img
        className={styles.domaineLaMarleItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.domaineLaMarleInner} onClick={onRectangle1Click} />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
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
      <div className={styles.domaineLaMarle2017}>domaine la marèle|2017</div>
      <div className={styles.domaineLaMarleChild1} />
      <div className={styles.biologique}>Biologique</div>
      <img className={styles.subtractIcon} alt="" src="/subtract@2x.png" />
      <img
        className={styles.imageRemovebgPreview22Icon}
        alt=""
        src="/imageremovebgpreview2-21@2x.png"
      />
    </div>
  );
};

export default DomaineLaMarle2;
