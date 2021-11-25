// 1. import the 'useContext' to subscribe the provided data using the Context object
import {useContext} from 'react';
// 2. import the Global Context object
import {DataContext} from './../datacontext';

const DataGridContextComponent=()=>{
 
    // 3. Read / Consume data from the Context
    // This will read the data from the 'value' property from DataContext.Provider
    let dataSource = useContext(DataContext);


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
                        <tr key={rIndex}>
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

export default DataGridContextComponent;