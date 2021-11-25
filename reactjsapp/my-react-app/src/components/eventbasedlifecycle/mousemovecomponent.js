import {useState,Fragment,useEffect} from 'react';
const MouseMoveComponent=()=>{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getMousePositions=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
        console.log(`x = ${x} and y = ${y}`);
    };

    useEffect(()=>{
        // subscribing to an event
        window.addEventListener('mousemove', getMousePositions);
        return ()=>{
            // perform cleanup operations, releasing the event subscription
            window.removeEventListener('mousemove', getMousePositions);
        }
    },[]);


    return (
        <Fragment>
            <h2>The Mouse Move Component</h2>
            <div>
                <strong>
                    X-Position : {x} && Y-Position : {y}
                </strong>
            </div>
        </Fragment>
    );
};


export default MouseMoveComponent;