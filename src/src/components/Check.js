import React from 'react';
import styles from '../css/Check.module.css';
import productimg from "../image/product.jpg"
import { useParams } from "react-router-dom";



const Check = ({check}) => {

    let { id } = useParams;
    console.log(id)
    let findItem = check.find((item) => {
        return item.id == id;
    })
    console.log(findItem)
    return (
        <div className={styles.check}>
            <div className={styles.tab}>
                <div className={styles.formname}>
                    공구 신청자 리스트
                </div>
                <div className={styles.line1}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.information}>

                    <img className={styles.image} src={productimg} height="280" width="280" alt=" 옷" />

                    <h2 className={styles.name}>숙명 영문 네이비 학잠</h2>
                    <ul className={styles.box1}>
                        <li>남은 기한</li>
                        <li>수량조사 진행률</li>
                        <li>수량조사 참여 수</li>
                    </ul>
                    <ul className={styles.box2}>
                        <li>D-2</li>
                        <li>96%</li>
                        <li>32개</li>
                    </ul>

                </div>
            </div>

            <div className={styles.infotab}>

                <div className={styles.info}>

                    <ul className={styles.navbar_dname}>
                        <li >아이디</li>
                        <li >총 수량</li>
                        <li >구매옵션</li>
                        <li >입금시간</li>
                        <li >입금자명</li>
                        <li >배부방식</li>
                        <li >연락처</li>


                    </ul>


                    <div className={styles.line2}></div>

                    

                </div>
            </div>
            
            {check && findItem.map(check =>
                        <Person key={findItem.userId} checkperson={findItem} id={id}/>
                    )}

        </div >


    )
}


const Person = ({findItem, id}) => {
    

    return (
        <div className={styles.personbox}>
            <div className={styles.personboxx}>
                <ul className={styles.person}>
                    <li className={styles.userid}>{findItem.userId}</li>
                    <li className={styles.option}>{findItem.total_Count}</li>
                    <li className={styles.size}>{findItem.sizeCount}</li>
                    <li className={styles.time}>{findItem.depositTime}</li>
                    <li className={styles.username}>{findItem.userName}</li>
                    <li className={styles.method}>{findItem.method}</li>
                    <li className={styles.tel}>{findItem.phoneNumber}</li>

                </ul>
            </div>
        </div>
    )
}



export default Check;