import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Accueil5.module.css';

const Accueil5 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate('/thon-micuit');
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate('/petitsal');
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate('/crottin-de-chvre');
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate('/entrecte');
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate('/tagliatelles');
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate('/parmentier');
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate('/suprme-de-poulet');
  }, [navigate]);

  const onGroupContainer15Click = useCallback(() => {
    navigate('/boudin-noir');
  }, [navigate]);

  const onGroupContainer17Click = useCallback(() => {
    navigate('/camembert-rti');
  }, [navigate]);

  const onGroupContainer19Click = useCallback(() => {
    navigate('/bavette');
  }, [navigate]);

  const onGroupContainer21Click = useCallback(() => {
    navigate('/cordon-bleu');
  }, [navigate]);

  const instagramClick = useCallback(() => {
    navigate('https://www.instagram.com/tradevino_fr/');
  }, [navigate]);

  return (
    <div className={styles.accueil5}>
      <div className={styles.enCeMoment}>En ce moment</div>
      <div className={styles.groupParent} onClick={onGroupContainer1Click}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.thonMiCuit}>Thon mi-cuit</div>
      </div>
      <div className={styles.groupContainer} onClick={onGroupContainer3Click}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.petitSal}>petit-salé</div>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer5Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>crottin de chèvre</div>
      </div>
      <div className={styles.groupParent1} onClick={onGroupContainer7Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>entrecôte</div>
      </div>
      <div className={styles.groupParent2} onClick={onGroupContainer9Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>tagliatelles</div>
      </div>
      <div className={styles.groupParent3} onClick={onGroupContainer11Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>parmentier</div>
      </div>
      <div className={styles.groupParent4} onClick={onGroupContainer13Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>suprême de poulet</div>
      </div>
      <div className={styles.groupParent5} onClick={onGroupContainer15Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>boudin noir</div>
      </div>
      <div className={styles.groupParent6} onClick={onGroupContainer17Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>camembert rôti</div>
      </div>
      <div className={styles.groupParent7} onClick={onGroupContainer19Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>Bavette</div>
      </div>
      <div className={styles.groupParent8} onClick={onGroupContainer21Click}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.crottinDeChvre}>cordon bleu</div>
      </div>
      <img
        className={styles.vectorIcon}
        onClick={() => {
          window.location.href = 'https://www.tradevino.fr';
        }}
        alt=''
        src='/vector.svg'
      />
      <img
        className={styles.vectorIcon1}
        onClick={() => {
          window.location.href = 'https://www.linkedin.com/company/tradevino/';
        }}
        alt=''
        src='/vector1.svg'
      />
      <img
        className={styles.vectorIcon2}
        onClick={() => {
          window.location.href = 'https://www.instagram.com/tradevino_fr/';
        }}
        alt=''
        src='/vector2.svg'
      />
    </div>
  );
};

export default Accueil5;
