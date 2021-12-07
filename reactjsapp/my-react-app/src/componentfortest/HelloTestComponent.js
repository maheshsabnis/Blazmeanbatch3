const HelloTestComponent=(props)=>{
    if(!props.message){
        return (
            <h1>Hello, Mr. Unknown</h1>
        );
    } else {
        return (
            <h1>Hello, Mr. {props.message}</h1>
        );
    }
};

export default HelloTestComponent;