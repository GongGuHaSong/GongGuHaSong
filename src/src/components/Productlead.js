import styles from "../css/Info.module.css";
import { useState } from "react";
import Period from "./Period";
import fullheart from "../image/yfullheart.png";
import emptyheart from "../image/emptyheart.png"
import nsicon from "../image/nsicon.png"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const Productlead = ({product}) => {
    const [like, nonelike] = [fullheart, emptyheart]
    const [heart, setHeart] = useState(false);
    const clickLike = () => {
        setHeart((prev) => !prev);
    }
    const [open, setOpen] = useState(false);
    const onChange = () => {
        setOpen((prev) => !prev);
    }

    let { id } = useParams;
    let findItem = product.find((item) => {
        return item.id == id;
    })


    return (
        <div className={styles.quantity}>
            <div className={styles.information}>
                <ul className={styles.image}><img src="image/fullheart.png" alt="옷" style={{ width: "350px", height: "350px" }} /></ul>
                <ul className={styles.productbox1}>
                    <li>남은 기한</li><br />
                    <li>가격</li><br />
                    <li>공구진행률</li><br />
                    <li>남은 최소수량</li><br />
                </ul>
                <ul className={styles.box2}>
                    <li>D-2</li><br />
                    <li>43,000원</li><br />
                    <li>96%</li><br />
                    <li>2개</li><br />
                </ul>


                <ul className={styles.buttongroup}>
                    <li><button className={styles.b1}>수정하기</button></li>
                    <li><Link to={`/check/${product._id}`} style={{color: "black"}}>  <button className={styles.b2}>신청자정보<br/>확인하기</button></Link></li>
                    <li><div className={styles.heart}>
                        <img onClick={clickLike} src={heart ? like : nonelike} alt="찜안함" style={{ width: "70px", height: "70px" }} /></div>
                    </li>

                </ul>

                <ul className={styles.navbar_dname}>
                    <a href="#aaa"><li>상세정보</li></a>
                    <a href="#bbb"><li>진행기간</li></a>
                    <a href="#ccc"><li>유의사항</li></a>
                </ul>
                <div className={styles.line}></div>
            </div>

        
            <div className={styles.boxes}>
                
                <div className={styles.box3}><a id="aaa"></a>
                    <p className={styles.intro}><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} /> 프로젝트 소개</p>
                </div>

                <div className={styles.box3}><a id="bbb"></a>
                    <p className={styles.intro}><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} /> 진행기간</p>
                    <div className={styles.calendar}> <Period /> </div>
                </div>

                <div className={styles.box3}><a id="ccc"></a>
                    <p className={styles.intro}><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} /> 유의사항</p>

                </div>

        </div>

        </div>

    )
}


export default Productlead;