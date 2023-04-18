import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CrottinDeChvre.module.css";

const CrottinDeChvre = () => {
  const navigate = useNavigate();

  const onGroupContainer5Click = useCallback(() => {
    navigate("/domaine-garreliere-21");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/coteaux-des-girondalles-22");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/domaine-vincent-fleith1");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.crottinDeChvre}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLeCrottin}>POUR LE crottin de chèvre</p>
      </div>
      <img
        className={styles.crottinDeChvreChild}
        alt=""
        src="/ellipse-25.svg"
      />
      <img className={styles.crottinDeChvreItem} alt="" src="/ellipse-25.svg" />
      <img
        className={styles.crottinDeChvreInner}
        alt=""
        src="/ellipse-25.svg"
      />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-26.svg" />
      <img
        className={styles.crottinDeChvreChild1}
        alt=""
        src="/ellipse-29.svg"
      />
      <img
        className={styles.crottinDeChvreChild2}
        alt=""
        src="/ellipse-28.svg"
      />
      <img
        className={styles.crottinDeChvreChild3}
        alt=""
        src="/ellipse-28.svg"
      />
      <div className={styles.div}>25€</div>
      <div className={styles.div1}>5€</div>
      <div className={styles.div2}>40€</div>
      <div className={styles.div3}>60 €</div>
      <div className={styles.copyBouteilleParent}>
        <div className={styles.copyBouteille}>B</div>
        <div className={styles.copyBouteille1}>O</div>
        <div className={styles.copyBouteille2}>U</div>
        <div className={styles.copyBouteille3}>T</div>
        <div className={styles.copyBouteille4}>E</div>
        <div className={styles.copyBouteille5}>I</div>
        <div className={styles.copyBouteille6}>L</div>
        <div className={styles.copyBouteille7}>L</div>
        <div className={styles.copyBouteille8}>E</div>
      </div>
      <div className={styles.copyBouteilleGroup}>
        <div className={styles.copyBouteille9}>B</div>
        <div className={styles.copyBouteille10}>O</div>
        <div className={styles.copyBouteille11}>U</div>
        <div className={styles.copyBouteille12}>T</div>
        <div className={styles.copyBouteille13}>E</div>
        <div className={styles.copyBouteille14}>I</div>
        <div className={styles.copyBouteille15}>L</div>
        <div className={styles.copyBouteille16}>L</div>
        <div className={styles.copyBouteille17}>E</div>
      </div>
      <div className={styles.copyVerreParent}>
        <div className={styles.copyVerre}>V</div>
        <div className={styles.copyVerre1}>E</div>
        <div className={styles.copyVerre2}>R</div>
        <div className={styles.copyVerre3}>R</div>
        <div className={styles.copyVerre4}>E</div>
      </div>
      <div className={styles.copyBouteilleContainer}>
        <div className={styles.copyBouteille18}>B</div>
        <div className={styles.copyBouteille19}>O</div>
        <div className={styles.copyBouteille20}>U</div>
        <div className={styles.copyBouteille21}>T</div>
        <div className={styles.copyBouteille22}>E</div>
        <div className={styles.copyBouteille23}>I</div>
        <div className={styles.copyBouteille24}>L</div>
        <div className={styles.copyBouteille25}>L</div>
        <div className={styles.copyBouteille26}>E</div>
      </div>
      <div className={styles.groupParent} onClick={onGroupContainer5Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupContainer} onClick={onGroupContainer7Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer9Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector3.svg"
        onClick={onVectorIconClick}
      />
      <div className={styles.coteauxDesGirondalesContainer}>
        <p className={styles.laSlectionTradevino}>coteaux des girondales</p>
        <p className={styles.pourLeCrottin}>2022</p>
      </div>
      <div className={styles.domaineVincentFleithContainer}>
        <p className={styles.laSlectionTradevino}>domaine Vincent fleith</p>
        <p className={styles.pourLeCrottin}>2020</p>
      </div>
      <div className={styles.ceuxDaprs}>Ceux d’après…</div>
      <div className={styles.riesling}>riesling</div>
      <div className={styles.hauteSavoie}>Haute-savoie</div>
      <div className={styles.alsace}>Alsace</div>
      <img className={styles.image26Icon} alt="" src="/image-261@2x.png" />
      <div className={styles.leBlancDe}>Le blanc de la mariée</div>
      <img className={styles.image33Icon} alt="" src="/image-33@2x.png" />
      <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
      <div className={styles.crottinDeChvreChild4} />
      <div className={styles.biodynamie}>Biodynamie</div>
      <div className={styles.crottinDeChvreChild5} />
      <div className={styles.biodynamie1}>Biodynamie</div>
      <div className={styles.crottinDeChvreChild6} />
      <div className={styles.crottinDeChvreChild6} />
      <div className={styles.biologique}>Biologique</div>
    </div>
  );
};

export default CrottinDeChvre;
