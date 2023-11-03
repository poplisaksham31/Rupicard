import styles from "./topNavbar.module.css";

const TopNavbar = ({register}) => {
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <video
        src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={styles.VideoPlayer}
      ></video>
      <div
        style={{
          height: "100vh",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={`${styles.TopBar} mt-5`}>
          <div style={{fontSize: '40px', fontWeight: '800'}}>Uni</div>
          <div>
            <button
              className="rounded px-3 py-2"
              style={{
                fontWeight: "600",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
              }}
            >
              Uni Paycheck
            </button>
          </div>
        </div>
        <div
          className="d-flex mt-5"
          style={{ width: "80%", alignItems: "center" }}
        >
          <div style={{ width: "50%" }}>
            <div className={styles.NxWave}>
              <span style={{ fontWeight: "800" }}>NX Wave.</span> The next-gen
            </div>
            <div className={styles.NxWave}>credit card for those who</div>
            <div className={styles.NxWave}>love rewards.</div>
            <div style={{ fontWeight: "600" }}>
              1% Cashback5x + RewardsZero + Forex Markup
            </div>
            <div
              className="rounded py-1 px-1 mt-5"
              style={{ background: "#000", width: "fit-content" }}
              id="navBar"
            >
              <input
                className="py-2 rounded px-3 disableInputArrow"
                style={{ background: "#000", border: "none",color: "#fff"  }}
                placeholder="Enter Phone Number"
                {...register("phoneNumber")}
                type="number"
              ></input>
              <button
                className="py-2 rounded"
                style={{ background: "yellow", border: "1px solid #000" }}
              >
                Apply Now
              </button>
            </div>
            <div
              className="rounded py-1 px-1 mt-1 d-flex"
              style={{ width: "60%" }}
            >
              <input
                className="py-2 rounded px-3 me-2"
                style={{ background: "#000", border: "none" }}
                type="checkbox"
                {...register("agreed")}
              ></input>
              <div style={{ fontSize: "10px" }}>
                You agree to be contacted by Uni Cards over Call, SMS, Email or
                WhatsApp to guide you through your application.
              </div>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <img
              src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
