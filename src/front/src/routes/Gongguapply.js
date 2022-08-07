import React from 'react';
import styles from '../css/App.module.css';
import Menubar from '../components/Menubar';
import Gongguapply from '../components/Gongguapply';
import Title from '../components/Title';

function Gongguapplypage() {
    return (
        <div className={styles.root}>
        <div className={styles.menugrid}><Menubar /></div>
        <div className={styles.content}>
          <Title />
          <Gongguapply />
        </div>
        </div>
  
    )
}

export default Gongguapplypage;