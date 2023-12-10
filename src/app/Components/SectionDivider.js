import styles from './sectionDivider.module.css';
const SectionDivider = () =>{
    return(
        <div className={styles.dividerContainer}>
            <p className={styles.firstDivider}>-</p>
            <p className={styles.secondDivider}>-</p>
            <p className={styles.thirdDivider}>-</p>
        </div>
    );
}

export default SectionDivider;
