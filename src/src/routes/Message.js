import Title from "../components/Title";
import Message from "../components/Message";
import Mymenubar from "../components/Mymenubar";
import styles from "../css/App.module.css";

const Messagepage = () =>{
    return (
    <div className={styles.root}>
      <div className={styles.menugrid}><Mymenubar /></div>
      <div className={styles.content}>
        <Title/>
        <Message />
        </div>
      </div>
      );

    
  }




export default Messagepage;