import styles from "./promises.module.css";

const Promises = () => {
  return (
    <div>
          <div className={`${styles.PromiseContainer} pt-5`}>
        <div className={styles.PromiseHeading}>
          At Uni, we’re committed to{" "}
          <span className={styles.ColorGradient}>
            delivering an unmatched credit
          </span>
        </div>
        <div className={styles.PromiseHeading}>
          <span className={styles.ColorGradient}>experience</span> for millions
          of Indians.
        </div>
        <div className={styles.PromiseSubHeading}>
          On this mission, we’ve partnered with some of
        </div>
        <div className={`${styles.PromiseSubHeading} mb-5`}>
          the best in the business.
        </div>
        <div style={{ textAlign: "center" }} className="mt-5">
          <img
            src="https://www.uni.cards/images/SBM.svg"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className={`${styles.RBIHeadingTop} py-5`}>
        <div className={`${styles.PromiseSubHeading} py-1`}>
          Please note that to stay compliant with RBI guidelines, we have
        </div>
        <div className={`${styles.PromiseSubHeading} py-1`}>
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </div>
      </div>
      <div className={`${styles.DownloadContainer} py-5`}>
        <div className={`${styles.DownloadText} me-5`}>
          Download now to get started
        </div>
        <div className="d-flex ms-5">
          <div
            style={{
              border: "2px solid black",
              width: "fit-content",
              cursor: "pointer",
            }}
            className="py-2 px-5 rounded me-1"
          >
            Google Play
          </div>
          <div
            style={{
              border: "2px solid black",
              width: "fit-content",
              cursor: "pointer",
            }}
            className="py-2 px-5 rounded"
          >
            App Store
          </div>
        </div>
      </div>
      <div className={`${styles.RBIHeading}`}>
        <div className={`${styles.PromiseSubHeading}`}>
          Uni maintains the highest level of security standards
        </div>
        <img src={"https://www.uni.cards/images/pcidss_cert.svg"} width={100} height={100}/>
      </div>
    </div>
  );
};

export default Promises;
