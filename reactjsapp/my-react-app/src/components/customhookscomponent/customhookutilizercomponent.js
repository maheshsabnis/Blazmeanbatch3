import {useAjax} from './useAjaxHook';
import DataGridComponent from '../reusablecomponents/datagridcomponent';
const CustomHookUtilizerComponent=()=>{
    const data  = useAjax('http://localhost:7013/api/departments');
    return (
        <div className="container">
            <DataGridComponent
             dataSource={data.data}></DataGridComponent>
        </div>
    );
};

export default CustomHookUtilizerComponent;