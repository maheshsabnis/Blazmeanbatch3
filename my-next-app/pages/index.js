import styles from '../styles/Home.module.css'
import {useState} from 'react';
import Link from 'next/link';
import Navigator from './components/navigator';
import {useRouter} from 'next/router';
export default function Home() {
  let [x, setX]  = useState(0);
  let [y, setY]  = useState(0);
  let [res, setRes]  = useState(0);
  let [routeValue, setValue] = useState(0);

  // define router object
  const router = useRouter();

  const clickMe = ()=>{
     setRes(x +y);
  };

  const navigate=()=>{
    router.push({
      pathname: '/components/home', // /components/home?pValue=[Value-of-routeValue]
      query: {pValue: routeValue}
    });
  };
  return (
    <div className={styles.container}>
      <input type="text" value={x} onChange={(evt)=> setX(parseInt(evt.target.value))}/>
      <input type="text" value={y} onChange={(evt)=> setY(parseInt(evt.target.value))}/>
      <input type="text" value={res} readOnly/>
       <input type="button" value="Click Me" onClick={clickMe}/>
       <hr/>
       <Navigator></Navigator>
       <br/>
       Enter Value to Pass : 
        <input type="text" value={routeValue} 
          onChange={(evt)=> setValue(parseInt(evt.target.value))}/>
          <br/>
         <button onClick={navigate}>
            Navigate
         </button> 
    </div>
  )
}
