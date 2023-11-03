import styles from "./cashback.module.css";

const Cashback = () => {
  return (
    <div  style={{background:"#fff", justifyContent: "center" }} className="d-flex">
      <div style={{width: "80%"}}>
      <div className={`${styles.Cashback} col-xs-8`}>
      <div className={`${styles.LeftHeading} mb-3`}>
        <div>
          <div className={styles.BoldContent}>1% assured cashback on</div>
          <div className={styles.BoldContent}>your spends.The more you</div>{" "}
          <div className={styles.NonBoldContent}>spend, the more you earn.</div>
        </div>
        <div className={`${styles.SubHeading} mt-3`}>
          <div>
            Not applicable on fuel purchase, rent & wallet transfers, ATM
            withdrawals &
          </div>
          <div>international transactions.</div>
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <img
          src={"https://www.uni.cards/images/one_percent_cashback.png"}
          width={500}
          height={500}
        />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Cashback;
