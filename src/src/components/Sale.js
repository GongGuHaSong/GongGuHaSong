import styles from "../css/Product.module.css";
import fullheart from "../image/fullheart.png";
import emptyheart from "../image/emptyheart.png"

import { useState } from "react";



const Sale = () => {
  const [like, nonelike] = [fullheart, emptyheart]
  const [heart, setHeart] = useState(false);
    const clickLike = () => {
        setHeart((prev) => !prev);
    }
    return (
      <div className={styles.productbox}>
        
        <div className={styles.productimgbox}>
          <img className={styles.productimg} src="image/product.jpg" alt="상품이미지"/>
        </div>
        <div className={styles.datebox}>D-2</div>
        <div className={styles.productcontent}>
          <p className={styles.producttitle}>숙명 네이비 학잠</p>
          <p className={styles.progress}>공구진행률: /변수</p>
          </div>
        <div className={styles.heart}>
          <img onClick={clickLike} src={heart ? like : nonelike} alt ="찜안함" style={{width: "40px", height: "40px"}}/>

          </div>

      
    </div>
    )
    
  }

  export default Sale;
