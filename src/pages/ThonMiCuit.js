import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ThonMiCuit.module.css";

const ThonMiCuit = () => {
  const navigate = useNavigate();

  const onGroupContainer7Click = useCallback(() => {
    navigate("/chateau-lagrange-22");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/coteaux-des-girondales-22");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/heritage-du-pic-22-blanc");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/accueil-3");
  }, [navigate]);

  return (
    <div className={styles.thonMiCuit}>
      <div className={styles.laSlectionTradevinoContainer}>
        <p className={styles.laSlectionTradevino}>La sélection Tradevino</p>
        <p className={styles.pourLeThon}>POUR LE THON MI-CUIT</p>
      </div>
      <div className={styles.chteauLagrange2022Container}>
        <p className={styles.laSlectionTradevino}>Château Lagrange</p>
        <p className={styles.pourLeThon}>{`2022 `}</p>
      </div>
      <div className={styles.coteauxDesGirondalesContainer}>
        <p className={styles.laSlectionTradevino}>coteaux des girondales</p>
        <p className={styles.pourLeThon}>2022</p>
      </div>
      <div className={styles.heritageDuPicContainer}>
        <p className={styles.laSlectionTradevino}>Heritage du Pic</p>
        <p className={styles.pourLeThon}>2022</p>
      </div>
      <div className={styles.ceuxDaprs}>Ceux d’après…</div>
      <div className={styles.sainteAgnsBlanc}>Sainte Agnès blanc</div>
      <div className={styles.entreDeuxMers}>Entre-deux-Mers</div>
      <div className={styles.hauteSavoie}>Haute-Savoie</div>
      <div className={styles.languedoc}>Languedoc</div>
      <img className={styles.thonMiCuitChild} alt="" src="/ellipse-25.svg" />
      <img className={styles.thonMiCuitItem} alt="" src="/ellipse-25.svg" />
      <div className={styles.thonMiCuitInner} />
      <div className={styles.biologique}>Biologique</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.biologique1}>Biologique</div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-25.svg" />
      <img className={styles.thonMiCuitChild1} alt="" src="/ellipse-26.svg" />
      <img className={styles.thonMiCuitChild2} alt="" src="/ellipse-29.svg" />
      <img className={styles.thonMiCuitChild3} alt="" src="/ellipse-28.svg" />
      <img className={styles.thonMiCuitChild4} alt="" src="/ellipse-28.svg" />
      <div className={styles.div}>25€</div>
      <div className={styles.div1}>5€</div>
      <div className={styles.div2}>39,5 €</div>
      <div className={styles.div3}>60 €</div>
      <img className={styles.thonMiCuitChild5} alt="" src="/ellipse-29.svg" />
      <div className={styles.div4}>8€</div>
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
      <div className={styles.copyVerreGroup}>
        <div className={styles.copyVerre}>V</div>
        <div className={styles.copyVerre1}>E</div>
        <div className={styles.copyVerre2}>R</div>
        <div className={styles.copyVerre3}>R</div>
        <div className={styles.copyVerre4}>E</div>
      </div>
      <div className={styles.copyVerreGroup}>
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
      <div className={styles.groupDiv} onClick={onGroupContainer11Click}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.jeDcouvre}>Je découvre</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
      <img
        className={styles.vectorIcon1}
        alt=""
        src="/vector3.svg"
        onClick={onVectorIcon1Click}
      />
      <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
      <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
      <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
      <div className={styles.thonMiCuitChild6} />
      <div className={styles.biodynamie}>Biodynamie</div>
    </div>
  );
};

export default ThonMiCuit;
