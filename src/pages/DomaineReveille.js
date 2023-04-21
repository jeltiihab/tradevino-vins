import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DomaineRveille.module.css';

const DomaineReveille = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate('/bavette');
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  return (
    <div className={styles.domaineRveille}>
      <div className={styles.domaineRveilleChild} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <img
        className={styles.domaineRveilleItem}
        alt=''
        src='/ellipse-292.svg'
      />
      <div className={styles.domaineRveilleInner} onClick={onRectangle1Click} />
      <div className={styles.retourAuxChoix} onClick={onRectangle1Click}>
        Retour aux choix des vins
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <i className={styles.unVinSolaireContainer}>
        <p className={styles.unVinSolaire}>
          Un vin solaire, intense et sans artifice. La matière est vive, la
          texture est fine et les tanins sont souples
        </p>
      </i>
      <i className={styles.c}>13,5°C</i>
      <i className={styles.ctesDuRoussillon}>Côtes-du-Roussillon</i>
      <div className={styles.domaineRveille2014CuveContainer}>
        <span className={styles.domaineRveille2014CuveContainer1}>
          <p className={styles.unVinSolaire}>{`domaine réveille|2014 `}</p>
          <p className={styles.cuveUltraViolet}>Cuvée ultra violet</p>
        </span>
      </div>
      <div className={styles.domaineRveilleChild1} />
      <div className={styles.naturel}>Naturel</div>
      <img className={styles.subtractIcon} alt='' src='/subtract@2x.png' />
      <img className={styles.image19Icon} alt='' src='/image-192@2x.png' />
    </div>
  );
};

export default DomaineReveille;
