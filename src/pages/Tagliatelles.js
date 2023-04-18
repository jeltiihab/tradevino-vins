import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Tagliatelles.module.css";

const Tagliatelles = () => {
  const navigate = useNavigate();

  const onGroupContainer7Click = useCallback(() => {
    navigate("/domaine-tatin-21");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/domaine-ray-jane");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/domaine-la-marle1");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.tagliatelles}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLesTagliatelles}>POUR LEs Tagliatelles</p>
      </div>
      <div className={styles.domaineRayJane2017Container}>
        <p className={styles.laSlectionTradevino}>Domaine ray-jane</p>
        <p className={styles.pourLesTagliatelles}>2017</p>
      </div>
      <div className={styles.domaineLaMarleContainer}>
        <p className={styles.laSlectionTradevino}>Domaine La Marèle</p>
        <p className={styles.pourLesTagliatelles}>2017</p>
      </div>
      <div className={styles.bandol}>Bandol</div>
      <div className={styles.terrassesDuLarzac}>Terrasses du Larzac</div>
      <img className={styles.tagliatellesChild} alt="" src="/ellipse-25.svg" />
      <img className={styles.tagliatellesItem} alt="" src="/ellipse-25.svg" />
      <img className={styles.tagliatellesInner} alt="" src="/ellipse-28.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-28.svg" />
      <div className={styles.div}>45 €</div>
      <div className={styles.div1}>70 €</div>
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
      <div className={styles.domaineTatin2020Container}>
        <p className={styles.laSlectionTradevino}>Domaine tatin</p>
        <p className={styles.pourLesTagliatelles}>2020</p>
      </div>
      <div className={styles.laCommanderie}>
        <span className={styles.laCommanderie1}>{`La Commanderie `}</span>
        <span className={styles.span}>{` `}</span>
      </div>
      <div className={styles.reuilly}>Reuilly</div>
      <img className={styles.tagliatellesChild1} alt="" src="/ellipse-25.svg" />
      <img className={styles.tagliatellesChild2} alt="" src="/ellipse-28.svg" />
      <div className={styles.div2}>39,5 €</div>
      <img className={styles.tagliatellesChild3} alt="" src="/ellipse-29.svg" />
      <div className={styles.div3}>8€</div>
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
      <div className={styles.groupParent} onClick={onGroupContainer7Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupContainer} onClick={onGroupContainer9Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <div className={styles.groupParent1} onClick={onGroupContainer11Click}>
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
      <div className={styles.tagliatellesChild4} />
      <div className={styles.biologique}>Biologique</div>
      <div className={styles.tagliatellesChild5} />
      <div className={styles.biologique1}>Biologique</div>
      <div className={styles.tagliatellesChild6} />
      <div className={styles.biologique2}>Biologique</div>
      <img className={styles.image17Icon} alt="" src="/image-171@2x.png" />
      <img
        className={styles.imageRemovebgPreview22Icon}
        alt=""
        src="/imageremovebgpreview2-22@2x.png"
      />
      <img
        className={styles.imageRemovebgPreview31Icon}
        alt=""
        src="/imageremovebgpreview3-1@2x.png"
      />
    </div>
  );
};

export default Tagliatelles;
