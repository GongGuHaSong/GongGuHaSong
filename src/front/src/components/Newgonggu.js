import React from 'react';
import styles from '../css/Newgonggu.module.css';
import nsicon from "../image/nsicon.png";


const Newgonggu = () => {
    return (
        <div className={styles.newgonggu}>
            <div className={styles.tab}>
                <div className={styles.dname}>
                    상세정보
                </div>
                <div className={styles.line}>

                </div>
            </div>
            <div className={styles.application}>
                <div className={styles.info}>
                    <form className={styles.details}>
                        <h2><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} />기본 정보</h2>

                        <ul>
                            <li><label htmlFor="공구 제목">공구 제목</label><input type="text" name="address" placeholder="20자 이내로 입력하세요" /></li>
                            <li><label htmlFor="예상 가격">예상 가격</label><input className={styles.inputcss} type="text" name="price" />&nbsp;원</li>
                            <li><label htmlFor="최소 수량">최소 수량</label><input className={styles.inputcss} type="text" name="quantity" />&nbsp;개</li>
                            <li>카테고리</li>
                            <li><input type="radio" name="cate" id="의류" />&nbsp;
                                <label htmlFor="의류">의류</label>&emsp;</li>
                            <li><input type="radio" name="cate" id="뱃지" />&nbsp;
                                <label htmlFor="뱃지">뱃지</label>&emsp;</li>
                            <li><input type="radio" name="cate" id="파우치" />&nbsp;
                                <label htmlFor="파우치">파우치</label>&emsp;</li>
                            <li><input type="radio" name="cate" id="문구류" />&nbsp;
                                <label htmlFor="문구류">문구류</label>&emsp;</li>
                            <li><input type="radio" name="cate" id="기타" />&nbsp;
                                <label htmlFor="기타">기타</label></li>

                        </ul>

                        <h2><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} />물품 사진</h2>
                        <ul>
                            <li>여기에 물품 사진을 등록하세요 &emsp;&emsp;&emsp;&emsp;&emsp;<input type="file" id="upload_file" /></li>
                            <li>물품 규격 및 사이즈 표 정보를 등록하세요 &emsp;<input type="file" id="upload_file" /></li>
                        </ul>
                        <h2><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} /> 프로젝트 소개</h2>
                        <ul>
                            <li><textarea className={styles.textareacss} placeholder="공구할 물품에 대한 정보를 기재하세요" rows="20" cols="80"></textarea></li>
                        </ul>
                        <h2><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} />진행 기간</h2>
                        <ul>
                            <li>수량조사 기간&emsp;<input  className={styles.inputcss} type="date" name="qdate1" />&nbsp;~<input type="date" name="qdate2" /></li>
                            <li>공구진행 기간&emsp;<input  className={styles.inputcss} type="date" name="date1" />&nbsp;~<input type="date" name="date2" /></li>
                        </ul>
                        <h2><img src={nsicon} alt="icon" style={{ width: "50px", height: "40px" }} /> 유의사항</h2>
                        <ul>
                            <li><textarea className={styles.textareacss} placeholder="환불 정보 등 공구시 유의사항을 기재하세요" rows="25" cols="80"></textarea></li>
                        </ul>

                        <ul className={styles.buttongroup}>
                            <li><button className={styles.reset} type="reset">취소하기</button></li>
                            <li><button className={styles.submit} type="submit">등록하기</button></li>
                        </ul>
                    </form>

                </div >

            </div>

        </div>
    )
}


export default Newgonggu;