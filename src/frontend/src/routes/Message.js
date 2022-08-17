import Title from "../components/Title";
import Message from "../components/Message";
import Mymenubar from "../components/Mymenubar";
import styles from "../css/App.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Messagepage = () =>{  
  const [send, getSend] = useState([])
  
  const getSends = async() => {
  await axios.get('/note/send/' + sessionStorage.user_id).then((res) => {
    const messagefilter = res.data.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.title === thing.title && t.sender === sessionStorage.user_id



    ))


  )



  getSend(messagefilter);
     } );
}


  

useEffect(() => {
  getSends();
  console.log(send)
}, [])


    return (
    <div className={styles.root}>
      <div className={styles.menugrid}><Mymenubar /></div>
      <div className={styles.content}>
        <Title/>
        <div className={styles.messagetab}>
            <div className={styles.mymessage}>쪽지내역</div>
            <div className={styles.line}></div>

        </div>


        {send.length !==0 ? send.map((send) => <Message key={send.counter} counter={send.receiver} itemtitle={send.title}/>): <div className={styles.messagenotice}>아직 주고 받은 쪽지가 없습니다.</div>}
        </div>
      </div>
      );

    
  }




export default Messagepage;