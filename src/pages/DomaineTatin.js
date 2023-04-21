import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DomaineTatin.module.css';

const DomaineTatin = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate('/suprme-de-poulet');
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  return (
    <div className={styles.domaineTatin}>
      <div className={styles.domaineTatinChild} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <img className={styles.domaineTatinItem} alt='' src='/ellipse-292.svg' />
      <div className={styles.domaineTatinInner} onClick={onRectangle1Click} />
      <div className={styles.retourAuxChoix} onClick={onRectangle1Click}>
        Retour aux choix des vins
      </div>
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
      <div className={styles.domaineTatinChild1} />
      <div className={styles.biologique}>Biologique</div>
      <img className={styles.image17Icon} alt='' src='/image-172@2x.png' />
    </div>
  );
};

export default DomaineTatin;
