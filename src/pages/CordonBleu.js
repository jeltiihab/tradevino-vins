import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CordonBleu.module.css";

const CordonBleu = () => {
  const navigate = useNavigate();

  const onGroupContainer8Click = useCallback(() => {
    navigate("/manoir-de-la-tete-rouge");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/domaine-tatin-22");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/coteaux-des-girondales1");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.cordonBleu}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLeCordon}>POUR LE cordon bleu</p>
      </div>
      <img className={styles.cordonBleuChild} alt="" src="/ellipse-23.svg" />
      <img className={styles.cordonBleuItem} alt="" src="/ellipse-27.svg" />
      <div className={styles.div}>45 €</div>
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
      <img className={styles.cordonBleuInner} alt="" src="/ellipse-25.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-28.svg" />
      <div className={styles.div1}>39,5 €</div>
      <img className={styles.cordonBleuChild1} alt="" src="/ellipse-29.svg" />
      <div className={styles.div2}>8€</div>
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
      <div className={styles.copyVerreParent}>
        <div className={styles.copyVerre}>V</div>
        <div className={styles.copyVerre1}>E</div>
        <div className={styles.copyVerre2}>R</div>
        <div className={styles.copyVerre3}>R</div>
        <div className={styles.copyVerre4}>E</div>
      </div>
      <div className={styles.copyVerreParent}>
        <div className={styles.copyVerre}>V</div>
        <div className={styles.copyVerre1}>E</div>
        <div className={styles.copyVerre2}>R</div>
        <div className={styles.copyVerre3}>R</div>
        <div className={styles.copyVerre4}>E</div>
      </div>
      <img className={styles.cordonBleuChild2} alt="" src="/ellipse-251.svg" />
      <img className={styles.cordonBleuChild3} alt="" src="/ellipse-63.svg" />
      <img className={styles.cordonBleuChild4} alt="" src="/ellipse-291.svg" />
      <div className={styles.div3}>30€</div>
      <div className={styles.div4}>6€</div>
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
      <div className={styles.copyVerreContainer}>
        <div className={styles.copyVerre}>V</div>
        <div className={styles.copyVerre1}>E</div>
        <div className={styles.copyVerre2}>R</div>
        <div className={styles.copyVerre3}>R</div>
        <div className={styles.copyVerre4}>E</div>
      </div>
      <div className={styles.groupParent} onClick={onGroupContainer8Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupContainer} onClick={onGroupContainer10Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupParent1} onClick={onGroupContainer12Click}>
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
        <p className={styles.pourLeCordon}>{`2021 `}</p>
      </div>
      <div className={styles.bagatelle}>Bagatelle</div>
      <div className={styles.saumur}>Saumur</div>
      <div className={styles.domaineTatin2020Container}>
        <p className={styles.laSlectionTradevino}>Domaine tatin</p>
        <p className={styles.pourLeCordon}>2020</p>
      </div>
      <div className={styles.laCommanderie}>
        <span className={styles.laCommanderie1}>{`La Commanderie `}</span>
        <span className={styles.span}>{` `}</span>
      </div>
      <div className={styles.reuilly}>Reuilly</div>
      <div className={styles.coteauxDesGirondalesContainer}>
        <p className={styles.laSlectionTradevino}>coteaux des girondales</p>
        <p className={styles.pourLeCordon}>2022</p>
      </div>
      <div className={styles.matta}>mattaÏ</div>
      <div className={styles.hauteSavoie}>Haute-savoie</div>
      <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
      <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      <div className={styles.cordonBleuChild5} />
      <div className={styles.biodynamie}>Biodynamie</div>
      <div className={styles.cordonBleuChild6} />
      <div className={styles.biologique}>Biologique</div>
      <div className={styles.cordonBleuChild7} />
      <div className={styles.biologique1}>Biologique</div>
      <img className={styles.image17Icon} alt="" src="/image-171@2x.png" />
    </div>
  );
};

export default CordonBleu;
