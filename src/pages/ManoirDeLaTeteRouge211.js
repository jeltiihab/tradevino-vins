import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ManoirDeLaTeteRouge211.module.css';

const ManoirDeLaTeteRouge211 = () => {
  const navigate = useNavigate();

  const onRetourAuxChoixClick = useCallback(() => {
    navigate('/camembert-rti');
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  return (
    <div className={styles.manoirDeLaTeteRouge21}>
      <div className={styles.manoirDeLaTeteRouge21Child} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <i className={styles.vinSecAvecContainer}>
        <p className={styles.vinSecAvec}>
          Vin sec avec du beau gras. Une attaque nette et une longueur maîtrisée
        </p>
        <p className={styles.vinSecAvec}>&nbsp;</p>
        <p className={styles.blankLine1}>&nbsp;</p>
      </i>
      <i className={styles.c}>13,5 °C</i>
      <i className={styles.saumur}>Saumur</i>
      <img
        className={styles.manoirDeLaTeteRouge21Item}
        alt=''
        src='/ellipse-292.svg'
      />
      <div className={styles.manoirDeLaContainer}>
        <span className={styles.manoirDeLaContainer1}>
          <p className={styles.vinSecAvec}>Manoir de la tête rouge|2021</p>
          <p className={styles.cuveTteDange}>Cuvée tête d’ange</p>
        </span>
      </div>
      <div className={styles.manoirDeLaTeteRouge21Inner} />
      <div className={styles.retourAuxChoix} onClick={onRetourAuxChoixClick}>
        Retour aux choix des vins
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image32Icon} alt='' src='/image-322@2x.png' />
      <div className={styles.manoirDeLaTeteRouge21Child1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default ManoirDeLaTeteRouge211;
