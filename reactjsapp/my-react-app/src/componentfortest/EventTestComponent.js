import {useState} from 'react';
const EventTestComponent=()=>{
    const [text, setText] = useState(false);
    return (
        <div className="container">
            <button className="btn btn-danger" onClick={()=>{
                setText(!text);
            }}>
               {text === true? 'Update': 'Save'}     
            </button>
            <hr/>
            <div className="dv">
                {text.toString()}
            </div>
        </div>
    );
};

export default EventTestComponent;