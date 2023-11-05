import styles from "./lifetimeFree.module.css";

const LifetimeFree = ({width}) => {
    return (
        <div className={styles.TopHeader} style={{fontSize: width>870?"45px":"30px"}}>
            <div style={{textAlign: 'center'}}>Lifetime <span style={{color: "#65ECD8"}}>free.</span> No joining fee.</div>
            <div style={{textAlign: 'center'}}>No annual charges.</div>
        </div>
    )

}

export default LifetimeFree;