import React, { useEffect, useState } from 'react';
import styles from '../css/App.module.css';
import Menubar from '../components/Menubar';
import Check from '../components/Check';
import Title from '../components/Title';

import axios from "axios";



const Checkpage = () => {
    const [check, getCheck] = useState([]);
    // const getProducts = async() => {
    //   const products = await axios.get("http://localhost:8082/sell/all");
    //   console.log(products);
    // }
    // useEffect(() => {
    //   getProducts();
    // }, [])
    const getChecks = async() => {
      const checks = await axios.get('./order.json');
      
      getCheck(checks.data);
    console.log(check);
      
    }
      getChecks();
  

    return (
        <div className={styles.root}>
            <div className={styles.menugrid}><Menubar /></div>
            <div className={styles.content}>
                <Title />
                <Check check={check}/>

            </div>

        </div>
    )
}

export default Checkpage;