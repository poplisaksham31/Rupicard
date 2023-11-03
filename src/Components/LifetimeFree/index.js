import styles from "./lifetimeFree.module.css";

const LifetimeFree = () => {
    return (
        <div className={styles.TopHeader}>
            <div style={{textAlign: 'center'}}>Lifetime <span style={{color: "#65ECD8"}}>free.</span> No joining fee.</div>
            <div style={{textAlign: 'center'}}>No annual charges.</div>
        </div>
    )

}

export default LifetimeFree;