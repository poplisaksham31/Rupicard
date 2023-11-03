import styles from "./bottomNavBar.module.css";

const BottomNavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div
        className={`row ${styles.BottomNavbar} py-5 justify-content-xs-center`}
      >
        <div className="col-xs-8">
          <div className={`row ${styles.Address}`}>
            <div>Indiqube Sigma No.3/B, Nexus</div>
            <div>Koramangala 3rd Block SBI Colony,</div>
            <div>Koramangala, Bengaluru, Karnataka</div>
            <div className="mb-2">560034</div>
            <div>Contact Us: 080 68216821</div>
            <div className="mb-3">Email: care@uni.club</div>
          </div>
          <div className={styles.TopBorder}></div>
          <div className={`row ${styles.Grievance} py-3`}>
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              Grievance Redressal Mechanism
            </span>{" "}
            - SBM Bank India
          </div>
          <div className={styles.BottomBorder}></div>
          <div
            className="d-flex mt-4"
            style={{ flexDirection: "row", color: "#fff" }}
          >
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", width: "40%" }}
            >
              <div style={{ cursor: "pointer" }}>Instagram</div>
              <div style={{ cursor: "pointer" }}>LinkedIn</div>
              <div style={{ cursor: "pointer" }}>Twitter</div>
              <div style={{ cursor: "pointer" }}>Facebook</div>
              <div style={{ cursor: "pointer" }}>Careers</div>
            </div>
            <div style={{ width: "15%" }}></div>
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", width: "45%" }}
            >
              <div
                style={{ cursor: "pointer", borderRight: "1px solid #fff" }}
                className="px-3"
              >
                Credit Card KFS{" "}
              </div>
              <div
                style={{ cursor: "pointer", borderRight: "1px solid #fff" }}
                className="px-3"
              >
                Credit Card T&Cs
              </div>
              <div
                style={{ cursor: "pointer", borderRight: "1px solid #fff" }}
                className="px-3"
              >
                Uni T&Cs
              </div>
              <div style={{ cursor: "pointer" }} className="px-3">
                Lending Partner TnCs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
