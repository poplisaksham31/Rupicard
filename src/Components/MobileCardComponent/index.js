import styles from "./mobileCardComponent.module.css";

const MobileCardComponent = () => {
  return (
    <div className={styles.NavBar}>
      <div
        className={`row ${styles.BottomNavbar} py-5 justify-content-xs-center`}
      >
        <div
          className="col-xs-8 d-flex mb-5"
          style={{ justifyContent: "space-between" }}
        >
          <div className={styles.InstantCredit}>
            <div>We’ve all heard of instant</div>
            <div>groceries, now say hello to</div>
            <div className={styles.ColorVariant}>instant credit.</div>
            <div style={{ fontSize: "20px", color: "rgba(191,201,204)" }}>
              0% hassle, 100% paperless. Get your
            </div>
            <div style={{ fontSize: "20px", color: "rgba(191,201,204)" }}>
              Uni Card instantly.
            </div>
          </div>
          <div>
            <img
              src={"https://www.uni.cards/images/one_percent_cashback.png"}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div
          className="col-xs-8 d-flex mt-5"
          style={{ justifyContent: "space-between" }}
        >
          <div className={styles.InstantCredit}>
            <div>With Uni,</div>
            <div className={styles.ColorVariant}>you’re always in control.</div>
            <div style={{ fontSize: "20px", color: "rgba(191,201,204)" }}>
              Set your own payment limits. Choose how and where you
            </div>
            <div style={{ fontSize: "20px", color: "rgba(191,201,204)" }}>
              spend. Lock and unlock your card. All right from the app.
            </div>
          </div>
          <div>
            <img
              src={"https://www.uni.cards/images/one_percent_cashback.png"}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div
          className="col-xs-8 d-flex mt-5"
          style={{ justifyContent: "space-between" }}
        >
                  <div className={styles.PublicityCard}>
                      <img src={"https://www.uni.cards/images/one_percent_cashback.png"} width={100} height={100}/>
                      <div>Help, just a WhatsApp away.</div>
                      <div>Anytime, Anyday.</div>
                      <div style={{fontSize: '1rem', color: "rgba(191,201,204)"}}>During hectic work hours. On lazy</div>
                      <div style={{fontSize: '1rem', color: "rgba(191,201,204)"}}>sunday mornings. In the thick of night.</div>
                      <div style={{fontSize: '1rem', color: "rgba(191,201,204)"}}>Anytime.</div>
                  </div>
                  <div className={styles.PublicityCard}>
                      <img src={"https://www.uni.cards/images/one_percent_cashback.png"} width={100} height={100}/>
                      <div>No hidden charges, no last</div>
                      <div>minute surprises.</div>
                      <div style={{fontSize: '1rem', color: "rgba(191,201,204)"}}>100% money back guarantee if a</div>
                      <div style={{fontSize: '1rem', color: "rgba(191,201,204)"}}>charge is applied without your</div>
                      <div style={{fontSize: '1rem', color: "rgba(191,201,204)"}}>knowledge.</div>
                  </div>
                  <div className={styles.PublicityCard}>
                      <img src={"https://www.uni.cards/images/one_percent_cashback.png"} width={100} height={100}/>
                      <div>Super secure. Because we</div>
                      <div>care about your money.</div>
                      <div><img src="https://www.uni.cards/images/pcidss_cert.svg" width={100} height={100}/></div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCardComponent;
