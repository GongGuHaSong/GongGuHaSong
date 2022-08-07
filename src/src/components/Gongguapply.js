import React from 'react';
import styles from '../css/Gongguapply.module.css';




const Gongguapply = () => {
    return (
        <div className={styles.gongguapply}>
            <div className={styles.gongguapplytab}>
                <div className={styles.formname}>공구 신청 폼</div>
                <div className={styles.line}></div>
            </div>

            <div className={styles.gongguinfo}>
                <p>영문 네이비 학잠 도안</p>
                 <img src="image/product.jpg" alt="상품사진" style={{ width: "250px", height: "250px" }} />
                    
                <p>가격 43,000원</p>
                <p>계좌번호 농협 김공구<br /><br/>12343-32-34234</p>
                <img src="image/sizeinfo.png" alt="상세사항" style={{ width: "250px", height: "150px" }} />
                    
            </div>

            <div className={styles.form}>
                <ul className={styles.applyform}>
                <form method="post" action="">
                    <li><label htmlFor="id">아이디&nbsp;&nbsp;&nbsp;</label><input type="text" name="person" /></li>
                    <li><label htmlFor="tel">연락처&nbsp;&nbsp;&nbsp;</label><input type="tel" name="p_tel" placeholder="010-1234-5678"
                        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" maxLength={13}/></li>
                    <li><label htmlFor="quantity">구매수량</label><input type="number" min="1" step="1" /></li>
                    
                    <li><label htmlFor="optioni">사이즈&nbsp;&nbsp;&nbsp;</label><input type="text" name="size" size="40" placeholder="수량 및 사이즈 입력(e.g. 총 2개 L-1개, XL-1개)" /></li>
                    
                    <li><label htmlFor="time">입금시간</label><input type="time" name="y_time" /></li>
                
                    <li><label htmlFor="name">입금자명</label><input type="text" name="name" /></li>
                    
                    <li><label htmlFor="method">배부방식</label></li>
                    <li> <input type="radio" name="take" id="deliver" value="deliver" /><label htmlFor="off">오프라인 현장 배부</label></li>
                   
                    <li><input type="radio" name="take" id="off" value="off" /><label htmlFor="deliver">택배</label></li>
                    <li><label htmlFor="address">&nbsp;&nbsp;&nbsp;주소&nbsp;&nbsp;&nbsp;</label><input type="text" name="address" placeholder="택배 배부를 선택하신 경우에만 적어주세요" style={{width: "420px"}} /></li>
                    
                    <div className={styles.buttongroup}>
                        <button className={styles.submit} type="submit" >공구참여</button>&nbsp;
                        <button className={styles.reset} type="reset">취소하기</button>
                        <br /><br />
                    </div></form></ul>
            </div>
        </div>
    )
}

export default Gongguapply;