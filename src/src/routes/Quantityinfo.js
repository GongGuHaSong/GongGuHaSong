import Title from "../components/Title";
import Quantitycomponent from "../components/Quantitycomponent";
import Menubar from "../components/Menubar";
import styles from "../css/App.module.css";

const Quantityinfo = () => {
  return (
    <div className={styles.root}>
      <div className={styles.menugrid}><Menubar /></div>
      <div className={styles.content}>
        <Title />
        <Quantitycomponent />
      </div>
    </div>
  );

      

  }

export default Quantityinfo;