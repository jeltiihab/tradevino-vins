import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PetitSal.module.css";

const PetitSal = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    navigate("/manoir-de-la-tte-rouge-21");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/domaine-combel-la-serre-22");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/heritage-du-pic-20");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.petitSal}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLePetit}>POUR LE petit salé</p>
      </div>
      <div className={styles.manoirDeLaContainer}>
        <p className={styles.laSlectionTradevino}>Manoir de la tête rouge</p>
        <p className={styles.pourLePetit}>{`2021 `}</p>
      </div>
      <div className={styles.combelLaSerreContainer}>
        <p className={styles.laSlectionTradevino}>Combel La serre</p>
        <p className={styles.pourLePetit}>2022</p>
      </div>
      <div className={styles.heritageDuPicContainer}>
        <p className={styles.laSlectionTradevino}>Heritage du Pic</p>
        <p className={styles.pourLePetit}>2020</p>
      </div>
      <div className={styles.cuveCarbo}>
        <span className={styles.cuve}>{`cuvée `}</span>Carbo
      </div>
      <div className={styles.bagatelle}> Bagatelle</div>
      <div className={styles.saumur}>Saumur</div>
      <div className={styles.cahors}>Cahors</div>
      <div className={styles.languedoc}>Languedoc</div>
      <img className={styles.petitSalChild} alt="" src="/ellipse-25.svg" />
      <img className={styles.petitSalItem} alt="" src="/ellipse-25.svg" />
      <img className={styles.petitSalInner} alt="" src="/ellipse-25.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-26.svg" />
      <img className={styles.petitSalChild1} alt="" src="/ellipse-29.svg" />
      <img className={styles.petitSalChild2} alt="" src="/ellipse-28.svg" />
      <img className={styles.petitSalChild3} alt="" src="/ellipse-28.svg" />
      <div className={styles.div}>25€</div>
      <div className={styles.div1}>5,5€</div>
      <div className={styles.div2}>48 €</div>
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
      <div className={styles.guilhemGaucelm}>Guilhem Gaucelm</div>
      <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
      <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
      <div className={styles.petitSalChild4} />
      <div className={styles.biodynamie}>Biodynamie</div>
      <div className={styles.petitSalChild5} />
      <div className={styles.biologique}>Biologique</div>
      <div className={styles.petitSalChild6} />
      <div className={styles.biologique1}>Biologique</div>
    </div>
  );
};

export default PetitSal;
