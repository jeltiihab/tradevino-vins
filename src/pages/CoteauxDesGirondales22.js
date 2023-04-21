import { useCallback } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './CoteauxDesGirondales22.module.css';

const CoteauxDesGirondales22 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate('/thon-micuit');
  }, [navigate]);

  return (
    <div className={styles.coteauxDesGirondales22}>
      <div className={styles.coteauxDesGirondales22Child} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <i className={styles.surLeFruit}>
        Sur le fruit à noyau, belle rondeur en bouche, un vin très équilibré
      </i>
      <i className={styles.c}>10,5 °C</i>
      <i className={styles.hauteSavoie}>Haute Savoie</i>
      <img
        className={styles.coteauxDesGirondales22Item}
        alt=''
        src='/ellipse-292.svg'
      />
      <div className={styles.coteauxDesGirondales2022Container}>
        <span className={styles.coteauxDesGirondales2022Container1}>
          <p className={styles.coteauxDesGirondales2022}>
            Coteaux des girondales|2022
          </p>
          <p className={styles.cuveCeuxDaprs}>{`Cuvée Ceux d’après...  `}</p>
        </span>
      </div>

      <div className={styles.rectangleDiv} />
      <div className={styles.retourAuxChoix} onClick={onRectangle1Click}>
        Retour aux choix des vins
      </div>
      <div className={styles.retourMenu} onClick={onRectangleButtonClick}>
        Retour menu
      </div>
      <img className={styles.image26Icon} alt='' src='/image-262@2x.png' />
      <div className={styles.coteauxDesGirondales22Child1} />
      <div className={styles.biologique}>Biologique</div>
    </div>
  );
};

export default CoteauxDesGirondales22;
