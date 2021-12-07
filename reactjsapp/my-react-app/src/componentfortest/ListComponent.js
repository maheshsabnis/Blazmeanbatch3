import React from 'react';
import ListOptionsComponent from './ListOptionsComponent';

const ListComponent=(props)=>{
    if(props.names === undefined || props.names.length ===0){
        return (
            <span className="empty">
                No Item in List
            </span>
        );
    }

    return (
        <div className="container">
            <ol className="names">
                {
                    props.names.map((n,idx)=>(
                        <ListOptionsComponent key={idx} value={n}></ListOptionsComponent>
                    ))
                }
            </ol>
        </div>
    );
};

export default ListComponent;