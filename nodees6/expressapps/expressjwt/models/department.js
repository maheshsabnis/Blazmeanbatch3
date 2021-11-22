import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class department extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    deptno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deptname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "deptnameuniqueconstraints"
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    capacity: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "department_pkey",
        unique: true,
        fields: [
          { name: "deptno" },
        ]
      },
      {
        name: "deptnameuniqueconstraints",
        unique: true,
        fields: [
          { name: "deptname" },
        ]
      },
    ]
  });
  return department;
  }
}
