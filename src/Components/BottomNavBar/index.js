import styles from "./bottomNavBar.module.css";

const BottomNavBar = ({width}) => {
  return (
    <div className={styles.NavBar}>
      <div
        className={`row ${styles.BottomNavbar} py-5 justify-content-xs-center`}
      >
        <div>
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
          {width> 900?<div
            className="d-flex mt-4"
            style={{ flexDirection: "row", color: "#fff", marginBottom: "60px" }}
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
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", width: "60%" }}
            >
              <div
                style={{ cursor: "pointer", borderRight: "1px solid #fff" , whiteSpace: "nowrap" }}
                className="px-2"
              >
                Credit Card KFS{" "}
              </div>
              <div
                style={{ cursor: "pointer", borderRight: "1px solid #fff", whiteSpace: "nowrap" }}
                className="px-2"
              >
                Credit Card T&Cs
              </div>
              <div
                style={{ cursor: "pointer", borderRight: "1px solid #fff", whiteSpace: "nowrap" }}
                className="px-2"
              >
                Uni T&Cs
              </div>
              <div style={{ cursor: "pointer" , whiteSpace: "nowrap"}} className="px-2">
                Lending Partner TnCs
              </div>
            </div>
          </div> : <div style={{ color: "#fff", flexDirection: "column", alignItems: "center", marginBottom: "100px" }} className="d-flex">
              <div className="d-flex mt-2" style={{justifyContent: 'space-between', width: "70%"}}>
          <div style={{ cursor: "pointer" }}>Instagram</div>
              <div style={{ cursor: "pointer" }}>LinkedIn</div>
                <div style={{ cursor: "pointer" }}>Twitter</div>
              </div>
              <div className="d-flex mb-2" style={{justifyContent: 'space-between', width:"40%"}}>
              <div style={{ cursor: "pointer" }}>Facebook</div>
                <div style={{ cursor: "pointer" }}>Careers</div>
              </div>
              <div className="d-flex mt-2" style={{justifyContent: 'space-between', width:"60%"}}>
                <div style={{ cursor: "pointer", whiteSpace: "nowrap" }}>Credit Card KFS</div>
                <div>|</div>
                <div style={{ cursor: "pointer", whiteSpace: "nowrap" }}>Credit Card T&Cs</div>
                <div>|</div>
              </div>
              <div className="d-flex mb-2" style={{justifyContent: 'space-between', width: "50%"}}>
                <div style={{ cursor: "pointer", whiteSpace: "nowrap" }}>Uni T&Cs</div>
                <div>|</div>
                <div style={{ cursor: "pointer", whiteSpace: "nowrap" }}>Lending Partner TnCs</div>
                </div>
            
          </div>}
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
