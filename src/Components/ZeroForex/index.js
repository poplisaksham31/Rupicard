import styles from "./zeroForex.module.css";

const ZeroForex = () => {
  return (
    <div className="container">
      <div className="row justify-content-xs-center">
    <div className={`${styles.Cashback} col-xs-8`}>
    <div className={`${styles.LeftHeading} mb-3`}>
      <div>
        <div className={styles.BoldContent}>Zero Forex Markup.</div>
        <div className={styles.NonBoldContent}>Go international, without</div>
        <div className={styles.NonBoldContent}>any fees.</div>
      </div>
    </div>
    <div className={styles.ImageContainer}>
      <img
        src={"https://www.uni.cards/images/forex_globe.png"}
        width={500}
        height={500}
      />
    </div>
        </div>
        </div>
      </div>
  );
};

export default ZeroForex;
