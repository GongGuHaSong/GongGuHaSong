import styles from "../css/App.module.css";
import Menubar from "../components/Menubar";
import Title from "../components/Title";
import Productcomponent from "../components/Productcomponent";

function Home({product}) {
    return(
      <div className={styles.root}>
        <div className={styles.menugrid}><Menubar /></div>
        <div className={styles.content}>
        <Title />
        {product.map(product => 
      <Productcomponent key={product._id} 
      product={product}
      />
      )}

        
        </div>
       
      </div>
    )
}

export default Home;