import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Accueil2.module.css";

const Accueil2 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.accueil2}>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.accueil2Child} />
      <div className={styles.dcouvrirNotreMenu}>
        Découvrir notre menu accords mets et vins
      </div>
      <div className={styles.accueil2Item} onClick={onRectangle1Click} />
      <div className={styles.leMenu}>Le menu</div>
    </div>
  );
};

export default Accueil2;
