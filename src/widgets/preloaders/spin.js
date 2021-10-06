import React from 'react';
import styles from './styles.module.css';

const Preloader = ()=>{
    return(
        <div className={styles.preloader_spin}>
            <div className={styles.loader}>
                <hr/>
                <hr/>
            </div>
        </div>
    )
}

export default Preloader;