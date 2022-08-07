import Title from "../components/Title";
import Productcomponent from "../components/Productcomponent";
import Mymenubar from "../components/Mymenubar";
import styles from "../css/App.module.css";
import Quantitycomponent from "../components/Quantitycomponent";

const Order = () => {
  return (
    <div className={styles.root}>
      <div className={styles.menugrid}><Mymenubar /></div>
      <div className={styles.content}>
        <Title />
        <Productcomponent />
        <Quantitycomponent />
      </div>


    </div>
  );


}

export default Order;