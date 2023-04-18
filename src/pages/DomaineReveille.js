import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DomaineReveille.module.css";

const DomaineReveille = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/bavette");
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.domaineReveille}>
      <div className={styles.domaineReveilleChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <img
        className={styles.domaineReveilleItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div
        className={styles.domaineReveilleInner}
        onClick={onRectangle1Click}
      />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <div className={styles.domaineReveilleChild1} />
      <div className={styles.naturel}>Naturel</div>
      <img className={styles.subtractIcon} alt="" src="/subtract@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-192@2x.png" />
    </div>
  );
};

export default DomaineReveille;
