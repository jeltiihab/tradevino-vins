import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entrecte.module.css";

const Entrecte = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    navigate("/domaine-rveille");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/domaine-mas-de-libian");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/chateau-hautmarbuzet");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.entrecte}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLentrecte}>POUR L’entrecôte</p>
      </div>
      <div className={styles.vignoblesRveille2014Container}>
        <p className={styles.laSlectionTradevino}>Vignobles réveille</p>
        <p className={styles.pourLentrecte}>{`2014 `}</p>
      </div>
      <div className={styles.domaineMasDeContainer}>
        <p className={styles.laSlectionTradevino}>Domaine Mas de libian</p>
        <p className={styles.pourLentrecte}>2019</p>
      </div>
      <div className={styles.boutdzan}>Bout'dzan</div>
      <div className={styles.cuveUltraViolet}>cuvée Ultra violet</div>
      <div className={styles.ctesDuRoussillon}>Côtes du Roussillon</div>
      <div className={styles.ctesDuRhne}>Côtes du Rhône</div>
      <img className={styles.entrecteChild} alt="" src="/ellipse-25.svg" />
      <img className={styles.entrecteItem} alt="" src="/ellipse-25.svg" />
      <img className={styles.entrecteInner} alt="" src="/ellipse-25.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-26.svg" />
      <img className={styles.entrecteChild1} alt="" src="/ellipse-29.svg" />
      <img className={styles.entrecteChild2} alt="" src="/ellipse-28.svg" />
      <img className={styles.entrecteChild3} alt="" src="/ellipse-28.svg" />
      <div className={styles.div}>30€</div>
      <div className={styles.div1}>6€</div>
      <div className={styles.div2}>48 €</div>
      <div className={styles.div3}>70 €</div>
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
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
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
      <div className={styles.domaineLaMarleContainer}>
        <p className={styles.laSlectionTradevino}>Domaine La Marèle</p>
        <p className={styles.pourLentrecte}>2017</p>
      </div>
      <div className={styles.terrassesDuLarzac}>Terrasses du Larzac</div>
      <div className={styles.entrecteChild4} />
      <div className={styles.naturel}>Naturel</div>
      <div className={styles.entrecteChild5} />
      <div className={styles.biodynamie}>Biodynamie</div>
      <div className={styles.entrecteChild6} />
      <div className={styles.biologique}>Biologique</div>
      <img
        className={styles.imageRemovebgPreview2Icon}
        alt=""
        src="/imageremovebgpreview-2@2x.png"
      />
      <img
        className={styles.imageRemovebgPreview22Icon}
        alt=""
        src="/imageremovebgpreview2-22@2x.png"
      />
    </div>
  );
};

export default Entrecte;
