import {useEffect, useState, Fragment} from 'react';
const CodeSplitComponent=()=>{

    
    const [length,setLength] = useState(0);
    const [str, setStr] = useState('');

    let l = 0;
    let strValue='';
   // using Code splitting asynchronous loading
   // The 'module' represents the exported class
   import ('./operations').then((module)=>{
        let obj = new module.StringOperations();
        l = obj.getLength('Mahesh Sabnis');
        console.log(l);
        strValue = obj.changeCase('Mahesh Sabnis');
        console.log(strValue);

   }).catch((error)=>{
       console.log('====================================');
       console.log(`Error Occurred while loading the component ${error}`);
       console.log('====================================');
   });

   useEffect(()=>{
      setLength(l);
      setStr(strValue);
   },[]);

   return (
       <Fragment>
           Get Length :{length}
           <hr/>
           Change Case: {str}
       </Fragment>
   );
};

export default CodeSplitComponent; 