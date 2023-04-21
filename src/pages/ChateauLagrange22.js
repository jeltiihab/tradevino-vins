import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ChateauLagrange22.module.css';

const ChateauLagrange22 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate('/thon-micuit');
  }, [navigate]);

  return (
    <div className={styles.chateauLagrange22}>
      <div className={styles.chateauLagrange22Child} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <div
        className={styles.chateauLagrange22Item}
        onClick={onRectangle2Click}
      />
      <div
        className={styles.chateauLagrange22Inner}
        onClick={onRectangle2Click}
      />
      <div className={styles.retourAuxChoix} onClick={onRectangle2Click}>
        Retour aux choix des vins
      </div>
      <div className={styles.retourMenu} onClick={onRectangle1Click}>
        Retour menu
      </div>
      <i className={styles.prsenteEnBoucheContainer}>
        <p className={styles.prsenteEnBouche}>
          Présente en bouche un juste milieu entre le côté vif, on retrouve son
          côté citronné et subtilement floral
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
      </i>
      <i className={styles.c}>12 °C</i>
      <i className={styles.entreDeuxMers}>Entre deux mers</i>
      <img className={styles.ellipseIcon} alt='' src='/ellipse-292.svg' />
      <div className={styles.rectangleDiv} />
      <div className={styles.biologique}>Biologique</div>
      <div className={styles.chteauLagrange2022}>Château Lagrange|2022</div>
      <img className={styles.image25Icon} alt='' src='/image-251@2x.png' />
    </div>
  );
};

export default ChateauLagrange22;
