import { useState } from "react";
import SecureService from "../../services/secureservice";
import DataGridComponent from './../reusablecomponents/datagridcomponent';
const TokenSecureComponent = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [auth, setAuthUser] = useState({ username: "", password: "" });
  const [departments, setDepartments] = useState([]);
  const [message, setMessage] = useState('');
  const serv = new SecureService();

  const clear=()=>{
      setUser({ username: "", password: "" });
      setAuthUser({ username: "", password: "" });
  };
  const registerNewUser=()=>{ 
    serv.createUser(user).then((response)=>{
        setMessage(response.data.message);
    }).catch((error)=>{
        setMessage(error);
    });
  };
  const authenticateUser=()=>{ 
    serv.loginUser(auth).then((response)=>{
        setMessage(response.data.message);
        // store token in sessionStorage
        sessionStorage.setItem('token', response.data.token);    
    }).catch((error)=>{
        setMessage(error);
    });
  };

  const getResponse=()=>{
    // read token from sessionStorage
    const token = sessionStorage.getItem('token');  
    // passing token to HTTP Call
    serv.getdepartments(token).then((response)=>{
        setMessage(response.data.message);
        setDepartments(response.data.records);    
    }).catch((error)=>{
        setMessage(error);
    });
  };
  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <tbody>
          <tr>
            <td>
              <div className="container">
                  <h5>Register New User</h5>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    value={user.username}  className="form-control"
                    onChange={(evt) =>
                      setUser({ ...user, username: evt.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={user.password} className="form-control"
                    onChange={(evt) =>
                      setUser({ ...user, password: evt.target.value })
                    }
                  />
                </div>
                <div className="btn-group-sm">
                  <input type="button" value="Register User" className="btn btn-primary"
                    onClick={registerNewUser}/>
                  <input type="button" value="Clear" className="btn btn-warning"
                    onClick={clear}/>
                </div>
              </div>
            </td>
            <td>
              <div className="container">
              <h5>Login User</h5>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    value={auth.username} className="form-control"
                    onChange={(evt) =>
                        setAuthUser({ ...auth, username: evt.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={auth.password} className="form-control"
                    onChange={(evt) =>
                        setAuthUser({ ...auth, password: evt.target.value })
                    }
                  />
                </div>
                <div className="btn-group-sm">
                  <input type="button" value="Login User" className="btn btn-primary"
                    onClick={authenticateUser}/>
                  <input type="button" value="Clear" className="btn btn-warning"
                   onClick={clear}/>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="container">
          {message}
      </div>
      <hr />
        <input type="button" value="Get Departments Data" className="btn btn-warning"
          onClick={getResponse}/>
       <DataGridComponent dataSource={departments}></DataGridComponent>             
    </div>
  );
};

export default TokenSecureComponent;
