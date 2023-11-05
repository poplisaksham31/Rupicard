import styles from "./cashback.module.css";

const Cashback = ({ width }) => {
  return (
    <div
      style={{ background: "#fff", justifyContent: "center" }}
      className="d-flex"
    >
      <div style={{ width: "80%" }}>
        {width >= 890 ? (
          <div className={`${styles.Cashback}`}>
            <div className={`${styles.LeftHeading} mb-3`}>
              <div>
                <div className={styles.BoldContent}>1% assured cashback on</div>
                <div className={styles.BoldContent}>
                  your spends.The more you
                </div>{" "}
                <div className={styles.NonBoldContent}>
                  spend, the more you earn.
                </div>
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
                width="500px"
                height="500px"
                alt="rupicard"
              />
            </div>
          </div>
        ) : (
          <div className={styles.MobileCashback}>
            <div
              className={styles.ImageContainer}
              style={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={"https://www.uni.cards/images/one_percent_cashback.png"}
                width="500px"
                height="500px"
                alt="rupicard"
              />
            </div>
            <div className={`${styles.LeftHeading} mb-3`}>
              <div>
                <div className={styles.BoldContent}>1% assured cashback on</div>
                <div className={styles.BoldContent}>
                  your spends.The more you
                </div>{" "}
                <div className={styles.NonBoldContent}>
                  spend, the more you earn.
                </div>
              </div>
              <div className={`${styles.SubHeading} mt-3`}>
                <div>
                  Not applicable on fuel purchase, rent & wallet transfers, ATM
                  withdrawals &
                </div>
                <div>international transactions.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cashback;
