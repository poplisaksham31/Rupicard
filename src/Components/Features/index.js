import styles from "./features.module.css";

const Features = ({showAnimation}) => {
  return (
    <div className={`${styles.FeatureHeader} ${showAnimation?styles.AnimationClass:""}`} style={{background:"#fff", justifyContent: "center" }} id="animationDiv">
      <div className={styles.FeatureContent}>
        <div className="mb-1">
          <span className={styles.GreyHeading}>
            Earn 1% assured cashback on your spends.
          </span>{" "}
          Get <span className={styles.GreyHeading}>5X</span>
        </div>
        <div className="mb-1">
          <span className={styles.GreyHeading}>more value than cashback</span>{" "}
          at the Uni Store. Enjoy
        </div>{" "}
        <div className="mb-1">
          round the clock{" "}
          <span className={styles.GreyHeading}>Whatsapp support.</span> And it's
        </div>
        <div className="mb-1">
          <span className={styles.GreyHeading}>lifetime free</span>; no joining
          fee, no annual charges.
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '5rem'}}>
              <div className={`${styles.RoundContainer}`}>
              <img src="https://www.uni.cards/images/down_arrow.svg" width={100} height={100} alt="rupicard"/>
        </div>
        
      </div>
    </div>
  );
};

export default Features;
