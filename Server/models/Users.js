module.exports = (sequelize, Datatypes) => {
    const Users = sequelize.define("Users", { 
        username: {
            type: Datatypes.STRING,
            allowNull: false
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        }
    })

    // Users.associate = (models) => {
    //     Users.hasMany(models.Posts, {
    //         onDelete: 'cascade'
    //     })
    // }

    return Users
}


// This is a schema for creating the table in the database
// Table name is Posts has 3 columns such as title, postText. username
// Cascade means when deleting a post we delete everything related to that post. ex: comment in the post