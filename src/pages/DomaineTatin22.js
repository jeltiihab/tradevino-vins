import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DomaineTatin22.module.css";

const DomaineTatin22 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/cordon-bleu");
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.domaineTatin22}>
      <div className={styles.domaineTatin22Child} />
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <img
        className={styles.domaineTatin22Item}
        alt=""
        src="/ellipse-292.svg"
      />
      <div className={styles.domaineTatin22Inner} onClick={onRectangle1Click} />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <i className={styles.cerisesFramboisesSurContainer}>
        <p className={styles.cerisesFramboisesSur}>
          Cerises, framboises sur un bouquet d’épices et de cacao, quelle belle
          palette aromatique !
        </p>
      </i>
      <i className={styles.c}>12,5 °C</i>
      <i className={styles.reuilly}>Reuilly</i>
      <div className={styles.domaineTatin2020CuveContainer}>
        <span className={styles.domaineTatin2020CuveContainer1}>
          <p className={styles.cerisesFramboisesSur}>DOMAINE TATIN|2020</p>
          <p className={styles.cuveLaCommanderie}>{`Cuvée La Commanderie  `}</p>
        </span>
      </div>
      <div className={styles.domaineTatin22Child1} />
      <div className={styles.biologique}>Biologique</div>
      <img className={styles.image17Icon} alt="" src="/image-172@2x.png" />
    </div>
  );
};

export default DomaineTatin22;
