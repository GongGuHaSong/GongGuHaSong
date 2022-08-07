import React from 'react';
import styles from '../css/App.module.css';
import { Link, useParams } from "react-router-dom";
import Menubar from '../components/Menubar';
import Title from '../components/Title';
import Product from '../components/Product';
import Productlead from '../components/Productlead';
import { useState, useEffect } from 'react';

const Productpage = ({product}) => {
    // const [productpage, setProductpage] = useState(false);
    // useEffect(() => {
    //     if(productpage) {       //sessionid=product.managerid
    //         setProductpage((prev) => !prev)
      
    //     } else {
    //         setProductpage((prev) => prev)
    //     }
    // }, [])
    // let {id} = useParams();
    // console.log({product})
    // return (
    //     <div className={styles.root}>
    //         <div className={styles.menugrid}><Menubar /></div>
    //         <div className={styles.content}>
    //             <Title />
    //             {productpage ? <Productlead product={product} />:<Product product={product} />}
                
    //             </div>
    //     </div>
    // )    
    return (
        <div className={styles.root}>
            <div className={styles.menugrid}><Menubar /></div>
            <div className={styles.content}>
                <Title />
                <Productlead product={product} />
                
                </div>
        </div>
    )

}

export default Productpage;