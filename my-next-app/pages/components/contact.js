import styles from './../../styles/Home.module.css';
import Navigator from './navigator';
const ContactComponent=()=>{
    return(
        <div className={styles.container}>
            <h2>The Contact Component</h2>
            <Navigator></Navigator>
        </div>
    );
};

export default ContactComponent;