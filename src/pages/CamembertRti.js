import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CamembertRti.module.css";

const CamembertRti = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    navigate("/domaine-de-la-tete-rouge-21");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/manoir-de-la-tete-rouge-21");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/coteaux-des-girondales");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.camembertRti}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLeCamembert}>POUR le camembert rôti</p>
      </div>
      <img className={styles.camembertRtiChild} alt="" src="/ellipse-25.svg" />
      <img className={styles.camembertRtiItem} alt="" src="/ellipse-25.svg" />
      <img className={styles.camembertRtiInner} alt="" src="/ellipse-26.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-29.svg" />
      <img className={styles.camembertRtiChild1} alt="" src="/ellipse-28.svg" />
      <div className={styles.div}>30€</div>
      <div className={styles.div1}>6€</div>
      <div className={styles.div2}>48 €</div>
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
      <div className={styles.copyVerreParent}>
        <div className={styles.copyVerre}>V</div>
        <div className={styles.copyVerre1}>E</div>
        <div className={styles.copyVerre2}>R</div>
        <div className={styles.copyVerre3}>R</div>
        <div className={styles.copyVerre4}>E</div>
      </div>
      <img className={styles.camembertRtiChild2} alt="" src="/ellipse-25.svg" />
      <img className={styles.camembertRtiChild3} alt="" src="/ellipse-28.svg" />
      <div className={styles.div3}>60 €</div>
      <div className={styles.groupDiv}>
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
      <div className={styles.groupParent} onClick={onGroupContainer6Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupContainer} onClick={onGroupContainer8Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupParent1} onClick={onGroupContainer10Click}>
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
      <div className={styles.manoirDeLaContainer}>
        <p className={styles.laSlectionTradevino}>Manoir de la tête rouge</p>
        <p className={styles.pourLeCamembert}>{`2021 `}</p>
      </div>
      <div className={styles.manoirDeLaContainer1}>
        <p className={styles.laSlectionTradevino}>Manoir de la tête rouge</p>
        <p className={styles.pourLeCamembert}>{`2021 `}</p>
      </div>
      <div className={styles.bagatelle}>Bagatelle</div>
      <div className={styles.tteDange}>Tête d’ange</div>
      <div className={styles.saumur}>Saumur</div>
      <div className={styles.saumur1}>Saumur</div>
      <div className={styles.coteauxDesGirondalesContainer}>
        <p className={styles.laSlectionTradevino}>coteaux des girondales</p>
        <p className={styles.pourLeCamembert}>2022</p>
      </div>
      <div className={styles.ceuxDaprs}>Ceux d’après…</div>
      <div className={styles.hauteSavoie}>Haute-savoie</div>
      <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
      <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
      <div className={styles.camembertRtiChild4} />
      <div className={styles.biodynamie}>Biodynamie</div>
      <div className={styles.camembertRtiChild5} />
      <div className={styles.biodynamie1}>Biodynamie</div>
      <div className={styles.camembertRtiChild6} />
      <div className={styles.biologique}>Biologique</div>
    </div>
  );
};

export default CamembertRti;
