module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname : {
            type: DataTypes.STRING,
            allowNull: false
        },
        login : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        job : {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    User.associate = _associate;
    return User;
}

// INTERNAL

function _associate(models) {
    models.User.belongsTo(models.Group, {
      as : 'group'
    });
}
