import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Bavette.module.css";

const Bavette = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    navigate("/domaine-reveille");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/coteaux-des-girondales2");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/ferme-des-7-lunes");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.bavette}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLaBavette}>POUR La bavette</p>
      </div>
      <img className={styles.bavetteChild} alt="" src="/ellipse-25.svg" />
      <img className={styles.bavetteItem} alt="" src="/ellipse-25.svg" />
      <img className={styles.bavetteInner} alt="" src="/ellipse-26.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-29.svg" />
      <img className={styles.bavetteChild1} alt="" src="/ellipse-28.svg" />
      <div className={styles.div}>25€</div>
      <div className={styles.div1}>5,5€</div>
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
      <img className={styles.bavetteChild2} alt="" src="/ellipse-25.svg" />
      <img className={styles.bavetteChild3} alt="" src="/ellipse-28.svg" />
      <div className={styles.div3}>60 €</div>
      <div className={styles.groupDiv}>
        <div className={styles.copyBouteille27}>B</div>
        <div className={styles.copyBouteille28}>O</div>
        <div className={styles.copyBouteille29}>U</div>
        <div className={styles.copyBouteille30}>T</div>
        <div className={styles.copyBouteille31}>E</div>
        <div className={styles.copyBouteille32}>I</div>
        <div className={styles.copyBouteille33}>L</div>
        <div className={styles.copyBouteille34}>L</div>
        <div className={styles.copyBouteille35}>E</div>
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
      <div className={styles.domaineRveill2014Container}>
        <p className={styles.laSlectionTradevino}>domaine réveillé</p>
        <p className={styles.pourLaBavette}>{`2014 `}</p>
      </div>
      <div className={styles.ultraViolet}>Ultra violet</div>
      <div className={styles.ctesDuRoussillon}>Côtes-du-Roussillon</div>
      <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
      <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
      <div className={styles.bavetteChild4} />
      <div className={styles.naturel}>Naturel</div>
      <div className={styles.bavetteChild5} />
      <div className={styles.biologique}>Biologique</div>
      <div className={styles.bavetteChild6} />
      <div className={styles.biodynamie}>Biodynamie</div>
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
    </div>
  );
};

export default Bavette;
