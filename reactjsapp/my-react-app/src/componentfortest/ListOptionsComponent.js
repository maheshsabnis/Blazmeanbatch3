import React from 'react';

const ListOptionsComponent=(props)=>{
    return (
        <li className={props.value}>{props.value}</li>
    );
}

export default ListOptionsComponent;