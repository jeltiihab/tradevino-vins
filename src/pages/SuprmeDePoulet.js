import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuprmeDePoulet.module.css";

const SuprmeDePoulet = () => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/domaine-coulet");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/domaine-tatin");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/domaine-vincent-fleith");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.suprmeDePoulet}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourSuprmeDe}>POUR suprême de poulet</p>
      </div>
      <div className={styles.domaineCoulet2021Container}>
        <p className={styles.laSlectionTradevino}>domaine coulet</p>
        <p className={styles.pourSuprmeDe}>{`2021 `}</p>
      </div>
      <div className={styles.tourDeBaulx}>tour de baulx</div>
      <div className={styles.coteauxDuLanguedoc}>Coteaux-du-languedoc</div>
      <img
        className={styles.suprmeDePouletChild}
        alt=""
        src="/ellipse-25.svg"
      />
      <img className={styles.suprmeDePouletItem} alt="" src="/ellipse-26.svg" />
      <img
        className={styles.suprmeDePouletInner}
        alt=""
        src="/ellipse-29.svg"
      />
      <div className={styles.div}>30€</div>
      <div className={styles.div1}>6€</div>
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
      <div className={styles.copyVerreParent}>
        <div className={styles.copyVerre}>V</div>
        <div className={styles.copyVerre1}>E</div>
        <div className={styles.copyVerre2}>R</div>
        <div className={styles.copyVerre3}>R</div>
        <div className={styles.copyVerre4}>E</div>
      </div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-25.svg" />
      <img
        className={styles.suprmeDePouletChild1}
        alt=""
        src="/ellipse-25.svg"
      />
      <img
        className={styles.suprmeDePouletChild2}
        alt=""
        src="/ellipse-28.svg"
      />
      <div className={styles.div2}>60 €</div>
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
      <div className={styles.groupParent} onClick={onGroupContainer4Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupContainer} onClick={onGroupContainer6Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer8Click}>
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
      <div className={styles.domaineTatin2020Container}>
        <p className={styles.laSlectionTradevino}>Domaine tatin</p>
        <p className={styles.pourSuprmeDe}>2020</p>
      </div>
      <div className={styles.laCommanderie}>
        <span className={styles.laCommanderie1}>{`La Commanderie `}</span>
        <span className={styles.span}>{` `}</span>
      </div>
      <div className={styles.reuilly}>Reuilly</div>
      <img
        className={styles.suprmeDePouletChild3}
        alt=""
        src="/ellipse-28.svg"
      />
      <div className={styles.div3}>39,5 €</div>
      <img
        className={styles.suprmeDePouletChild4}
        alt=""
        src="/ellipse-29.svg"
      />
      <div className={styles.div4}>8€</div>
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
      <div className={styles.domaineVincentFleithContainer}>
        <p className={styles.laSlectionTradevino}>domaine Vincent fleith</p>
        <p className={styles.pourSuprmeDe}>2019</p>
      </div>
      <div className={styles.letzenberg}>Letzenberg</div>
      <div className={styles.alsace}>Alsace</div>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <img className={styles.image32Icon} alt="" src="/image-32@2x.png" />
      <img className={styles.image36Icon} alt="" src="/image-36@2x.png" />
      <div className={styles.suprmeDePouletChild5} />
      <div className={styles.biologique}>Biologique</div>
      <div className={styles.suprmeDePouletChild6} />
      <div className={styles.biologique1}>Biologique</div>
      <div className={styles.suprmeDePouletChild7} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default SuprmeDePoulet;
