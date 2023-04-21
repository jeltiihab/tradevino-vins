import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CoteauxDesGirondales.module.css';

const CoteauxDesGirondales = () => {
  const navigate = useNavigate();

  const onRetourAuxChoixClick = useCallback(() => {
    navigate('/cordon-bleu');
  }, [navigate]);

  const onRetourMenuTextClick = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  return (
    <div className={styles.coteauxDesGirondales}>
      <div className={styles.coteauxDesGirondalesChild} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <img
        className={styles.coteauxDesGirondalesItem}
        alt=''
        src='/ellipse-292.svg'
      />
      <div className={styles.coteauxDesGirondalesInner} />
      <div className={styles.retourAuxChoix} onClick={onRetourAuxChoixClick}>
        Retour aux choix des vins
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image33Icon} alt='' src='/image-331@2x.png' />
      <i className={styles.digesteEtFruite}>
        Digeste et fruitée, il est joliment structuré par des tannins fins, de
        belles notes épicées, des fruits rouges et de la myrtille
      </i>
      <i className={styles.c}>10,5 °C</i>
      <i className={styles.hauteSavoie}>Haute-Savoie</i>
      <div className={styles.coteauxDesGirondales2022Container}>
        <span className={styles.coteauxDesGirondales2022Container1}>
          <p className={styles.coteauxDesGirondales2022}>
            Coteaux des girondales|2022
          </p>
          <p className={styles.cuveMatta}>{`Cuvée Mattaï...  `}</p>
        </span>
      </div>
      <div className={styles.coteauxDesGirondalesChild1} />
      <div className={styles.biologique}>Biologique</div>
    </div>
  );
};

export default CoteauxDesGirondales;
