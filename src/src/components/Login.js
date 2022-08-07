import styles from "../css/Login.module.css";

const Login = () => {
    return (
      <div className={styles.formcontent}>
        <ul>

          <li className={styles.formfont}>아이디</li>
          <li className={styles.formfont}>비밀번호</li>
        </ul>

        <ul className={styles.forminput}>
          <form method="post" action="">
            <li><input type="text" name="userName" maxLenght="20"/></li>
            <li><input type="text" name="userId" maxLength="20"/></li>
            <div className={styles.buttongroup}>
              <input className={styles.submit} id="submit" type="submit" value="로그인" />
              <input className={styles.reset} id="reset" type="reset" value="회원가입" />
            </div>

          </form>
        </ul>

      </div >
    )
  }



export default Login;
