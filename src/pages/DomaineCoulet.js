import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DomaineCoulet.module.css';

const DomaineCoulet = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate('/suprme-de-poulet');
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  return (
    <div className={styles.domaineCoulet}>
      <div className={styles.domaineCouletChild} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <i className={styles.deLaPoireContainer}>
        <p className={styles.deLaPoire}>
          De la poire, de la pêche blanche et des fleurs. Une bouche ample et
          équilibrée et une belle minéralité
        </p>
      </i>
      <i className={styles.c}>13,5°C</i>
      <img className={styles.domaineCouletItem} alt='' src='/ellipse-292.svg' />
      <div className={styles.domaineCoulet2021CuveContainer}>
        <span className={styles.domaineCoulet2021CuveContainer1}>
          <p className={styles.deLaPoire}>{`domaine coulet|2021 `}</p>
          <p className={styles.cuveTourDe}>Cuvée tour de baulx</p>
        </span>
      </div>
      <div className={styles.domaineCouletInner} onClick={onRectangle1Click} />
      <div className={styles.retourAuxChoix} onClick={onRectangle1Click}>
        Retour aux choix des vins
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image38Icon} alt='' src='/image-38@2x.png' />
      <i className={styles.coteauxDeLanguedoc}>Coteaux-de-languedoc</i>
      <div className={styles.domaineCouletChild1} />
      <div className={styles.biologique}>Biologique</div>
    </div>
  );
};

export default DomaineCoulet;
