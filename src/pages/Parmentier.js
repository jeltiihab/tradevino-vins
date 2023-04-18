import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Parmentier.module.css";

const Parmentier = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    navigate("/domaine-rveille1");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/chateau-barouillet");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/domaine-la-marle");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.parmentier}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLeParmentier}>POUR LE parmentier</p>
      </div>
      <div className={styles.domaineLaMarleContainer}>
        <p className={styles.laSlectionTradevino}>Domaine La Marèle</p>
        <p className={styles.pourLeParmentier}>2017</p>
      </div>
      <div className={styles.barouillet2021}>
        <p className={styles.laSlectionTradevino}>barouillet</p>
        <p className={styles.pourLeParmentier}>2021</p>
      </div>
      <div className={styles.terrassesDuLarzac}>Terrasses du Larzac</div>
      <img className={styles.parmentierChild} alt="" src="/ellipse-25.svg" />
      <img className={styles.parmentierItem} alt="" src="/ellipse-25.svg" />
      <img className={styles.parmentierInner} alt="" src="/ellipse-28.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-28.svg" />
      <div className={styles.div}>35 €</div>
      <div className={styles.div1}>60 €</div>
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
      <div className={styles.domaineRveill2014Container}>
        <p className={styles.laSlectionTradevino}>domaine réveillé</p>
        <p className={styles.pourLeParmentier}>{`2014 `}</p>
      </div>
      <div className={styles.ultraViolet}>Ultra violet</div>
      <div className={styles.ctesDuRoussillon}>Côtes du Roussillon</div>
      <div className={styles.bergerac}>Bergerac</div>
      <img className={styles.parmentierChild1} alt="" src="/ellipse-251.svg" />
      <img className={styles.parmentierChild2} alt="" src="/ellipse-63.svg" />
      <img className={styles.parmentierChild3} alt="" src="/ellipse-291.svg" />
      <div className={styles.div2}>30€</div>
      <div className={styles.div3}>6€</div>
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
      <div className={styles.copyVerreParent}>
        <div className={styles.copyVerre}>V</div>
        <div className={styles.copyVerre1}>E</div>
        <div className={styles.copyVerre2}>R</div>
        <div className={styles.copyVerre3}>R</div>
        <div className={styles.copyVerre4}>E</div>
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
      <div className={styles.parmentierChild4} />
      <div className={styles.naturel}>Naturel</div>
      <div className={styles.parmentierChild5} />
      <div className={styles.naturel1}>Naturel</div>
      <div className={styles.parmentierChild6} />
      <div className={styles.biologique}>Biologique</div>
      <div className={styles.larcin}>Larcin</div>
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <img
        className={styles.imageRemovebgPreview22Icon}
        alt=""
        src="/imageremovebgpreview2-22@2x.png"
      />
      <img className={styles.image19Icon} alt="" src="/image-191@2x.png" />
    </div>
  );
};

export default Parmentier;
