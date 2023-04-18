import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ManoirDeLaTeteRouge21.module.css";

const ManoirDeLaTeteRouge21 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/boudin-noir");
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.manoirDeLaTeteRouge21}>
      <div className={styles.manoirDeLaTeteRouge21Child} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <img
        className={styles.manoirDeLaTeteRouge21Item}
        alt=""
        src="/ellipse-292.svg"
      />
      <div
        className={styles.manoirDeLaTeteRouge21Inner}
        onClick={onRectangle1Click}
      />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image30Icon} alt="" src="/image-321@2x.png" />
      <div className={styles.manoirDeLaTeteRouge21Child1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default ManoirDeLaTeteRouge21;
