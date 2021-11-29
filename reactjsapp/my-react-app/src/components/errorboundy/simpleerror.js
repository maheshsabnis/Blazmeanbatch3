import {useState} from 'react';
const MyComponent=()=>{
    let [counter, updateCounter]  = useState(0);
    const clickAndIncrement=()=>{
        updateCounter(counter++);
    };


    const successRender=()=>{
        return (
            <div className="container">
                <h2>The Counter Component</h2>
                <strong>
                    The Current Value of the Counter is = {counter}
                </strong>
            <hr />
                <input type="button" value="Increment" 
                 onClick={clickAndIncrement}/> 
            </div>
        );
    };

    const fallBackUI=(e)=>{
        return (
            <div className="container">
                <h2>The Counter Component</h2>
                <strong>
                    There is some error occurred in counter component
                    <br/>
                    {e.message}
                </strong>
            </div>
        );
    };


    try {
        if(counter >= 10) {
           throw new Error('Sorry!... you have reached to max clicks')  
        } else {
            return successRender();
        }
    }catch(e){
      return fallBackUI(e);
    }   

  
};


const ContainerComponent=()=>{
    return(
        <div className="container">
            <h1>The Container Component</h1>
            <MyComponent></MyComponent>
            <hr/>
            <input type="button" value="I am in Main Component"/>
        </div>
    );
};

export default ContainerComponent;
