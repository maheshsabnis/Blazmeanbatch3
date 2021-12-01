import styles from './../../styles/Home.module.css';
import Link from 'next/link';
import Navigator from './navigator';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
const HomeComponent=()=>{
    const router = useRouter();
    const [value, setValue] = useState(0);

    // read the value from route
    useEffect(()=>{
        setValue(router.query.pValue)
    },[]);

    return(
        <div className={styles.container}>
            <h2>The Home Component</h2>
            <hr/>
            <Navigator></Navigator>
            <h2>
                The Received Route Value is = {
                    value
                }
            </h2>
        </div>
    );
};

export default HomeComponent;