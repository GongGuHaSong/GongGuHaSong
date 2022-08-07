import React from 'react';
import styles from '../css/App.module.css';
import Newgonggu from '../components/Newgonggu';
import Menubar from '../components/Menubar';
import Title from '../components/Title';


const Newgonggupage = () => {
    return (
        <div className={styles.root}>
        <div className={styles.menugrid}><Menubar /></div>
        <div className={styles.content}>
          <Title />

          <Newgonggu />
        </div>
  
  
      </div>
    )
}


export default Newgonggupage;