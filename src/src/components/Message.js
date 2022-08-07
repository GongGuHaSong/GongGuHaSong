import styles from "../css/Message.module.css"



const Message = () => {
    return (
    <div className={styles.message}>
        <div className={styles.messagetab}>
            <button className={styles.mymessage}>쪽지내역</button>
            <div className={styles.line}></div>

        </div>
        <div className={styles.messagebox}>
            <ul className={styles.messagecontainer}>
                <li className={styles.receiverid}>상대방 아이디</li>
                <li className={styles.time}>시간</li>
                <li className={styles.messagecontent}>hype boy</li>
            </ul>

        </div>
        </div>
    )
}





export default Message;