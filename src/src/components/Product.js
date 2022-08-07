import styles from "../css/Info.module.css";
import Period from "./Period";
import { useState, useEffect } from "react";
import nsicon from "../image/nsicon.png"
import { Link, useParams } from "react-router-dom";
import yfullheart from "../image/yfullheart.png"
import yemptyheart from "../image/yemptyheart.png"
import productimage from "../image/product.jpg"
import moment from "moment"

const Product = ({ product }) => {
    // 좋아요
    const [like, nonelike] = [yfullheart, yemptyheart]
    const [heart, setHeart] = useState(false);
    const clickLike = () => {
        setHeart((prev) => !prev);
    }

    // sell id 따오기
    let { id } = useParams;
    let findItem = product.find((item) => {
        return item.id == id;
    })
    // 디데이 계산
    const [Dday, setDday] = useState("0");
    const calculateDday = () => {
        const today = new Date();
        const endDay = new Date(findItem.finishDate);
        const distance = endDay.getTime() - today.getTime();
        const day = Math.floor(distance / (1000 * 60 * 60 * 24)*(-1));
        return setDday((prev) => day);
    }

    useEffect(() => {
        calculateDday();
      }, [])
    
    return (
        <div className={styles.product}>
            <div className={styles.information}>
                <div className={styles.producttitle}>{findItem.title}</div>
                <div className={styles.productmanager}>{findItem.managerId}</div>
                <ul className={styles.image}><img src={productimage} alt="옷" style={{ width: "350px", height: "350px" }} /></ul>
                <ul className={styles.productbox1}>

                    <li>남은 기간</li><br />
                    <li>가격</li><br />
                    <li>공구 진행률</li><br />
                    <li>남은 최소수량</li><br />
                </ul>
                <ul className={styles.productbox2}>
                    <li >D{Dday}</li><br />
                    <li>{findItem.price}</li><br />
                    <li>96%</li><br />
                    <li>2개</li><br />
                </ul>


                <ul className={styles.buttongroup}>
                    <li><Link to="/Gongguapply"><button className={styles.b1}>공구<br />참여하기</button></Link></li>
                    <li><button className={styles.b2}>총대에게<br />쪽지보내기</button></li>
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
                    <p className={styles.content}>{findItem.info}</p>
                </div>

                <div className={styles.box3}><a id="bbb"></a>
                    <p className={styles.intro}><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} /> 진행기간</p>
                    <div className={styles.calendar}> <Period /> </div>
                </div>

                <div className={styles.box3}><a id="ccc"></a>
                    <p className={styles.intro}><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} /> 유의사항</p>
                    <p className={styles.content}>{findItem.notice}</p>
                </div>

            </div>

        </div>
    )
}

export default Product;