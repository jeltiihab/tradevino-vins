import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeritageDuPic20.module.css';

const HeritageDuPic20 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate('/accueil-3');
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate('/petitsal');
  }, [navigate]);

  return (
    <div className={styles.heritageDuPic20}>
      <div className={styles.heritageDuPic20Child} />
      <img className={styles.shadowIcon} alt='' src='/shadow@2x.png' />
      <i className={styles.uneLgendeUnContainer}>
        <p className={styles.uneLgendeUn}>
          Une légende, un vin profond sur des notes de garrigues, fruits rouges,
          fruits noirs, d’épices, de violette... la liste est trop longue
        </p>
        <p className={styles.uneLgendeUn}>&nbsp;</p>
        <p className={styles.blankLine1}>&nbsp;</p>
      </i>
      <i className={styles.c}>14 °C</i>
      <i className={styles.languedoc}>Languedoc</i>
      <img
        className={styles.heritageDuPic20Item}
        alt=''
        src='/ellipse-292.svg'
      />
      <div
        className={styles.heritageDuPic20Inner}
        onClick={onRectangle1Click}
      />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.retourAuxChoix} onClick={onRectangle2Click}>
        Retour aux choix des vins
      </div>
      <div className={styles.retourMenu} onClick={onRectangle1Click}>
        Retour menu
      </div>
      <div className={styles.hritageDuPic2020Container}>
        <span className={styles.hritageDuPic2020Container1}>
          <p className={styles.uneLgendeUn}>héritage du pic|2020</p>
          <p className={styles.cuveGuilhemGaucelm}>Cuvée guilhem gaucelm</p>
        </span>
      </div>
      <img className={styles.image37Icon} alt='' src='/image-372@2x.png' />
      <div className={styles.heritageDuPic20Child1} />
      <div className={styles.biologique}>Biologique</div>
    </div>
  );
};

export default HeritageDuPic20;
