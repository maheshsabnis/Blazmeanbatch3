import { Component } from "react";

class SimpleComponent extends Component {
  constructor(props) {
    super();
    // define a state object
    this.state = {
      x: 0,
      y: 0,
      res: 0,
      arr: [],
      name: "",
       
        empno:101,
        empname: 'Mahesh',
        salary:18383,

        deptname:['IT', 'HR', 'TR', 'SL'],
        seldname:''
       
    };
  }


  handlednamechange(evt){
    // The callback is guarantee that the complex object will be mutated
    this.setState({seldname: evt.target.value},()=>{});
  }

  handleXChange(evt) {
    this.setState({ x: parseInt(evt.target.value) });
  }
  handleYChange(evt) {
    this.setState({ y: parseInt(evt.target.value) });
  }
  handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }

  add() {
    let result = this.state.x + this.state.y;
    this.setState({ res: result });
  }
  sub() {
    let result = this.state.x - this.state.y;
    this.setState({ res: result });
  }
  pushName(){
    // array state cannot be mutated  directly 
  //   this.state.arr.push(this.state.name);
  // this.setState({arr: this.state.arr.push(this.state.name)});

  // 1.define a temporary array same as the schema of state array
  let temp = this.state.arr.slice();
  // 2. push data in this temp array
  temp.push(this.state.name);
  // 3. Mutate the state array with the temporary array usinng setState 
   
  this.setState({arr:temp});

    console.log(`Data in Array = ${JSON.stringify(this.state.arr)}`);
  }


  handleAllChanges(evt){
    // take an array of all elements based on the 'name' attribute
    // and when an event is raised on the editable element
    // reads its value and match the 'name' of element on which 'change' event is raised
    // with an array of elements from [evt.target.name], and if the 'name' match found then 
    // assign the value from that element to the state property 
    this.setState({[evt.target.name]:evt.target.value});
    console.log(`Updated value is  = ${JSON.stringify(this.state.empno)} ${JSON.stringify(this.state.empname)} ${JSON.stringify(this.state.salary)}`);
  }


  render() {
    return (
      <div className="container">
        <select className="form-control"
         value={this.state.seldname} onChange={this.handlednamechange.bind(this)}>
          {
            this.state.deptname.map((d,idx)=>(
              <option key={idx} value={d}>{d}</option>
            ))
          }
        </select>

        <hr/>
          <strong>
            The selected dname {this.state.seldname}
          </strong>
        <hr/>  


        <div className="form-group">
          <label>X</label>
          {/* {this.handleXChange.bind(this)}
             The handleXChange() is scope method of the current class. This method MUST be
             bind with UI element of the component so that when the component is rendered and raises
             click event, the binding MUST be evaluated and then the function i.e. handleXChange must be invoked
          */}
          <input
            type="text"
            value={this.state.x}
            onChange={this.handleXChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>X</label>
          <input
            type="text"
            value={this.state.y}
            onChange={this.handleYChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>X</label>
          <input type="text" value={this.state.res} readOnly />
        </div>
        <div className="form-group">
          <label>NAME</label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
        </div>
        <div className="form-group">
          <input
            type="button"
            value="Add"
            className="btn btn-primary"
            onClick={this.add.bind(this)}
          />
          <input
            type="button"
            value="Sub"
            className="btn btn-success"
            onClick={this.sub.bind(this)}
          />
          <input
            type="button"
            value="Push Data"
            className="btn btn-success"
            onClick={this.pushName.bind(this)}
          />
        </div>
        <hr />
         <div className="container">
           {
             JSON.stringify(this.state.arr)
           }
         </div>
         <hr />
         <h4>Using Complex Object</h4>
         <div className="form-group">

          <label>Emp No</label>
          
          <input
            type="text"
            value={this.state.empno} name="empno"
            onChange={this.handleAllChanges.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Emp Name</label>
          <input
            type="text"
            value={this.state.empname} name="empname"
            onChange={this.handleAllChanges.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Salary </label>
          <input type="text" value={this.state.salary} name="salary" 
          onChange={this.handleAllChanges.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default SimpleComponent;
