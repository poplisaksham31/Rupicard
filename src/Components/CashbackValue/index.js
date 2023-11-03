import styles from "./cashbackValue.module.css";

const CashbackValue = () => {
  return (
    <div style={{background:"#fff", justifyContent: "center" }} className="d-flex">
      <div style={{width: "80%"}}>
    <div className={`${styles.Cashback} mt-5 col-xs-8`}>
      <div className={styles.ImageContainer}>
        <img
          src={"https://www.uni.cards/images/five_x_rewards.png"}
          width={500}
          height={500}
        />
          </div>
          <div className={`${styles.LeftHeading} mb-3`}>
        <div>
          <div className={styles.BoldContent}>5x more value than your</div>
          <div className={styles.NonBoldContent}><span className={styles.BoldContent} style={{color: "#000"}}>cashback,</span> only at the Uni</div>{" "}
          <div className={styles.NonBoldContent}>Store.</div>
        </div>
      </div>
        </div>
        </div>
      </div>
  );
};

export default CashbackValue;
