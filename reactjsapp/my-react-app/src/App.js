// import Component from other file
import OtherComponent from "./othercomponent";


// a JavaScript function, this will return HTML
// The 'props' represents an object that is used to accept values from parent
function App(props) {
  // local Variable
  let myValue = 100;

  function clickMe(){
    alert('Button is Clicked');
  }
  return (
     <div className="container">
       <h1>The First Component</h1>
       <div className="container">
         <strong>
            Value Received from Parent is {props.msg}
            <br />
            Value from Object is = {props.o.a}
         </strong>
       </div>
        <br/>
        <div className="container">
           <h5>{myValue}</h5>  
        </div> 

       {/* the 'clickMe()' function is bind with onClick event of button */}
       <input type="button" className="btn btn-primary" value="Click Me" onClick={clickMe}/>
       <br />
       {/* Component is used as Custom Tag 
         passing local variable value to child */}
       <MyChildComponentOne value={myValue}></MyChildComponentOne>
       <br />
       <MyChildComponentTwo value={myValue}></MyChildComponentTwo>
       <br/>
       <OtherComponent value={myValue}></OtherComponent>
     </div>
  );
}



function MyChildComponentOne(props){
   return (
     <div className="container">
         <h3>The My Child Component One</h3>
         <strong>
            Value from Parent is = {props.value}
         </strong>
     </div>
   );
}

function MyChildComponentTwo(props){
  return (
    <div className="container">
        <h3>The My Child Component Two</h3>
        <strong>
            Value from Parent is = {props.value}
         </strong>
    </div>
  );
}


// The component is exported
export default App;
