import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ManoirDeLaTeteRouge.module.css";

const ManoirDeLaTeteRouge = () => {
  const navigate = useNavigate();

  const onRetourAuxChoixClick = useCallback(() => {
    navigate("/cordon-bleu");
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.manoirDeLaTeteRouge}>
      <div className={styles.manoirDeLaTeteRougeChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <img
        className={styles.manoirDeLaTeteRougeItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.manoirDeLaTeteRougeInner} />
      <div className={styles.retourAuxChoix} onClick={onRetourAuxChoixClick}>
        Retour aux choix des vins
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image32Icon} alt="" src="/image-321@2x.png" />
      <div className={styles.manoirDeLaTeteRougeChild1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default ManoirDeLaTeteRouge;
