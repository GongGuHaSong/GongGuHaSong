import styles from "../css/Join.module.css";
import privacycheck from "../image/privacycheck.png";

const Privacy = () => {
    return (
      <div className={styles.formcontent}>
        <ul>

          <li className={styles.formfont}>이름</li>
          <li className={styles.formfont}>학번</li>
          <li className={styles.ormfont}>아이디</li>
          <li className={styles.formfont}>비밀번호</li>
          <li className={styles.formfont}>비밀번호확인</li>

          <li className={styles.ormfont}>연락처</li>

          <li className={styles.formfont}>숙명 이메일</li>
          <li className={styles.formfont}>주소</li>

        </ul>
        <ul className={styles.forminput}>
          <form method="post" action="">
            <li className={styles.inputcontent}>이름 가져오기</li>
            <li className={styles.inputcontent}>아이디 가져오기</li>
            <li><input type="password" name="userPassword" minlength="8"/></li>
            <li> <input type="passwordcheck" name="userPassword" minlength="8"/></li>
            <li className={styles.inputcontent}>연락처 가져오기</li>
            <li className={styles.inputcontent}>숙명이메일 가져오기</li>
            <li>< input className={styles.addressform} type="text" name="userAddress" /></li>

            <div className={styles.buttongroup}>
              <input className={styles.submit} id="submit" type="submit" value="수정하기" />
              <input className={styles.reset} id="reset" type="reset" value="취소하기" />
            </div>

          </form>
        </ul>
        
      </div >
    )
  }

  const Passwordcheck = () => {
    return (
      <div className={styles.privacynotice}>
        <form>
        <img className={styles.lock} src={privacycheck} alt="image" style={{ width: "60px", height: "60px", margin: "0", }} />

        <p>본인확인을 위해<br />비밀번호를 다시 한번 입력 바랍니다.</p>
        <p>비밀번호 입력&nbsp;&nbsp;<input type="password" style={{width: "300px", height:"26px"}}/></p>
          <input className={styles.privacysubmit} id="submit" type="submit" value="입력완료"/>
        </form>
      </div>
    )

  }


export default Passwordcheck;