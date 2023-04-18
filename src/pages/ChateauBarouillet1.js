import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChateauBarouillet1.module.css";

const ChateauBarouillet1 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/parmentier");
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.chateauBarouillet}>
      <div className={styles.chateauBarouilletChild} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <i className={styles.rondAmpleEtContainer}>
        <p className={styles.rondAmpleEt}>
          Rond, ample et velouté. Une bonne fraîcheur aromatique avec de la
          mâche et du fruit
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </i>
      <i className={styles.c}>13,5 °C</i>
      <img
        className={styles.chateauBarouilletItem}
        alt=""
        src="/ellipse-292.svg"
      />
      <div
        className={styles.chateauBarouilletInner}
        onClick={onRectangle1Click}
      />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <div className={styles.domaineBarouillet2019CuveContainer}>
        <span className={styles.domaineBarouillet2019CuveContainer1}>
          <p className={styles.rondAmpleEt}>Domaine Barouillet|2019</p>
          <p className={styles.cuveLarcin}>Cuvée Larcin</p>
        </span>
      </div>
      <i className={styles.bergerac}>Bergerac</i>
      <div className={styles.chateauBarouilletChild1} />
      <div className={styles.naturel}>Naturel</div>
      <img className={styles.image21Icon} alt="" src="/image-211@2x.png" />
    </div>
  );
};

export default ChateauBarouillet1;
