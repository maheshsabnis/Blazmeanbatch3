const DropdownComponent = (props) => {


   const handleChange=(evt)=>{
     props.getSelectedValue(evt.target.value);
   } 



  // 1. Make sure that the received data is present into the property, if not
  // render the fallback UI

  if(props.dataSource === undefined || props.dataSource.length === 0) {
      return (
          <div className="container">
              <strong>
                  No data to display
              </strong>
          </div>
      );
  }

  return (
    <select className="form-control"
      value={props.valueProperty}
      onChange={handleChange}>
      {props.dataSource.map((ds, idx) => (
        <option key={idx} value={ds}>
          {ds}
        </option>
      ))}
    </select>
  );
};

export default DropdownComponent;
