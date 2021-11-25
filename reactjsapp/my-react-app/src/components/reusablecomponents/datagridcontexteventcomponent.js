// 1. import the 'useContext' to subscribe the provided data using the Context object
import {useContext} from 'react';
// 2. import the Global Context object
import {DataContext} from './../datacontext';

const DataGridContextEventComponent=()=>{
 
    // 3. Read / Consume data from the Context
    // This will read the data from the 'value' property from DataContext.Provider
    let receivedData = useContext(DataContext);
    console.log(`Received data is  = ${receivedData}`);
    // read the 0th key from receivedData
    // receivedData = {{}}                
    // receivedData[Object.keys(receivedData)[0]]: Read the receivedData (context values)
    // as an array and read keys from it using Object.kes(). And Object.kes()[0]
    // means the 0th entry from the 'value' from the Provider object of Context

    // read array data
    let dataSource= receivedData[Object.keys(receivedData)[0]];
    // read the dispatchAction callback
    let dispatchActionToParent = receivedData[Object.keys(receivedData)[1]];
    if(dataSource === undefined || dataSource.length === 0 ) {
        return (
            <div className="container">
                 <strong>
                    No records to display
                 </strong>   
            </div>
        );
    } else {
        // 1. read all keys

        const columns  = Object.keys(dataSource[0]);

       return ( <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    {
                        columns.map((c,i)=>(
                            <th key={i}>
                                {c}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    dataSource.map((row,rIndex)=>(
                        <tr key={rIndex} onClick={()=>dispatchActionToParent(row)}>
                            {
                                 columns.map((col,cIndex)=>(
                                    <td key={cIndex}>
                                        {row[col]}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>);
    } 

    
};

export default DataGridContextEventComponent;