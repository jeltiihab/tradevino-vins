import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ManoirDeLaTteRouge21.module.css';

const ManoirDeLaTeteRouge = () => {
  const navigate = useNavigate();

  const onRetourAuxChoixClick = useCallback(() => {
    navigate('/cordon-bleu');
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  return (
    <div className={styles.manoirDeLaTteRouge21}>
      <div className={styles.manoirDeLaTteRouge21Child} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <i className={styles.uneAttaqueNette}>
        Une attaque nette et franche avec beaucoup de fraîcheur. C’est un droit,
        juste avec des tanins souples
      </i>
      <i className={styles.c}>13°C</i>
      <i className={styles.saumur}>Saumur</i>
      <img
        className={styles.manoirDeLaTteRouge21Item}
        alt=''
        src='/ellipse-292.svg'
      />
      <div className={styles.manoirDeLaContainer}>
        <span className={styles.manoirDeLaContainer1}>
          <p className={styles.manoirDeLa}>manoir de la tête rouge|2021</p>
          <p className={styles.cuveBagatelle}>Cuvée bagatelle</p>
        </span>
      </div>
      <div
        className={styles.manoirDeLaTteRouge21Inner}
        onClick={onRetourMenuTextClick}
      />
      <div className={styles.rectangleDiv} onClick={onRetourAuxChoixClick} />
      <div className={styles.retourAuxChoix} onClick={onRetourAuxChoixClick}>
        Retour aux choix des vins
      </div>
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image29Icon} alt='' src='/image-291@2x.png' />
      <div className={styles.manoirDeLaTteRouge21Child1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default ManoirDeLaTeteRouge;
