import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DomaineVincentFleith.module.css';

const DomaineVincentFleith = () => {
  const navigate = useNavigate();

  const onRetourAuxChoixClick = useCallback(() => {
    navigate('/suprme-de-poulet');
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  return (
    <div className={styles.domaineVincentFleith}>
      <div className={styles.domaineVincentFleithChild} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <i className={styles.domaineTatin2020CuveContainer}>
        DOMAINE Vincent Fleith | 2019 Cuvée Letzenberg
      </i>
      <i className={styles.deLaSouplesseContainer}>
        <p className={styles.deLaSouplesse}>
          De la souplesse, des tanins soyeux, de la fraîcheur et surtout une
          grande gourmandise
        </p>
      </i>
      <i className={styles.c}>13°C</i>
      <i className={styles.alsace}>Alsace</i>
      <img
        className={styles.domaineVincentFleithItem}
        alt=''
        src='/ellipse-292.svg'
      />
      <div className={styles.domaineVincentFleithInner} />
      <div className={styles.retourAuxChoix} onClick={onRetourAuxChoixClick}>
        Retour aux choix des vins
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image37Icon} alt='' src='/image-371@2x.png' />
      <div className={styles.domaineVincentFleithChild1} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default DomaineVincentFleith;
