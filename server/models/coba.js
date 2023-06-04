import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class coba extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    sensor_kelembaban: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sensor_n: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sensor_p: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sensor_k: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sensor_ph: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'coba',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
