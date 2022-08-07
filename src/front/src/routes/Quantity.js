import Title from "../components/Title";
import Quantity from "../components/Quantity.js";
import Menubar from "../components/Menubar";
import styles from "../css/App.module.css";
import Quantitylead from "../components/Quantitylead";


const Quantitypage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.menugrid}><Menubar /></div>
      <div className={styles.content}>
        <Title />
        <Quantity />
      </div>


    </div>
  );


}

export default Quantitypage;