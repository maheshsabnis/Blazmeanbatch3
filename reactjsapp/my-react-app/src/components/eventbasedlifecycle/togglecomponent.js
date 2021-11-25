// Fragment is standard React UI Layout
import {useState, Fragment} from 'react';
import MouseMoveComponent from './mousemovecomponent';
const ToggleComponent=()=>{

    const[show, canShow] = useState(true);


    return (
        <Fragment>
            <h2>Toggle Based boolean value</h2>
            {/* The MouseMoveComponent will be shown only when the show is 'true' */}
            <button  onClick={()=>{canShow(!show)}}>Toggle</button>
            {
                show && <MouseMoveComponent></MouseMoveComponent>
            }
            <div>
                <strong>
                    The Toggle Component
                </strong>
            </div>
        </Fragment>
    );
};

export default ToggleComponent;