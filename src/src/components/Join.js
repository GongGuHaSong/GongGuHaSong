import styles from "../css/Join.module.css"

const Join = () => {
    return (
      <div className={styles.formcontent}>
        <ul>

          <li className={styles.formfont}>이름</li>
          <li className={styles.formfont}>아이디</li>
          <li className={styles.formfont}>비밀번호</li>
          <li className={styles.formfont}>비밀번호확인</li>

          <li className={styles.formfont}>연락처</li>
          
          <li className={styles.formfont}>숙명 이메일</li>
          <li className={styles.formfont}>주소</li>
        </ul>

        <ul className={styles.forminput}>
          <form method="post" action="">
            <li><input type="text" name="userName" maxlenght="20"/></li>
            <li><input type="text" name="userId" maxlength="20"/></li>
            <li><input type="password" name="userPassword" minlength="8"/></li>
            <li> <input type="passwordcheck" name="userPassword" minlength="8"/></li>
            <li><input type="tel" name="userTel" placeholder="010-1234-5678" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" maxlength="13" /></li>
            
            <li> <input type="text" placeholder="" name="userSookmyung" /></li>
            <li>< input className={styles.addressform} type="text" name="userAddress" /></li>
            <div className={styles.buttongroup}>
              <input className={styles.submit} id="submit" type="submit" value="회원가입" />
              <input className={styles.reset} id="reset" type="reset" value="취소하기" />
            </div>

          </form>
        </ul>

        <ul className={styles.formnotice}>
          <li className={styles.noticefont}></li>
          <li className={styles.noticefont}>20자 이내 영문 숫자 입력</li>
          <li className={styles.noticefont}>20자 이내 영문 숫자 입력</li>
          <li className={styles.noticefont}>20자 이내 영문 숫자 입력</li>
          <li className={styles.noticefont}>- 필수 입력</li>
          <li className={styles.noticefont}>@sookmyung.ac.kr까지 입력</li>
          <li className={styles.noticefont}></li>
        </ul>
      </div >
    )
  }


  export default Join;