import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _department from  "./department.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const department = _department.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);


  return {
    department,
    users,
  };
}
