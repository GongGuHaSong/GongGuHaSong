import styles from "../css/Productcomponent.module.css";
import { Link } from "react-router-dom";
import fullheart from "../image/fullheart.png";
import emptyheart from "../image/emptyheart.png"
import { useState, useEffect } from "react";
import productimg from "../image/product.jpg"


const Productcomponent = ({product}) => {
    const [like, nonelike] = [fullheart, emptyheart]
    const [heart, setHeart] = useState(false);
    const clickLike = () => {
        setHeart((prev) => !prev);
    }
  

    const [Dday, setDday] = useState("0");
    const calculateDday = () => {
        const today = new Date();
        const endDay = new Date(product.finishDate);
        const distance = endDay.getTime() - today.getTime();
        const day = Math.floor(distance / (1000 * 60 * 60 * 24)*(-1));
        return setDday((prev) => day);
    }

    useEffect(() => {
        calculateDday();
      }, [])
    
    return (
      <div className={styles.productbox}>
        <Link to={`/product/${product._id}`} style={{color: "black"}}>        <div className={styles.productimgbox}>
          <img className={styles.productimg} src={productimg} alt="상품이미지"/>
        </div>
        <div className={styles.datebox}>D{Dday}</div>
        <div className={styles.productcontent}>
          <p className={styles.producttitle}>{product.title}</p>
          <p className={styles.progress}>공구 진행률: </p>
          </div>
          </Link>
        <div className={styles.heart}>
          <img onClick={clickLike} src={heart ? like : nonelike} alt ="찜" style={{width: "40px", height: "40px"}}/>

          </div>

          

    </div>
    )
    
  }

  export default Productcomponent;
