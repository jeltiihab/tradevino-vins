import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DomaineMasDeLibian.module.css";

const DomaineMasDeLibian = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/entrecte");
  }, [navigate]);

  return (
    <div className={styles.domaineMasDeLibian}>
      <div className={styles.domaineMasDeLibianChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.uneAttaqueSoupleContainer}>
        <p className={styles.uneAttaqueSouple}>
          Une attaque souple et soyeuse, de la matière, le Rhône Méridional mis
          en bouteille
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </i>
      <i className={styles.c}>13,5 °C</i>
      <i className={styles.ctesDuRhne}>Côtes du Rhône</i>
      <img
        className={styles.domaineMasDeLibianItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.domaineMasDeContainer}>
        <span className={styles.domaineMasDeContainer1}>
          <p className={styles.uneAttaqueSouple}>Domaine Mas de libian|2019</p>
          <p className={styles.cuveBoutdzan}>Cuvée Bout'dzan</p>
        </span>
      </div>
      <div
        className={styles.domaineMasDeLibianInner}
        onClick={onRectangle1Click}
      />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.retourMenu}>Retour menu</div>
      <div className={styles.domaineMasDeLibianChild1} />
      <div className={styles.biodynamie}>Biodynamie</div>
      <img
        className={styles.imageRemovebgPreview2Icon}
        alt=""
        src="/imageremovebgpreview-21@2x.png"
      />
    </div>
  );
};

export default DomaineMasDeLibian;
