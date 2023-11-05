import styles from "./zeroForex.module.css";

const ZeroForex = ({ width }) => {
  return (
    <div className="d-flex" style={{ justifyContent: "center" }}>
      <div style={{ width: "80%" }}>
        {width >= 890 ? (
          <div className={`${styles.Cashback}`}>
            <div className={`${styles.LeftHeading} mb-3`}>
              <div>
                <div className={styles.BoldContent}>Zero Forex Markup.</div>
                <div className={styles.NonBoldContent}>
                  Go international, without
                </div>
                <div className={styles.NonBoldContent}>any fees.</div>
              </div>
            </div>
            <div className={styles.ImageContainer}>
              <img
                src={"https://www.uni.cards/images/forex_globe.png"}
                width="fit-content"
                height={500}
                alt="rupicard"
              />
            </div>
          </div>
        ) : (
          <div className={styles.MobileZeroForex}>
            <div className={styles.ImageContainer}>
              <img
                src={"https://www.uni.cards/images/forex_globe.png"}
                width={250}
                height={250}
                alt="rupicard"
              />
            </div>
            <div className={`${styles.LeftHeading} mb-3`}>
              <div>
                <div className={styles.BoldContent}>Zero Forex Markup.</div>
                <div className={styles.NonBoldContent}>
                  Go international, without
                </div>
                <div className={styles.NonBoldContent}>any fees.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZeroForex;
