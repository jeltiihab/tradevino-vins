import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CoteauxDesGirondales1.module.css';

const CoteauxDesGirondales1 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate('/camembert-rti');
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
      <div
        className={styles.coteauxDesGirondalesInner}
        onClick={onRectangle1Click}
      />
      <div className={styles.retourAuxChoix}>Retour aux choix des vins</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.retourMenu} onClick={onRetourMenuTextClick}>
        Retour menu
      </div>
      <img className={styles.image31Icon} alt='' src='/image-311@2x.png' />
      <div className={styles.coteauxDesGirondalesChild1} />
      <div className={styles.biologique}>Biologique</div>
      <i className={styles.surLeFruit}>
        Sur le fruit à noyau, belle rondeur en bouche, un vin très équilibré
      </i>
      <i className={styles.c}>10,5 °C</i>
      <i className={styles.hauteSavoie}>Haute-Savoie</i>
      <div className={styles.coteauxDesGirondales2022Container}>
        <span className={styles.coteauxDesGirondales2022Container1}>
          <p className={styles.coteauxDesGirondales2022}>
            Coteaux des girondales|2022
          </p>
          <p className={styles.cuveCeuxDaprs}>{`Cuvée Ceux d’après...  `}</p>
        </span>
      </div>
    </div>
  );
};

export default CoteauxDesGirondales1;
