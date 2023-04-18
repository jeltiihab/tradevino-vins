import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BoudinNoir.module.css";

const BoudinNoir = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    navigate("/manoir-de-la-tete-rouge-211");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/chateau-barouillet1");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/domaine-la-marle2");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.boudinNoir}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLeBoudin}>POUR LE boudin noir</p>
      </div>
      <div className={styles.domaineLaMarleContainer}>
        <p className={styles.laSlectionTradevino}>Domaine La Marèle</p>
        <p className={styles.pourLeBoudin}>2017</p>
      </div>
      <div className={styles.terrassesDuLarzac}>Terrasses du Larzac</div>
      <img className={styles.boudinNoirChild} alt="" src="/ellipse-25.svg" />
      <img className={styles.boudinNoirItem} alt="" src="/ellipse-25.svg" />
      <img className={styles.boudinNoirInner} alt="" src="/ellipse-26.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-29.svg" />
      <img className={styles.boudinNoirChild1} alt="" src="/ellipse-28.svg" />
      <div className={styles.div}>25€</div>
      <div className={styles.div1}>5,5€</div>
      <div className={styles.div2}>70 €</div>
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
      <div className={styles.chteauBarouillet2021Container}>
        <p className={styles.laSlectionTradevino}>château barouillet</p>
        <p className={styles.pourLeBoudin}>2021</p>
      </div>
      <img className={styles.boudinNoirChild2} alt="" src="/ellipse-25.svg" />
      <img className={styles.boudinNoirChild3} alt="" src="/ellipse-28.svg" />
      <div className={styles.div3}>35 €</div>
      <div className={styles.copyBouteilleContainer}>
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
      <div className={styles.bergerac}>Bergerac</div>
      <div className={styles.larcin}>Larcin</div>
      <div className={styles.copyBouteilleContainer}>
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
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
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
        <p className={styles.pourLeBoudin}>{`2021 `}</p>
      </div>
      <div className={styles.bagatelle}>Bagatelle</div>
      <div className={styles.saumur}>Saumur</div>
      <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      <div className={styles.boudinNoirChild4} />
      <div className={styles.biodynamie}>Biodynamie</div>
      <div className={styles.boudinNoirChild5} />
      <div className={styles.naturel}>Naturel</div>
      <div className={styles.boudinNoirChild6} />
      <div className={styles.biologique}>Biologique</div>
      <img
        className={styles.imageRemovebgPreview22Icon}
        alt=""
        src="/imageremovebgpreview2-22@2x.png"
      />
    </div>
  );
};

export default BoudinNoir;
