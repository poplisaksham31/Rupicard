const FixedNavbar = ({ register, width }) => {
  return (
    <div
      className={`d-flex py-4 ${width>870?"px-5":"px-1"}`}
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        background: "rgb(245, 245, 245)",
        width: "100%",
      }}
    >
      <div
        className="rounded py-1 px-1"
        style={{ background: "#000", width: "fit-content" }}
      >
        <input
          className="py-2 rounded px-3"
          style={{ background: "#000", border: "none", color: "#fff" }}
          placeholder="Enter Phone Number"
          {...register("phoneNumber")}
          min={0}
          type="number"
        ></input>
        <button
          className="py-2 rounded"
          style={{ background: "yellow", border: "1px solid #000" }}
        >
          Apply Now
        </button>
      </div>
      <div className="rounded py-1 px-1 mt-1 d-flex" style={{width: width>870?"": "40%"}}>
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
  );
};

export default FixedNavbar;
